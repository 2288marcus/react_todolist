import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [text, setText] = useState("");

  const onClick = () => {
    addItem({ id: Date.now(), text });
    setText("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Add item here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn btn-success text-white rounded"
          onClick={onClick}
          disabled={text.length === 0}
        >
          Submit
        </button>
      </div>
      <hr />
    </form>
  );
};

export default Form;
