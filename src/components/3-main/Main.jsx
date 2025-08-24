import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./main.css";
const myProject = [
  { title: "Landing1", cat: ["react", "node"], imgPath: "./a" },
  { title: "Landing2", cat: ["css", "js"], imgPath: "./b" },
  { title: "Landing33", cat: ["react", "node"], imgPath: "./c" },
];
export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProject);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProject.filter((item) => {
      const secondArr = item.cat.filter((it) => {
        return it === buttonCategory;
      });
      return secondArr[0] === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <div className="parent-section flex">
      <div className="left-section">
        <ul className="flex">
          <li
            onClick={() => {
              setCurrentActive("all");
              setArr(myProject);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            All Projects
          </li>

          <li
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </li>

          <li
            onClick={() => {
              handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
          >
            JavaScript
          </li>

          <li
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React
          </li>

          <li
            onClick={() => {
              handleClick("node");
            }}
            className={currentActive === "node" ? "active" : null}
          >
            Node & Express
          </li>
        </ul>
      </div>

      <div className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.div
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type: "spring", damping:8, stiffness:50}}
                key={item.imgPath}
                className="card"
              >
                <img src={item.imgPath} alt="" />
                <div className="text flex">
                  <div className="title">{item.title}</div>
                  <div className="subtitle">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    sit amet consectetur adipisicing elit.
                  </div>
                  <div className="icons flex">
                    <div className="icon flex">
                      <span className="icon-link"></span>
                      <span className="icon-github"></span>
                    </div>
                    <div className="more flex">
                      <span>More</span>
                      <span className="icon-arrow-right"></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
