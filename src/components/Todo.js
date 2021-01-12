import React, { useState, useEffect, Fragment } from 'react';
import { wrestles } from './data';
import '../style/todoStyle.css';
import lightBg from '../../public/images/icon-sun.svg';
import DarkBg from '../../public/images/icon-moon.svg';

const Todo = () => {
   const [dark, setDark] = useState(true);
   const [check, setCheck] = useState(false);
   const [names, setNames] = useState(wrestles);

   const [size, setSize] = useState(window.innerWidth);

   useEffect(() => {
      window.addEventListener('resize', () => {
         setSize(window.innerWidth);
      });
   }, []);

   const change = (id) => {};
   const deleteTodo = (id) => {
      const Delete = names.filter((name) => name.id !== id);

      setNames(Delete);
   };

   return (
      <Fragment>
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
            ></div>
            <div
               className="main-item2"
               style={{
                  backgroundColor: dark
                     ? ' hsl(233, 20%, 9%)'
                     : 'hsl(236, 33%, 90%)',
               }}
            >
               Drag and drop to read the list
            </div>
         </div>

         <div className="info-item">
            <div className="header">
               <h3> TODO</h3>
               {dark ? (
                  <img
                     src={lightBg}
                     onClick={() => setDark(false)}
                     alt="bright theme"
                  />
               ) : (
                  <img
                     src={DarkBg}
                     onClick={() => setDark(true)}
                     alt="bright theme"
                  />
               )}
            </div>
            <div className="create-input">
               <form
                  style={{
                     background: dark ? '#25273c' : 'white',
                  }}
               >
                  <input
                     type="checkbox"
                     name="button"
                     id="check"
                     style={{
                        borderColor: dark
                           ? 'rgb(61, 61, 82)'
                           : ' rgb(216, 216, 245)',
                     }}
                  />
                  <input
                     type="text"
                     style={{
                        background: dark ? '#25273c' : 'white',
                     }}
                     placeholder="Create a new todo"
                  />
               </form>
               <ul
                  className="todo-list"
                  style={{
                     background: dark ? 'hsl(235, 24%, 19%)' : 'white',
                  }}
               >
                  {names.map((wrestle) => {
                     const { id, name } = wrestle;
                     return (
                        <Fragment key={id}>
                           <li
                              className="item"
                              style={{
                                 borderBottom: `1.5px solid ${
                                    dark
                                       ? 'hsl(240, 12%, 25%)'
                                       : 'hsl(240, 35%, 92%)'
                                 }`,
                              }}
                           >
                              <span>
                                 <input
                                    type="checkbox"
                                    name="button"
                                    onClick={() => change(id)}
                                    id="check"
                                    style={{
                                       borderColor: dark
                                          ? 'rgb(61, 61, 82)'
                                          : ' rgb(216, 216, 245)',
                                    }}
                                 />
                              </span>
                              <div className="name">
                                 <span
                                    id="span"
                                    style={{
                                       color: dark
                                          ? 'hsl(234, 19%, 69%)'
                                          : 'hsl(237, 14%, 26%)',
                                       textDecoration: check
                                          ? 'line-through'
                                          : 'none',
                                    }}
                                 >
                                    {name}
                                 </span>
                                 <img
                                    src="../../public/images/icon-cross.svg"
                                    onClick={() => deleteTodo(id)}
                                    alt="Delete one todo"
                                 />
                              </div>
                           </li>
                        </Fragment>
                     );
                  })}

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
                                       borderBottom: `14px solid ${
                                          dark ? '#12131C' : '#DDDEEE'
                                       }`,
                                    }}
                                 ></div>
                                 <br />
                                 <br />
                              </>
                           ) : (
                              ''
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
                        <a className="a" href="#e">
                           Clear Completed
                        </a>
                     </div>
                  </div>
               </ul>
            </div>
         </div>
      </Fragment>
   );
};

export default Todo;
