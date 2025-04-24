export interface ClassCellProps {
  classData: {
    id: number;
    name: string;
  } | null;
  isLoading: boolean;
}

// 時間割データの型定義を追加
export interface TimetableData {
  [key: string]: Array<{
    id: number;
    name: string;
  } | null>;
}
