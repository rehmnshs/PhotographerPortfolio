import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Contact.css";

export default function Contactd2() {
  const textRef = useRef(null);
 
 window.onmousemove = (e) => {
    const circle1 = document.getElementById("circle1");
    if (e.target.closest('.box1')) {
    circle1.animate(
      {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
      },
      { duration: 5000, fill: "forwards" }
    );
     
  }
  else{
    return 0
  };}
  useEffect(() => {
      
    gsap.from(".box1",{x:-2000,ease: "power2.inOut",opacity:1})
}, []);
    return (
      <>
      <div className="circle1" id="circle1"></div>
  
    <div className="mbox"><div className="box22"></div>
    
    <div className="box1"  ref={textRef}>
     <h1 >        {Array.from("Hi I’m Daniel Aristizábal, but call me Dani. I work as an art director and digital artist working across the fields of arts, fashion and entertainment, bringing forward new technologies to create stunning and inspiring artworks.").map(
          (letter, index) => (
            <span  className="h1cont" key={index}>{letter}</span>
          )
        )}</h1>

    </div></div>
  </>
  );

}
