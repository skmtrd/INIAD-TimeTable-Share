import { apiClient } from "@/lib/apiClient";
import type React from "react";
import { useEffect, useState } from "react";

export const useProfileEdit = (
  name: string,
  twitterId: string | null,
  id: string,
  image: string | null,
  mutate: () => void,
  authUserMutate: () => void,
  isAccessUserPage: boolean,
) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editName, setEditName] = useState(name);
  const [editTwitterId, setEditTwitterId] = useState(twitterId);
  const [editImage, setEditImage] = useState<string | null>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    if (image) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        try {
          const base64 = canvas.toDataURL("image/jpeg");
          setEditImage(base64);
        } catch (error) {
          console.error("Canvas export error:", error);
          setEditImage(image);
        }
      };

      img.onerror = () => {
        console.error("Image loading failed");
        setEditImage(image);
      };

      img.src = image;
    } else {
      setEditImage("");
    }
  }, [image]);

  const handleSave = async () => {
    if (isUploading) return;
    try {
      setIsUploading(true);
      await apiClient["users/[id]"].$put({
        params: { id },
        body: { name: editName, twitterId: editTwitterId, image: editImage },
      });
      mutate();
    } catch (error) {
      console.error(error);
    } finally {
      if (isAccessUserPage) {
        authUserMutate();
      }
      setIsUploading(false);
      setIsEditMode(false);
    }
  };

  const handleToggleEditMode = () => {
    if (isEditMode) {
      setEditName("");
      setEditTwitterId("");
    } else {
      setEditName(name);
      setEditTwitterId(twitterId);
    }
    setIsEditMode((prev) => !prev);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  };

  const handleTwitterIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTwitterId(e.target.value);
  };

  return {
    editName,
    editTwitterId,
    isEditMode,
    isUploading,
    handleSave,
    handleToggleEditMode,
    handleNameChange,
    handleTwitterIdChange,
    editImage,
    setEditImage,
  };
};
