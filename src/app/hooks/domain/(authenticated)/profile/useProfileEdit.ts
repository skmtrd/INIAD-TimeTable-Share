import type React from "react";
import { useState } from "react";

export const useProfileEdit = (
  name: string,
  twitterId: string | null,
  id: string,
  mutate: () => void,
) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editName, setEditName] = useState(name);
  const [editTwitterId, setEditTwitterId] = useState(twitterId);

  const handleSave = async () => {
    const response = await fetch(`/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: editName, twitterId: editTwitterId }),
    });
    if (response.ok) {
      setIsEditMode(false);
      mutate();
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
    handleSave,
    handleToggleEditMode,
    handleNameChange,
    handleTwitterIdChange,
  };
};
