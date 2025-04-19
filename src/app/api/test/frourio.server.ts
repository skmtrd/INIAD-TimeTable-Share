import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { z } from "zod";
import { frourioSpec } from "./frourio";
import type { GET, POST } from "./route";

type RouteChecker = [typeof GET, typeof POST];

type SpecType = typeof frourioSpec;

type Controller = {
  get: (req: {}) => Promise<{
    status: 200;
    body: z.infer<SpecType["get"]["res"][200]["body"]>;
  }>;
  post: (req: { body: z.infer<SpecType["post"]["body"]> }) => Promise<
    | {
        status: 200;
        body: z.infer<SpecType["post"]["res"][200]["body"]>;
      }
    | {
        status: 404;
        body: z.infer<SpecType["post"]["res"][404]["body"]>;
      }
  >;
};

type MethodHandler = (req: NextRequest | Request) => Promise<NextResponse>;

type ResHandler = {
  GET: MethodHandler;
  POST: MethodHandler;
};

export const createRoute = (controller: Controller): ResHandler => ({
  GET: async (req) => {
    const res = await controller.get({});

    switch (res.status) {
      case 200: {
        const body = frourioSpec.get.res[200].body.safeParse(res.body);

        if (body.error) return createResErr();

        return createResponse(body.data, { status: 200 });
      }
      default:
        throw new Error(res.status satisfies never);
    }
  },
  POST: async (req) => {
    const body = frourioSpec.post.body.safeParse(
      await req.json().catch(() => undefined),
    );

    if (body.error) return createReqErr(body.error);

    const res = await controller.post({ body: body.data });

    switch (res.status) {
      case 200: {
        const body = frourioSpec.post.res[200].body.safeParse(res.body);

        if (body.error) return createResErr();

        return createResponse(body.data, { status: 200 });
      }
      case 404: {
        const body = frourioSpec.post.res[404].body.safeParse(res.body);

        if (body.error) return createResErr();

        return createResponse(body.data, { status: 404 });
      }
      default:
        throw new Error(res satisfies never);
    }
  },
});

const createResponse = (body: unknown, init: ResponseInit): NextResponse => {
  if (
    ArrayBuffer.isView(body) ||
    body === undefined ||
    body === null ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    body instanceof FormData ||
    body instanceof ReadableStream ||
    body instanceof URLSearchParams ||
    typeof body === "string"
  ) {
    return new NextResponse(body, init);
  }

  return NextResponse.json(body, init);
};

type FrourioError =
  | {
      status: 422;
      error: string;
      issues: { path: (string | number)[]; message: string }[];
    }
  | { status: 500; error: string; issues?: undefined };

const createReqErr = (err: z.ZodError) =>
  NextResponse.json<FrourioError>(
    {
      status: 422,
      error: "Unprocessable Entity",
      issues: err.issues.map((issue) => ({
        path: issue.path,
        message: issue.message,
      })),
    },
    { status: 422 },
  );

const createResErr = () =>
  NextResponse.json<FrourioError>(
    { status: 500, error: "Internal Server Error" },
    { status: 500 },
  );
