import { apiClient } from "@/lib/apiClient";
import { authClient } from "@/lib/auth-client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

export const useDashboard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(
    "ファイルを選択してください",
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: session } = authClient.useSession();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage(`${e.target.files[0].name}をアップロード`);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("ファイルを選択してください");
      return;
    }

    if (!session || !session.user.id) {
      setMessage("ログインしてください");
      return;
    }

    try {
      const requestBody = {
        file: file,
        userId: session.user.id,
      };
      setIsUploading(true);
      setMessage("アップロード中...");

      await apiClient["timetable/register"].$post({
        body: requestBody,
      });
      setMessage("アップロードに成功しました");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("アップロードエラー:", err);
      setMessage(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setIsUploading(false);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return {
    file,
    isUploading,
    message,
    fileInputRef,
    handleFileChange,
    handleUpload,
    openFileDialog,
  };
};
