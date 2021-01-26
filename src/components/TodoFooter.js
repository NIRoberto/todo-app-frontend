import React, { useEffect, Fragment, useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoFooter = ({ dark, removeAll }) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);
  return (
    <div id="footer">
      <div className="footer_span1">
        <div className="span">
          <a href="#5">5min left</a>
        </div>
        <div className="span2">
          {size <= 600 ? (
            <>
              <div
                className="color"
                style={{
                  borderBottom: `14px solid ${dark ? "#12131C" : "#DDDEEE"}`,
                }}
              />
              <br />
              <br />
            </>
          ) : (
            ""
          )}
          <a className="active" href="#e">
            All
          </a>
          <a className="a" href="#e">
            Active
          </a>
          <a className="a" href="#e">
            Completed
          </a>
        </div>
      </div>

      <div className="span3">
        <a className="a" href="#e" onClick={removeAll}>
          Clear All
        </a>
      </div>
    </div>
  );
};
// TodoFooter.propTypes = {
//   dark: PropTypes.object.isRequired,
//   removeAll: PropTypes.object.isRequired,
// };

export default TodoFooter;
