import { UserRecord } from "@/types";
import { create } from "zustand";

type RecordState = {
  records: UserRecord[];
};

type RecordAction = {
  addRecord: (record: UserRecord) => void;
  updateRecord: (id: string, updatedRecord: UserRecord) => void;
  removeRecord: (id: string) => void;
};

const useRecordsStore = create<RecordState & RecordAction>((set) => ({
  records: [],
  addRecord: (record) =>
    set((state) => ({ records: [...state.records, record] })),
  updateRecord: (id, updatedRecord) =>
    set((state) => ({
      records: state.records.map((r) => (r.id === id ? updatedRecord : r)),
    })),
  removeRecord: (id) =>
    set((state) => ({
      records: state.records.filter((r) => r.id !== id),
    })),
}));

export default useRecordsStore;
