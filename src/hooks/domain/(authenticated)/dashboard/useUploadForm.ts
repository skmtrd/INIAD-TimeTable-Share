import { useAuthUserSWR } from "@/hooks/data/useAuthUserSWR";
import { apiClient } from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
export const useUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(
    "ファイルを選択してください",
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { authUser } = useAuthUserSWR();
  const router = useRouter();
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

    if (!authUser || !authUser.id) {
      setMessage("ログインしてください");
      return;
    }

    if (isUploading) {
      return;
    }

    try {
      const requestBody = {
        file: file,
        userId: authUser?.id,
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
      router.push("/profile");
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
