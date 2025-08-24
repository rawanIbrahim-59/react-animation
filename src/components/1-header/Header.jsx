import React, { useState } from "react";
import "./header.css";
import "./respoHeader.css";
export default function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <header className="flex">
      <button onClick={() => {
        setShowModel(true)
        
      }
      } className="menu-header icon-menu flex"></button>
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode flex"> <span className="icon-moon-o"></span></button>
      {showModel && (
        <div className="fixed border">
          <div className="model">
            <ul>
              <li><button className="icon-close" onClick={() => {
                 setShowModel(false)
              }
              }></button></li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
