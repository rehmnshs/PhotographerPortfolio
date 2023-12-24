import React, { useEffect } from "react";
import "../css/header.css";
import logo from "../assets/logo.png";
import img1 from "../assets/img4.jpg";
import img5 from "../assets/img6.png";
import img7 from "../assets/img7.jpg";
import { gsap } from "gsap";
export default function Header() {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    let m = document.getElementById("circle");

    // Check if the element with the ID 'middlediv' exists
    if (m) {
      m.style.backgroundColor = "blue";
    }
  });

  window.onmousemove = (e) => {
    const circle = document.getElementById("circle");
    circle.animate(
      {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
      },
      { duration: 10000, fill: "forwards" }
    );
  };

  useEffect(() => {
    gsap.from(
      "p",

      {
        y: 30,
        opacity: 0,

        // Adjust the stagger effect
      }
    );
    gsap.from(
      ".iudiv2",

      {
        height: 92,
        width: 100,
        duration: 2,
        scale: 0,

        // Adjust the stagger effect
      }
    );
    gsap.to(".middlediv", {
      color: "black",
      delay: 4,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.from(
      ".iudiv2 > div",

      {
        opacity: 0,

        delay: 2,
        y: 10,

        // Adjust the stagger effect
      }
    );
    gsap.from(".circle ", { rotate: -180, duration: 2, opacity: 0 });
    gsap.fromTo(
      ".middlediv",

      {
        x: "100%", // Move the text to the right
      },
      {
        x: "-80%",
        repeat: -1,
        duration: 10,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div className="hmain">
      <div className="upperdiv">
        <div className="iudiv1">
          <img src={logo} />{" "}
        </div>
        <div className="iudiv2">
          <div>Intro</div>
          <div>Services</div>
          <div>Contact</div>
        </div>{" "}
        <div className="iudiv3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="21"
              viewBox="0 -960 960 960"
              width="21"
            >
              <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
            </svg>
          </div>
          <div>
            Share now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m684-336-20-20 110-110H172v-28h602L664-604l20-20 144 144-144 144Z" />
            </svg>
          </div>{" "}
        </div>
      </div>
      <div className="circle" id="circle"></div>
      <h2 className="middlediv">Uncompromised.Live Life. </h2>
      <div className="sideline">
        <div>So Natural</div>{" "}
        <p> erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis</p>
      </div>
    </div>
  );
}
