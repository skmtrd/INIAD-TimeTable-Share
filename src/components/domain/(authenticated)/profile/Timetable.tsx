"use client";
import ParticipantsModal from "@/components/domain/(authenticated)/dashboard/ParticipantsModal";
import type { Timetable } from "@/types";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

// 授業データの型定義
type Lecture = {
  id: string;
  name: string;
  day: string;
  periodNumber: number;
} | null;

// 曜日のキーの型定義
const daysConst = [
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
] as const; // as const を追加してリテラル型にする
type DayKey = (typeof daysConst)[number]; // "monday" | "tuesday" | ...

// 時限の時間帯
const periodTimes = [
  "9:00 - 10:30",
  "10:40 - 12:10",
  "13:00 - 14:30",
  "14:45 - 16:15",
  "16:30 - 18:00",
  "18:15 - 19:45",
];

// 曜日の配列 (型注釈を DayKey[] に変更)
const days: DayKey[] = [
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
];
const dayLabels = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

type ClassCellProps = {
  classData: Lecture | null;
  isLoading: boolean;
  isAccessUserPage: boolean;
};

// 授業セルコンポーネント
const ClassCell: React.FC<ClassCellProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    if (!props.isAccessUserPage) return;
    setIsModalOpen(true);
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  if (props.isLoading) {
    return (
      <Box
        sx={{
          height: "100%",
          p: { xs: 0.5, sm: 0.75, md: 1 },
          backgroundColor: "white",
          borderRadius: { xs: "0.25rem", sm: "0.5rem", md: "0.5rem" },
        }}
      />
    );
  }
  if (!props.classData) {
    return (
      <Box
        sx={{
          height: "100%",
          p: { xs: 0.5, sm: 0.75, md: 1 },
          backgroundColor: "#fff5f9",
          borderRadius: { xs: "0.25rem", sm: "0.5rem", md: "0.5rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#222222",
            fontSize: "0.75rem",
            fontStyle: "italic",
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      onClick={handleOpen}
      sx={{
        height: "100%",
        p: { xs: 0.75, sm: 0.85, md: 1 },
        backgroundColor: "white",
        borderRadius: { xs: "0.25rem", sm: "0.5rem", md: "0.5rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: props.isAccessUserPage ? "pointer" : "default",
        background: "#f8f7ff",
        "&:hover": {
          background: "#f0efff",
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#333333",
          fontWeight: 600,
          fontSize: { xs: "0.45rem", sm: "0.775rem", md: "0.875rem" },
          mb: { xs: 0, sm: 0.5 },
          lineHeight: { xs: 1.1, sm: 1.3, md: 1.4 },
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: { xs: 3, sm: 3 },
          WebkitBoxOrient: "vertical",
        }}
      >
        {props.classData.name}
      </Typography>
      <ParticipantsModal
        isOpen={isModalOpen}
        handleClose={handleClose}
        lectureId={props.classData.id}
        lectureName={props.classData.name}
        isAccessUserPage={props.isAccessUserPage}
      />
    </Box>
  );
};

type TimetableProps = {
  timetableData: Timetable;
  privacyProtection: boolean | null;
  isLoading: boolean;
  isAccessUserPage: boolean;
};

const TimetablePage: React.FC<TimetableProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          borderRadius: "0.75rem",
          backgroundColor: "white",
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // 高さをデータ表示時と同等に設定（PCでは自動調整）
          height: { xs: "auto", sm: "auto", md: "auto" },
          minHeight: { xs: "auto", sm: "auto", md: "auto" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            // モバイル用により最適化したグリッド設定
            gridTemplateColumns: {
              xs: "20px repeat(6, 1fr)", // モバイル
              sm: "40px repeat(6, 1fr)", // タブレット
              md: "60px repeat(6, 1fr)", // デスクトップ
            },
            gap: { xs: 1, sm: 1, md: 2 },
            width: "100%",
            // 各行の設定
            gridTemplateRows: {
              xs: "auto 1fr 1fr 1fr 1fr 1fr 1fr", // モバイル - ヘッダー行以外を等分
              sm: "auto 1fr 1fr 1fr 1fr 1fr 1fr", // タブレットも同様に
              md: "auto 1fr 1fr 1fr 1fr 1fr 1fr", // デスクトップも同様に
            },
            borderRadius: { xs: "0.5rem", md: "0.75rem" },
            position: "relative",
            mx: "auto", // 中央揃え
            // グリッド全体の高さを調整（モバイルのみ固定比率）
            aspectRatio: { xs: "1.15/1", sm: "auto", md: "auto" },
            mb: { xs: 1, sm: 1, md: 2 },
            backgroundColor: "white",
            p: { xs: 2, sm: 2, md: 3 },
          }}
        >
          {props.privacyProtection && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                zIndex: 1000,
                backdropFilter: "blur(5px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.75rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#333333",
                  fontWeight: 600,
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                  px: 2,
                  textAlign: "center",
                }}
              >
                このユーザーは時間割を非公開にしています
              </Typography>
            </Box>
          )}
          {/* ヘッダー行 */}
          <Box
            sx={{
              borderRadius: { xs: "0.25rem", sm: "0.5rem", md: "0.5rem" },
              p: { xs: 0.75, sm: 1, md: 1.5 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "auto !important",
            }}
          />
          {dayLabels.map((day) => (
            <Box
              key={day}
              sx={{
                p: { xs: 0.5, sm: 0.5, md: 1.5 },
                backgroundColor: "#fff5f9",
                borderRadius: { xs: "0.25rem", sm: "0.5rem", md: "0.5rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "auto !important",
              }}
            >
              {props.isLoading && isMobile ? null : (
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                    fontWeight: 600,
                  }}
                >
                  {isMobile ? day.charAt(0) : day}
                </Typography>
              )}
            </Box>
          ))}

          {/* 時限ごとの行 */}
          {[0, 1, 2, 3, 4, 5].map((period) => (
            <React.Fragment key={`period-row-${period}`}>
              {/* 時限表示 */}
              <Box
                key={`period-${period}`}
                sx={{
                  p: { xs: 0.25, sm: 0.25, md: 0.75 },
                  backgroundColor: "#FFFFFF",
                  borderRadius: { xs: "0.25rem", sm: "0.5rem", md: "0.5rem" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  background: "#fff5f9",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: {
                      xs: "0.65rem",
                      sm: "0.75rem",
                      md: "0.875rem",
                    },
                    fontWeight: 600,
                  }}
                >
                  {period + 1}
                </Typography>
                {!isMobile && (
                  <Typography
                    sx={{
                      color: "#555555",
                      fontSize: {
                        xs: "0.5rem",
                        sm: "0.6rem",
                        md: "0.7rem",
                      },
                      mt: { xs: 0.25, md: 0.5 },
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {isTablet
                      ? periodTimes[period].split(" - ")[0] // タブレットでは開始時間のみ
                      : periodTimes[period]}
                  </Typography>
                )}
              </Box>

              {/* 各曜日のセル */}
              {days.map((day) => (
                <Box
                  key={`${day}-${period}`}
                  className="class-cell"
                  sx={{
                    position: "relative",
                    width: "100%",
                    // モバイルとPCで正方形に
                    "&::before": {
                      content: '""',
                      display: "block",
                      paddingTop: "100%",
                    },
                    "& > *": {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    },
                  }}
                >
                  <ClassCell
                    classData={
                      props.timetableData[day]?.find(
                        (lecture) =>
                          lecture.day === day &&
                          lecture.periodNumber === period + 1,
                      ) || null
                    }
                    isLoading={props.isLoading}
                    isAccessUserPage={props.isAccessUserPage}
                  />
                </Box>
              ))}
            </React.Fragment>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default TimetablePage;
