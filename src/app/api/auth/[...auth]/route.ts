import { auth } from '@/auth';
// Next.js専用のHandlerを導入する
// Next.js以外の場合はhttps://www.better-auth.com/docs/integrations/nodeを参照してください
import { toNextJsHandler } from 'better-auth/next-js';
export const { POST, GET } = toNextJsHandler(auth);
