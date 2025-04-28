import type { FrourioClientOption } from '@frourio/next';
import { z } from 'zod';
import { frourioSpec } from './frourio'

export const fc_moy59l = (option?: FrourioClientOption) => ({
  $url: $url(option),
  ...methods(option),
});

export const $fc_moy59l = (option?: FrourioClientOption) => ({
  $url: {
    put(): string {
      const result = $url(option).put();

      if (!result.isValid) throw result.reason;

      return result.data;
    },
  },
  async $put(req: Parameters<ReturnType<typeof methods>['$put']>[0]): Promise<z.infer<typeof frourioSpec.put.res[200]['body']>> {
    const result = await methods(option).$put(req);

    if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

    if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
  },
});

const $url = (option?: FrourioClientOption) => ({
  put(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL ?? ''}/api/privacy` };
  },
});

const methods = (option?: FrourioClientOption) => ({
  async $put(req: { body: z.infer<typeof frourioSpec.put.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 200; headers?: undefined; body: z.infer<typeof frourioSpec.put.res[200]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 401; headers?: undefined; body: z.infer<typeof frourioSpec.put.res[401]['body']> } | { status: 404; headers?: undefined; body: z.infer<typeof frourioSpec.put.res[404]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url(option).put();

    if (url.reason) return url;

    const parsedBody = frourioSpec.put.body.safeParse(req.body);

    if (!parsedBody.success) return { isValid: false, reason: parsedBody.error };

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'PUT',
        ...option?.init,
        body: JSON.stringify(parsedBody.data),
        ...req.init,
        headers: { ...option?.init?.headers, 'content-type': 'application/json', ...req.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 200: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec.put.res[200].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 200, body: body.data },
          raw: result.res,
        };
      }
      case 401: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec.put.res[401].body.safeParse(resBody.data);

        if (!body.success) return { ok: false, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: false,
          isValid: true,
          failure: { status: 401, body: body.data },
          raw: result.res,
        };
      }
      case 404: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec.put.res[404].body.safeParse(resBody.data);

        if (!body.success) return { ok: false, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: false,
          isValid: true,
          failure: { status: 404, body: body.data },
          raw: result.res,
        };
      }
      default:
        return { ok: result.res.ok, raw: result.res, error: new Error(`Unknown status: ${result.res.status}`) };
    }
  },
});
