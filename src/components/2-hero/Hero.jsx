import React from "react";
import { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import boyDeveloperAnimation from "../../../public/animation/boyDeveloper.json";
import computerAnimation from "../../../public/animation/computer.json";
export default function Hero() {
  const lottieRef = useRef();
  return (
    <div className="hero-section flex">
      <div className="left-section flex">
        <div className="img-section">
          <img className="avater" src="/avatar.png" alt="" />
          <span className="icon-verified"></span>
        </div>
        <h1>Full Stack Developer</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          veritatis quis eaque tenetur iste excepturi quo maiores aperiam
          deleniti dolor.{" "}
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter">
            <a href=""></a>
          </div>
          <div className="icon icon-github">
            <a href=""></a>
          </div>
          <div className="icon icon-instagram">
            <a href=""></a>
          </div>
          <div className="icon icon-linkedin-square">
            <a href=""></a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <Lottie lottieRef= {lottieRef} className="lottie-an-developer" onLoadedImages={(params) => {
          lottieRef.current.setSpeed(0.6);
        }
        } animationData={computerAnimation} />
      </div>
    </div>
  );
}
