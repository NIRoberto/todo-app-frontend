import React, { Fragment, useState } from "react";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";
import cross from "../images/icon-cross.svg";
// eslint-disable-next-line react/prop-types
const TodoList = ({ dark }) => {
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);
  const [AllNames, setAllNames] = useState([]);

  const deleteTodo = (id) => {
    const Delete = AllNames.filter((name) => name.id !== id);

    setAllNames(Delete);
  };

  const deleteAll = () => {
    setAllNames([]);
  };

  const addName = (wrestleName) => {
    const newName = [wrestleName, ...AllNames];
    setAllNames(newName);
  };

  const completed = (id) => {
    let updateTodo = AllNames.map((w) => {
      if (w.id === id) {
        w.isComplete = !w.isComplete;
      }
      return w;
    });
    setAllNames(updateTodo);
  };

  return (
    <>
      <div className="create-input">
        <TodoForm dark={dark} onSubmit={addName} />

        <ul
          className="todo-list"
          style={{
            background: dark ? "hsl(235, 24%, 19%)" : "white",
          }}
        >
          {AllNames.map((wrestle) => {
            const { id, name } = wrestle;
            return (
              <>
                <li
                  key={id}
                  className="item"
                  style={{
                    borderBottom: `1.5px solid ${
                      dark ? "hsl(240, 12%, 25%)" : "hsl(240, 35%, 92%)"
                    }`,
                  }}
                >
                  <span>
                    <input
                      type="checkbox"
                      name="button"
                      onClick={() => completed(wrestle.id)}
                      id="check"
                      style={{
                        borderColor: dark
                          ? "rgb(61, 61, 82)"
                          : " rgb(216, 216, 245)",
                      }}
                    />
                  </span>
                  <div className="name">
                    <span
                      id="span"
                      style={{
                        color: dark
                          ? "hsl(234, 19%, 69%)"
                          : "hsl(237, 14%, 26%)",
                        textDecoration: wrestle.isComplete
                          ? "line-through"
                          : "none",
                        opacity: wrestle.isComplete ? 0.4 : 1,
                      }}
                    >
                      {name}
                    </span>

                    <img
                      src={cross}
                      onClick={() => deleteTodo(id)}
                      alt="Delete one todo"
                    />
                  </div>
                </li>
              </>
            );
          })}
          <TodoFooter removeAll={deleteAll} dark={dark} />
        </ul>
      </div>
    </>
  );
};

export default TodoList;
