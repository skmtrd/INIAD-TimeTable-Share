import { prisma } from "@/lib/prisma";
import { createRoute } from "./frourio.server";

//Toyo net aceでダウンロードする時間割のデータ型
type TimetableFromToyoNetAce = {
  [periodNumber: string]: string[];
};

export const { POST } = createRoute({
  post: async ({ body }) => {
    let timetableObject: TimetableFromToyoNetAce = {};

    try {
      timetableObject = await convertJsonFileToObject(body.file);
    } catch {
      return { status: 400, body: { message: "Invalid file" } };
    }

    try {
      handleRegister(timetableObject, body.userId);
    } catch {
      return { status: 500, body: { message: "Internal Server Error" } };
    }

    return { status: 201, body: { message: "register timetable success" } };
  },
});

const convertJsonFileToObject = async (
  jsonfile: File,
): Promise<TimetableFromToyoNetAce> => {
  const text = await jsonfile.text();
  const timetableObject = JSON.parse(text);

  return timetableObject;
};

const days: Record<number, string> = {
  0: "月曜日",
  1: "火曜日",
  2: "水曜日",
  3: "木曜日",
  4: "金曜日",
  5: "土曜日",
};

const handleRegister = (timetable: TimetableFromToyoNetAce, userId: string) => {
  Object.entries(timetable).map(
    ([periodNumber, lectures]: [string, string[]]) => {
      lectures.map((lecture: string, dayIndex: number) => {
        if (lecture === "") return;

        registerFacade(lecture, Number(periodNumber), days[dayIndex], userId);
      });
    },
  );
};

const registerFacade = async (
  lectureName: string,
  periodNumber: number,
  day: string,
  userId: string,
) => {
  if (await isExitsLecture(lectureName)) {
    const lectureId: string = await getLectureId(lectureName);

    registerLectureToTimetable(userId, lectureId, day, periodNumber);
  } else {
    const lecture = await addNewLecture(lectureName);
    registerLectureToTimetable(userId, lecture.id, day, periodNumber);
  }
};

const getLectureId = async (lectureName: string): Promise<string> => {
  const lecture = await prisma.lecture.findFirst({
    where: { name: lectureName },
  });

  if (!lecture) {
    throw new Error("Lecture not found");
  }

  return lecture.id;
};

const isExitsLecture = async (lectureName: string): Promise<boolean> => {
  const lecture = await prisma.lecture.findFirst({
    where: { name: lectureName },
  });

  const isExit = lecture !== null;

  return isExit;
};

const addNewLecture = async (lectureName: string) => {
  const lecture = await prisma.lecture.create({
    data: {
      name: lectureName,
    },
  });

  return lecture;
};

const registerLectureToTimetable = async (
  userId: string,
  lectureId: string,
  day: string,
  periodNumber: number,
): Promise<void> => {
  await prisma.timeTable.create({
    data: {
      userId: userId,
      lectureId: lectureId,
      day: day,
      periodNumber: periodNumber,
    },
  });
};
