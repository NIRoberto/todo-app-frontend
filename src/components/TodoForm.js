import React, { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ dark, onSubmit }) => {
  const [wrestleName, setWrestleName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setWrestleName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (wrestleName.trim()) {
      onSubmit({
        id: new Date().getTime().toString(),
        name: wrestleName,
      });
    } else {
      alert("please blank not allowed");
    }

    setWrestleName("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          background: dark ? "#25273c" : "white",
        }}
      >
        <input
          type="checkbox"
          name="button"
          id="check"
          style={{
            borderColor: dark ? "rgb(61, 61, 82)" : " rgb(216, 216, 245)",
          }}
        />
        <input
          type="text"
          onChange={handleChange}
          value={wrestleName}
          ref={inputRef}
          style={{
            background: dark ? "#25273c" : "white",
          }}
          placeholder="Create a new todo"
        />
      </form>
    </>
  );
};

export default TodoForm;
