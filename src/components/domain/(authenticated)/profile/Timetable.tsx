"use client";
import ParticipantsModal from "@/components/domain/(authenticated)/dashboard/ParticipantsModal";
import type { Timetable } from "@/types";
import { Box, Paper, Skeleton, Typography } from "@mui/material";
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
  "8:50 - 10:20",
  "10:30 - 12:00",
  "13:00 - 14:30",
  "14:40 - 16:10",
  "16:20 - 17:50",
  "18:00 - 19:30",
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
};

// 授業セルコンポーネント
const ClassCell: React.FC<ClassCellProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  if (props.isLoading) {
    return (
      <Box
        sx={{
          height: "100%",
          p: 1.5,
          backgroundColor: "hsl(0 0% 100%)",
          border: "1px solid hsl(240 5.9% 90%)",
          borderRadius: "0.375rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow:
              "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          },
        }}
      >
        <Skeleton variant="text" width={50} height={25} />
      </Box>
    );
  }
  if (!props.classData) {
    return (
      <Box
        sx={{
          height: "100%",
          p: 1.5,
          backgroundColor: "hsl(0 0% 98%)",
          borderRadius: "0.375rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "hsl(240 3.8% 66.1%)",
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
        p: 1.5,
        backgroundColor: "hsl(0 0% 100%)",
        border: "1px solid hsl(240 5.9% 90%)",
        borderRadius: "0.375rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        "&:hover": {
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "hsl(240 6% 10%)",
          fontWeight: 600,
          fontSize: "0.875rem",
          mb: 0.5,
          textOverflow: "ellipsis",
          overflow: "hidden",
          // whiteSpace: "nowrap",
        }}
      >
        {props.classData.name}
      </Typography>
      <ParticipantsModal
        isOpen={isModalOpen}
        handleClose={handleClose}
        lectureId={props.classData.id}
        lectureName={props.classData.name}
      />
    </Box>
  );
};

type TimetableProps = {
  timetableData: Timetable;
  privacyProtection: boolean | null;
  isLoading: boolean;
};

const TimetablePage: React.FC<TimetableProps> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "0.75rem",
          backgroundColor: "white",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 600,
            mb: 3,
            color: "hsl(240 6% 10%)",
            fontSize: "1.25rem",
            letterSpacing: "-0.025em",
          }}
        >
          時間割表
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "80px repeat(6, 1fr)",
            gap: 1.5,
            minWidth: 800,
            gridTemplateRows: "auto repeat(6, 1fr)",
            "& .class-cell": { aspectRatio: "1/1" },
            borderRadius: "3rem",
            position: "relative",
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
                boxShadow:
                  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "hsl(240 6% 10%)",
                  fontWeight: 600,
                }}
              >
                このユーザーは時間割を非公開にしています
              </Typography>
            </Box>
          )}
          {/* ヘッダー行 */}
          <Box
            sx={{
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "auto !important",
            }}
          >
            <Typography
              sx={{
                color: "hsl(240 3.8% 46.1%)",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              時限
            </Typography>
          </Box>
          {dayLabels.map((day) => (
            <Box
              key={day}
              sx={{
                p: 1.5,
                backgroundColor: "hsl(240 5% 96%)",
                borderRadius: "0.375rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "auto !important",
              }}
            >
              <Typography
                sx={{
                  color: "hsl(240 6% 10%)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                {day}
              </Typography>
            </Box>
          ))}

          {/* 時限ごとの行 */}
          {[0, 1, 2, 3, 4, 5].map((period) => (
            <React.Fragment key={`period-row-${period}`}>
              {/* 時限表示 */}
              <Box
                key={`period-${period}`}
                sx={{
                  p: 1.5,
                  backgroundColor: "hsl(240 5% 96%)",
                  borderRadius: "0.375rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "hsl(240 6% 10%)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  {period + 1}限
                </Typography>
                <Typography
                  sx={{
                    color: "hsl(240 3.8% 46.1%)",
                    fontSize: "0.7rem",
                    mt: 0.5,
                  }}
                >
                  {periodTimes[period]}
                </Typography>
              </Box>

              {/* 各曜日のセル */}
              {days.map((day) => (
                <Box key={`${day}-${period}`} className="class-cell" sx={{}}>
                  <ClassCell
                    classData={
                      props.timetableData[day]?.find(
                        (lecture) =>
                          lecture.day === day &&
                          lecture.periodNumber === period + 1,
                      ) || null
                    }
                    isLoading={props.isLoading}
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
