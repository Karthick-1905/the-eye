import React from "react";
import "./HomePage.css";
import bg from "../assets/bg.jpg";
import logo from "../assets/tplogo.png";
import right from "../assets/arrow-right.png";
function HomePage() {
  return (
    <div className="homecontainer">
      <div className="bg">
        <img src={bg} alt="" />

        <div className="overflow"> <div className="blur"></div></div>
      </div>
      <div className="nav">
        {" "}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navitems">
          <p>Home</p>
          <p>Verticals</p>
          <p>Community events</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="hero">
        <div className="herotxt1">
          <h1>Uncover the Unseen</h1>
        </div>
        <div className="herotxt2">
          <h1>Secure the Future</h1>
        </div>
        <div className="svglogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="400"
            viewBox="0 0 650 400"
            fill="none"
          >
            <path
              d="M333.5 69C337.5 59 350.5 7.99998 348 15C316.8 78.6 239 134.5 172.5 158.5C119.833 182.333 30.5 242 0.5 326C0.5 326 21 303 38 291.5C60.8717 276.028 92.5 256 117 246C134.315 238.933 299.833 185.5 387 163C395.5 177 399.071 251.839 392.5 278.5C365 390.077 232 397.5 232 397.5C380.5 415 427.5 313.333 433.5 270C440.054 241.402 438.833 176.333 433.5 147C557.5 113.4 630.667 37.1666 649.5 5.5C600.3 45.1 474.667 92.3333 414 111.5C451.333 88.1667 519.4 34.8 525 0C525 0 447 70 291.5 131C291.5 131 319.5 104 333.5 69Z"
              fill="#D9D9D9"
            />
            <path
              d="M172 260L105.5 287C125 331.5 198.3 405.6 311.5 354C385.9 309.6 382.167 231.833 374 197.5L305.5 218.5C307.167 239.333 299.4 284 255 296C210.6 308 181.167 277 172 260Z"
              fill="white"
            />
            <path
              d="M283 222.5L194 250.5C204.5 272 234.5 286.2 258.5 273C282.5 259.8 284.667 233 283 222.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="explore">
          <p>Explore More</p> <img src={right} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="259"
            height="78"
            viewBox="0 0 259 78"
            fill="none"
          >
            <path
              d="M0 78H258.5V30.5L235 0H197.5H149.5H108H0V78Z"
              fill="#1D1D1D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
