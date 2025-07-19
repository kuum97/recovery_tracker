"use client";

const RecordInput = () => {
  // store의 상태와 액션 연결 => 아웃풋 구현단계와의 순서 고려
  // 쿼리 전송 기반 코드 작성
  async function submitRecord(formData: FormData) {
    const query = formData.get("record-query");

    console.log(query);
  }

  return (
    <form action={submitRecord}>
      <input
        id="record-input"
        type="string"
        name="record-query"
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
