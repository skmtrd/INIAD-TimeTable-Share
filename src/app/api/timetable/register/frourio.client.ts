import type { FrourioClientOption } from '@frourio/next';
import { z } from 'zod';
import { frourioSpec } from './frourio'

export const fc = (option?: FrourioClientOption) => ({
  $url: $url(option),
  ...methods(option),
});

export const $fc = (option?: FrourioClientOption) => ({
  $url: {
    post(): string {
      const result = $url(option).post();

      if (!result.isValid) throw result.reason;

      return result.data;
    },
  },
  async $post(req: Parameters<ReturnType<typeof methods>['$post']>[0]): Promise<z.infer<typeof frourioSpec.post.res[201]['body']>> {
    const result = await methods(option).$post(req);

    if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

    if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
  },
});

const $url = (option?: FrourioClientOption) => ({
  post(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL ?? ''}/api/timetable/register` };
  },
});

const methods = (option?: FrourioClientOption) => ({
  async $post(req: { body: z.infer<typeof frourioSpec.post.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 201; headers?: undefined; body: z.infer<typeof frourioSpec.post.res[201]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 400; headers?: undefined; body: z.infer<typeof frourioSpec.post.res[400]['body']> } | { status: 401; headers?: undefined; body: z.infer<typeof frourioSpec.post.res[401]['body']> } | { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec.post.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url(option).post();

    if (url.reason) return url;

    const parsedBody = frourioSpec.post.body.safeParse(req.body);

    if (!parsedBody.success) return { isValid: false, reason: parsedBody.error };

    const formData = new FormData();

    Object.entries(parsedBody.data).forEach(([key, value]) => {
      if (value === undefined) return;

      if (Array.isArray(value)) {
        value.forEach((item) =>
          item instanceof File
            ? formData.append(key, item, item.name)
            : formData.append(key, item.toString()),
        );
      } else if (value instanceof File) {
        formData.set(key, value, value.name);
      } else {
        formData.set(key, value.toString());
      }
    });

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'POST',
        ...option?.init,
        body: formData,
        ...req.init,
        headers: { ...option?.init?.headers, ...req.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 201: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec.post.res[201].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 201, body: body.data },
          raw: result.res,
        };
      }
      case 400: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec.post.res[400].body.safeParse(resBody.data);

        if (!body.success) return { ok: false, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: false,
          isValid: true,
          failure: { status: 400, body: body.data },
          raw: result.res,
        };
      }
      case 401: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec.post.res[401].body.safeParse(resBody.data);

        if (!body.success) return { ok: false, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: false,
          isValid: true,
          failure: { status: 401, body: body.data },
          raw: result.res,
        };
      }
      case 500: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec.post.res[500].body.safeParse(resBody.data);

        if (!body.success) return { ok: false, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: false,
          isValid: true,
          failure: { status: 500, body: body.data },
          raw: result.res,
        };
      }
      default:
        return { ok: result.res.ok, raw: result.res, error: new Error(`Unknown status: ${result.res.status}`) };
    }
  },
});
