"use client";

import { Box, Paper, Skeleton, Typography } from "@mui/material";
import React from "react";

// 授業データの型定義
type Lecture = { id: number; name: string } | null;

// 曜日のキーの型定義
const daysConst = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const; // as const を追加してリテラル型にする
type DayKey = (typeof daysConst)[number]; // "monday" | "tuesday" | ...

// 時間割データの型定義
type TimetableData = {
  [key in DayKey]: Lecture[];
};

// 時間割のダミーデータに型を適用
const timetableData: TimetableData = {
  monday: [
    { id: 1, name: "数学I" },
    { id: 2, name: "英語" },
    { id: 3, name: "物理" },
    { id: 4, name: "歴史" },
    null,
    { id: 6, name: "化学" },
  ],
  tuesday: [
    { id: 1, name: "国語" },
    { id: 2, name: "体育" },
    null,
    { id: 4, name: "生物" },
    { id: 5, name: "数学II" },
    { id: 6, name: "英語会話" },
  ],
  wednesday: [
    { id: 1, name: "地理" },
    { id: 2, name: "プログラミング" },
    { id: 3, name: "英語" },
    { id: 4, name: "数学III" },
    { id: 5, name: "美術" },
    null,
  ],
  thursday: [
    null,
    { id: 2, name: "物理実験" },
    { id: 3, name: "国語" },
    { id: 4, name: "英語" },
    { id: 5, name: "数学I" },
    { id: 6, name: "社会" },
  ],
  friday: [
    { id: 1, name: "化学実験" },
    { id: 2, name: "数学II" },
    { id: 3, name: "英語" },
    null,
    { id: 5, name: "音楽" },
    { id: 6, name: "情報" },
  ],
  saturday: [
    { id: 1, name: "特別講義" },
    null,
    { id: 3, name: "クラブ活動" },
    null,
    null,
    null,
  ],
};

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
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const dayLabels = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

type ClassCellProps = {
  classData: Lecture | null;
  isLoading: boolean;
};

// 授業セルコンポーネント
const ClassCell = ({ classData, isLoading }: ClassCellProps) => {
  if (isLoading) {
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
  if (!classData) {
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
      <Typography
        variant="body1"
        sx={{
          color: "hsl(240 6% 10%)",
          fontWeight: 600,
          fontSize: "0.875rem",
          mb: 0.5,
        }}
      >
        {classData.name}
      </Typography>
    </Box>
  );
};

type TimetableProps = {
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
          }}
        >
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
                    classData={timetableData[day][period]}
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
