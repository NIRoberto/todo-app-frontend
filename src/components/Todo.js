import React, { useState } from "react";
// import "../style/todoStyle.css";
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
                ? `url('https://image.shutterstock.com/image-vector/dark-blue-vector-background-curved-260nw-1031871925.jpg')`
                : `url('https://www.wallpapertip.com/wmimgs/40-407167_dark-blue-mountain-wallpaper.jpg')`
            } `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
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
          <span
            className={dark ? "fas fa-moon" : "fas fa-sun"}
            onClick={() => setDark(!dark)}
          ></span>
        </div>

        <TodoList dark={dark} />
      </div>
    </>
  );
};

export default Todo;
