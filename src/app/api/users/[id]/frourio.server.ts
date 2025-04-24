import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { frourioSpec } from './frourio';
import type { GET, PUT } from './route';

type RouteChecker = [typeof GET, typeof PUT];

export const paramsSchema = z.object({ 'id': frourioSpec.param });

type ParamsType = z.infer<typeof paramsSchema>;

type SpecType = typeof frourioSpec;

type Controller = {
  get: (
    req: {
      params: ParamsType;
    },
  ) => Promise<
    | {
        status: 200;
        body: z.infer<SpecType['get']['res'][200]['body']>;
      }
    | {
        status: 404;
        body: z.infer<SpecType['get']['res'][404]['body']>;
      }
  >;
  put: (
    req: {
      params: ParamsType;
      body: z.infer<SpecType['put']['body']>;
    },
  ) => Promise<
    | {
        status: 200;
        body: z.infer<SpecType['put']['res'][200]['body']>;
      }
    | {
        status: 403;
        body: z.infer<SpecType['put']['res'][403]['body']>;
      }
    | {
        status: 404;
        body: z.infer<SpecType['put']['res'][404]['body']>;
      }
  >;
};

type MethodHandler = (req: NextRequest | Request, option: { params: Promise<ParamsType> }) => Promise<NextResponse>;;

type ResHandler = {
  GET: MethodHandler
  PUT: MethodHandler
};

export const createRoute = (controller: Controller): ResHandler => {
  const middleware = (next: (
    args: { req: NextRequest, params: ParamsType },
  ) => Promise<NextResponse>): MethodHandler => async (originalReq, option) => {
    const req = originalReq instanceof NextRequest ? originalReq : new NextRequest(originalReq);
    const params = paramsSchema.safeParse(await option.params);

    if (params.error) return createReqErr(params.error);


      return await next({ req, params: params.data })
      
    
  };

  return {
    GET: middleware(async ({ req, params }) => {
      const res = await controller.get({ params });

      switch (res.status) {
        case 200: {
          const body = frourioSpec.get.res[200].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 200 });
        }
        case 404: {
          const body = frourioSpec.get.res[404].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 404 });
        }
        default:
          throw new Error(res satisfies never);
      }
    }),
    PUT: middleware(async ({ req, params }) => {
      const body = frourioSpec.put.body.safeParse(await req.json().catch(() => undefined));

      if (body.error) return createReqErr(body.error);

      const res = await controller.put({ body: body.data, params });

      switch (res.status) {
        case 200: {
          const body = frourioSpec.put.res[200].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 200 });
        }
        case 403: {
          const body = frourioSpec.put.res[403].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 403 });
        }
        case 404: {
          const body = frourioSpec.put.res[404].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 404 });
        }
        default:
          throw new Error(res satisfies never);
      }
    }),
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
