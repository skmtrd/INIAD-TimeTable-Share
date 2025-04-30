import { $fc } from "../app/api/frourio.client"; // 生成されたルートクライアントをインポート

// High-Level Client インスタンスを作成
export const apiClient = $fc({
  // 必要に応じてオプションを指定
  baseURL: process.env.BETTER_AUTH_URL, // APIのベースURL
  // fetch 関数に渡すデフォルトオプション
  init: {
    headers: {
      "X-Custom-Header": "my-value",
    },
  },
});
