import type React from "react";
import { useState } from "react";

export const useProfileEdit = (props: {
  name: string;
  twitterId: string | null;
  id: string;
  mutate: () => void;
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editName, setEditName] = useState(props.name);
  const [editTwitterId, setEditTwitterId] = useState(props.twitterId);

  const handleSave = async () => {
    const response = await fetch(`/api/users/${props.id}`, {
      method: "PUT",
      body: JSON.stringify({ name: editName, twitterId: editTwitterId }),
    });
    if (response.ok) {
      setIsEditMode(false);
      props.mutate();
    }
  };

  const handleToggleEditMode = () => {
    if (isEditMode) {
      setEditName("");
      setEditTwitterId("");
    } else {
      setEditName(props.name);
      setEditTwitterId(props.twitterId);
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
