"use client";

import useRecordsStore from "@/hooks/useRecordsStore";
import { UserRecord } from "@/types";
import { useEffect } from "react";

const RecordInput = () => {
  const { addRecord, records } = useRecordsStore();

  // 쿼리 전송 기반 코드 작성
  async function submitRecord(formData: FormData) {
    const text = formData.get("record-text");
    if (typeof text !== "string") return;

    // 추후 쿼리의 세부사항 필터링 작업 추가
    const newRecord: UserRecord = {
      id: Date.now().toString(),
      createdAt: new Date().toString(),
      text,
    };

    addRecord(newRecord);
  }

  useEffect(() => {
    console.log(records);
  }, [records]);

  return (
    <form action={submitRecord}>
      <input
        id="record-input"
        type="string"
        name="record-text"
        required
        maxLength={100}
        className="border"
      />
      <button type="submit" className="border hover:bg-amber-200">
        submit
      </button>
    </form>
  );
};

export default RecordInput;
