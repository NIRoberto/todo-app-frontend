import React, { useState, Fragment } from "react";
import "../style/todoStyle.css";
import lightBg from "../../public/images/icon-sun.svg";
import DarkBg from "../../public/images/icon-moon.svg";
import TodoList from "./TodoList";

const Todo = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className="main">
        <div
          className="main-item1"
          style={{
            backgroundImage: `${
              dark
                ? " url('../../public/images/bg-desktop-dark.jpg')"
                : "url('../../public/images/bg-desktop-light.jpg')"
            } `,
          }}
        />
        <div
          className="main-item2"
          style={{
            backgroundColor: dark ? " hsl(233, 20%, 9%)" : "hsl(236, 33%, 90%)",
          }}
        >
          Drag and drop to read the list
        </div>
      </div>

      <div className="info-item">
        <div className="header">
          <h3> TODO</h3>
          <img
            src={dark ? lightBg : DarkBg}
            onClick={() => setDark(!dark)}
            alt="bright theme"
          />
        </div>

        <TodoList dark={dark} />
      </div>
    </>
  );
};

export default Todo;
