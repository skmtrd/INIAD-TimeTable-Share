import { NextRequest, NextResponse } from 'next/server';
import type { z } from 'zod';
import { frourioSpec } from './frourio';
import type { POST } from './route';

type RouteChecker = [typeof POST];

type SpecType = typeof frourioSpec;

type Controller = {
  post: (
    req: {
      body: z.infer<SpecType['post']['body']>;
    },
  ) => Promise<
    | {
        status: 201;
        body: z.infer<SpecType['post']['res'][201]['body']>;
      }
    | {
        status: 400;
        body: z.infer<SpecType['post']['res'][400]['body']>;
      }
    | {
        status: 401;
        body: z.infer<SpecType['post']['res'][401]['body']>;
      }
    | {
        status: 500;
        body: z.infer<SpecType['post']['res'][500]['body']>;
      }
  >;
};

type MethodHandler = (req: NextRequest | Request) => Promise<NextResponse>;;

type ResHandler = {
  POST: MethodHandler
};

export const createRoute = (controller: Controller): ResHandler => {
  return {
    POST: async (req) => {
      const formData = await req.formData();
      const body = frourioSpec.post.body.safeParse(
        Object.fromEntries(
          [
            ['file', formData.get('file') ?? undefined],
            ['userId', formData.get('userId') ?? undefined],
          ].filter(entry => entry[1] !== undefined),
        ),
      );

      if (body.error) return createReqErr(body.error);

      const res = await controller.post({ body: body.data });

      switch (res.status) {
        case 201: {
          const body = frourioSpec.post.res[201].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 201 });
        }
        case 400: {
          const body = frourioSpec.post.res[400].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 400 });
        }
        case 401: {
          const body = frourioSpec.post.res[401].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 401 });
        }
        case 500: {
          const body = frourioSpec.post.res[500].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 500 });
        }
        default:
          throw new Error(res satisfies never);
      }
    },
  };
};

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
    typeof body === 'string'
  ) {
    return new NextResponse(body, init);
  }

  return NextResponse.json(body, init);
};

type FrourioError =
  | { status: 422; error: string; issues: { path: (string | number)[]; message: string }[] }
  | { status: 500; error: string; issues?: undefined };

const createReqErr = (err: z.ZodError) =>
  NextResponse.json<FrourioError>(
    {
      status: 422,
      error: 'Unprocessable Entity',
      issues: err.issues.map((issue) => ({ path: issue.path, message: issue.message })),
    },
    { status: 422 },
  );

const createResErr = () =>
  NextResponse.json<FrourioError>(
    { status: 500, error: 'Internal Server Error' },
    { status: 500 },
  );
