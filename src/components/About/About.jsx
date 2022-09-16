import React, { useState } from "react";
import "./About.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
export const About = () => {
  const [state, setSate] = useState(false);

  const handle = () => {
    console.log("haiiii");
    if (state == true) {
      setSate(!state);
    } else {
      setSate(!state);
    }
  };
  //////////
  const [night, setNight] = useState(false);

  return (
    <div>
      <div className={night ? "night-container" : "about-container"} id="about">
        <div className="about-left">
          <h1 className={night ? "nightheading" : "heading"}>ABOUT ME</h1>
          <div className="about-left-inside">
            <ul>
              <li>
                {" "}
                Hello! My name is Maheendran Kp and I enjoy creating things that
                live on the internet.
              </li>
              <li>
                {" "}
                I'm a passionate Developer, with strong administrative and
                communication skills, good attention to detail and the ability
                to write efficient code using MERN Stack.
              </li>
              <li>
                {" "}
                My interest in web development started back last year when I was
                trying to edit things on the web, that taught me a lot about
                HTML & CSS.
              </li>
              <li>
                {" "}
                As I grow and flourish as a Developer, one thing which keeps me
                going is my inquisitiveness for discovering new things every
                day.
              </li>
              <li>
                {" "}
                Fast Forwarding to today, I built a number of web applications
                and 4 major projects. Learned a great deal about teamwork,
                leadership, and communication. After months of rigorous
                training, here I am looking for an opportunity as a full stack
                web developer.
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <div className="togglebutton" onClick={() => setNight(!night)}>
            {night ? (
              <BsFillMoonStarsFill size={"3rem"} />
            ) : (
              <BsFillSunFill size={"4rem"} style={{ color: "orange" }} />
            )}

            <div className="clickme">
              {night ? (
                <p style={{ fontFamily: "monospace" }}>Day Mode</p>
              ) : (
                <p style={{ fontFamily: "monospace" }}>Night Mode</p>
              )}
            </div>
          </div>
          {night ? (
            <div>
              <img className="sky" src="./assets/nightsky.png" alt="" />
              <img className="skystar" src="./assets/stars.png" alt="" />
            </div>
          ) : (
            <img className="sky" src="./assets/cloud.svg" alt="" />
          )}

          <img className="tree" src="./assets/R (3).png" alt="" />
          <img className="man" src="./assets/man.png" alt="" />
          <img className="smallrock" src="./assets/smallrock.png" alt="" />
          <img className="grass" src="./assets/R (4).png" alt="" />
          <img className="grass1" src="./assets/R (4).png" alt="" />

          <img className="rock" src="./assets/bigrock.png" alt="" />

          {night ? (
            ""
          ) : (
            <div className="leaves">
              <img src="./assets/leaf01.png" alt="" />
              <img src="./assets/leaf02.png" alt="" />
              <img src="./assets/leaf03.png" alt="" />
            </div>
          )}

          <div className={night ? "hiddenleaves" : "leaves2"}>
            <img src="./assets/leaf01.png" alt="" />
            <img src="./assets/leaf02.png" alt="" />
            <img src="./assets/leaf03.png" alt="" />
          </div>

          {night && (
            <div>
              <div className="firefly">
                <img src="./assets/fly.png" alt="" />
                <img src="./assets/light.png" alt="" />
              </div>
              <div className="firefly1">
                <img src="./assets/fly.png" alt="" />
                <img src="./assets/light.png" alt="" />
              </div>
              <div className="firefly2">
                <img src="./assets/fly.png" alt="" />
                <img src="./assets/light.png" alt="" />
              </div>
              <div className="firefly3">
                <img src="./assets/fly.png" alt="" />
              </div>

              {/* ////////// */}
              <div>
                <img
                  className="fireflysit bee1"
                  src="./assets/light.png"
                  alt=""
                />
                <img
                  className="fireflysit  bee1"
                  src="./assets/fly.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="fireflysit bee1"
                  src="./assets/light.png"
                  alt=""
                />
                <img
                  className="fireflysit  bee1"
                  src="./assets/fly.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="fireflysit bee2"
                  src="./assets/light.png"
                  alt=""
                />
                <img
                  className="fireflysit  bee2"
                  src="./assets/fly.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="fireflysit bee3"
                  src="./assets/light.png"
                  alt=""
                />
                <img
                  className="fireflysit  bee3"
                  src="./assets/fly.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="fireflysit bee4"
                  src="./assets/light.png"
                  alt=""
                />
                <img
                  className="fireflysit  bee4"
                  src="./assets/fly.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="fireflysit bee5"
                  src="./assets/light.png"
                  alt=""
                />
                <img
                  className="fireflysit  bee5"
                  src="./assets/fly.png"
                  alt=""
                />
              </div>
              <div className="shadow">
                <img
                  src="https://clipground.com/images/shadow-png-4.png"
                  alt=""
                />
              </div>
              <div className="bottomshadow">
                <img
                  src="https://clipground.com/images/shadow-png-4.png"
                  alt=""
                />
              </div>

              <div className="screenlight"></div>
            </div>
          )}

          <div className="maneye">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/10/01/eye-309608_960_720.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
