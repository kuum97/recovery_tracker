"use client";

const RecordInput = () => {
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
