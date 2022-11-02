import React from "react";
import "./Head.css";

export const Head = () => {
  return (
    <div>
      <div className="home-container" id="home">
        <div className="left-home-container">
          <span>
            <h2>
              {" "}
              <span style={{ color: "orange" }}> Hello,</span> my name is
            </h2>
          </span>
          <span>
            <h1>Maheendran kp</h1>
          </span>
          <span>
            <div className="wrapper">
              <div className="static-txt">I'm a</div>
              <ul className="dynamic-txt">
                <li>
                  {" "}
                  <span>FrontEnd Developer</span>
                </li>
              </ul>
            </div>
          </span>
          <br />

          <span>
            <a href="./assets/cv.pdf" download={"./assets/cv.pdf"}>
              <button>RESUME</button>
            </a>
          </span>
        </div>

        <div className="right-home-container">
          <img src="./assets/yellow1.png" alt="" />
          <img src="./assets/mahi.png" alt="" />
        </div>
      </div>
    </div>
  );
};
