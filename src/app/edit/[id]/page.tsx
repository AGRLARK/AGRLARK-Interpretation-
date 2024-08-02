import React from "react";

const Edit = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-8 ">Edit Interpretation</h1>
      <form action="" className="flex flex-col gap-3">
        <input
          type="text"
          name="term"
          placeholder="Term"
          className="py-1 px-4 border rounded-md"
        />
        <textarea
          name="interpretation"
          rows={4}
          placeholder="Interpretation"
          className="py-1 px-4 border rounded-md resize-none"
        ></textarea>
        <button className="bg-black text-white mt-5 px-4 py-2 rounded-full cursor-pointer">
          Update Interpretation
        </button>
      </form>
    </div>
  );
};

export default Edit;
