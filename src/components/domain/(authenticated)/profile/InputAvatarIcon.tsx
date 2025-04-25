"use client";

import { Edit as EditIcon } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  Typography,
  useTheme, // Theme を利用してスタイルを設定
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDropzone } from "react-dropzone";

type Props = {
  testid?: string;
  width?: string | number;
  aspectRatio?: number;
  resultWidth: number;
  value: string | null | undefined;
  onChange: (value: string) => void;
  maxSize?: number;
};

// resizeBase64Img 関数の改善
function resizeBase64Img(base64: string, width: number, height: number) {
  return new Promise<string>((resolve, reject) => {
    const img = document.createElement("img");

    // CORSエラー対策
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      // コンテキスト取得失敗時のエラーハンドリングを追加
      if (!ctx) {
        const errorMsg = "Failed to get 2D context";
        console.error(errorMsg);
        reject(new Error(errorMsg));
        return;
      }

      try {
        ctx.drawImage(img, 0, 0, width, height);
        const resultDataUrl = canvas.toDataURL("image/jpeg"); // JPEG形式で出力
        resolve(resultDataUrl);
      } catch (error) {
        console.error("Canvas operation failed:", error);
        reject(new Error("Canvas operation failed"));
      }
    };

    img.onerror = (err) => {
      console.error("Image loading failed in resizeBase64Img:", err); // エラーログ追加
      reject(err instanceof Error ? err : new Error("Image loading failed")); // エラーオブジェクトを渡す
    };

    // Base64文字列が正しいか簡易チェック
    if (!base64 || !base64.startsWith("data:image/")) {
      const errorMsg = `Invalid base64 string received by resizeBase64Img: ${base64 ? `${base64.substring(0, 50)}...` : "null or undefined"}`;
      console.error(errorMsg);
      reject(new Error(errorMsg));
      return;
    }

    img.src = base64;
  });
}

const InputAvatarIcon = ({
  aspectRatio = 1,
  maxSize = 1024 * 1024 * 4, // 4MB
  resultWidth,
  value = "",
  onChange,
  testid,
}: Props) => {
  const editor = useRef<AvatarEditor>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const [image, setImage] = useState<File | undefined>();
  const [scale, setScale] = useState(1.0);
  const [open, setOpen] = useState(false);

  const onDropAccepted = useCallback((dropped: File[]) => {
    // ファイル選択入力をリセット（同じファイルを選択できるようにする）
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setImage(dropped[0]);
    setScale(1.0);
    setOpen(true);
  }, []);

  const { getInputProps } = useDropzone({
    maxSize,
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    onDropAccepted,
  });

  // ファイル選択画面を手動で開く関数
  const handleOpenFileDialog = () => {
    // ファイル選択入力をリセット（同じファイルを選択できるようにする）
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  // 画像をクロップしてリサイズし、onChangeで親に通知する関数
  const cropImage = async () => {
    if (!editor.current) {
      console.error("AvatarEditor ref is not available.");
      return;
    }

    let dataUrl: string | undefined;
    try {
      // AvatarEditorからクロップされた画像(Canvas)を取得
      const canvas = editor.current.getImageScaledToCanvas(); // オリジナル解像度で取得
      // CanvasをJPEG形式のBase64文字列に変換
      dataUrl = canvas.toDataURL("image/jpeg");
    } catch (error) {
      console.error("Failed to get image from AvatarEditor:", error);
      alert(
        `画像の処理中にエラーが発生しました。別の画像を試してください。エラー: ${error instanceof Error ? error.message : String(error)}`,
      );
      setOpen(false);
      setImage(undefined);
      return;
    }

    if (!dataUrl) {
      console.error("Failed to get data URL from canvas.");
      setOpen(false);
      setImage(undefined);
      return;
    }

    try {
      // 指定された幅にリサイズ
      const resultHeight = resultWidth / aspectRatio;
      // console.log(`Resizing to: ${resultWidth}x${resultHeight}`); // デバッグ用
      const result = await resizeBase64Img(dataUrl, resultWidth, resultHeight);
      // console.log("onChange will be called with (first 100 chars):", result.substring(0, 100)); // デバッグ用

      // *** 重要: ここで親コンポーネントに新しい画像データを通知 ***
      onChange(result);

      setOpen(false); // ダイアログを閉じる
      setImage(undefined); // 編集用の一時ファイルはクリア
    } catch (error) {
      console.error("Image resizing failed:", error);
      alert(
        `画像の処理に失敗しました: ${error instanceof Error ? error.message : String(error)}`,
      ); // ユーザーへの簡易的なエラー通知
      setOpen(false);
      setImage(undefined);
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setImage(undefined);
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  return (
    <Box data-testid={testid}>
      <Box sx={{ position: "relative", width: "fit-content" }}>
        {/* ファイル選択用の非表示input (refを追加) */}
        <input
          {...getInputProps()}
          style={{ display: "none" }}
          ref={fileInputRef}
        />

        {/* Avatarコンポーネントとバッジ */}
        {value && (
          <Box
            onClick={handleOpenFileDialog}
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: 0.9,
                transform: "scale(1.02)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Badge
              color="success"
              overlap="circular"
              badgeContent={<EditIcon sx={{ fontSize: 10 }} />}
            >
              <Avatar
                src={value}
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: "hsl(240 5.9% 90%)",
                }}
              />
            </Badge>
          </Box>
        )}

        {/* 画像がない場合は空のAvatarを表示 */}
        {!value && (
          <Box
            onClick={handleOpenFileDialog}
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
                transform: "scale(1.02)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Badge
              color="primary"
              overlap="circular"
              badgeContent={<EditIcon sx={{ fontSize: 10 }} />}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: "hsl(240 5.9% 90%)",
                }}
              />
            </Badge>
          </Box>
        )}
      </Box>

      {/* Cropping Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>イメージを切り抜く</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: theme.shape.borderRadius,
              border: `1px solid ${theme.palette.divider}`,
              aspectRatio: `${aspectRatio} / 1`,
              margin: "auto",
              width: "100%",
              maxWidth: 500,
              bgcolor: "grey.200",
            }}
          >
            {/* 編集中の画像(image)をAvatarEditorに渡す */}
            {image && (
              <AvatarEditor
                ref={editor}
                scale={scale}
                width={1000} // 内部解像度 (高めに設定)
                height={1000 / aspectRatio}
                image={image} // 編集中の File オブジェクト
                border={0}
                borderRadius={1000}
                color={[255, 255, 255, 0.6]}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </Box>

          <Box sx={{ my: 2, px: 1 }}>
            <Typography gutterBottom variant="caption">
              ズーム
            </Typography>
            <Slider
              aria-label="ズームスライダー"
              value={scale}
              min={1}
              max={3}
              step={0.01}
              onChange={handleSliderChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="outlined">
            キャンセル {/* 「閉じる」より「キャンセル」の方が適切かも */}
          </Button>
          <Button onClick={cropImage} variant="contained" autoFocus>
            切り取る
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InputAvatarIcon;
