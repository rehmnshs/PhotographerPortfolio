import React, { useEffect, useState } from "react";
// import pic1 from "../assets/pic1.png";
// import pic2 from "../assets/pic2.png";
// import pic3 from "../assets/pic3.png";
// import pic4 from "../assets/pic4.png";
// import pic5 from "../assets/pic5.png";
// import pic6 from "../assets/pic6.png";
// import pic7 from "../assets/pic7.png";
// import pic8 from "../assets/pic8.png";
// import pic9 from "../assets/pic9.png";
// import pic10 from "../assets/pic10.png";
// import pic11 from "../assets/pic11.png";
// import pic12 from "../assets/pic12.png";
// import pic13 from "../assets/pic13.png";
// import pic14 from "../assets/pic14.png";
// import pic15 from "../assets/pic15.png";
// import pic16 from "../assets/pic16.png";
import "../css/d2c.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import axios from "axios";

export default function Design2({
  arrayimgs,
  setarrayimgs,
  logo,
  setLogo,
  email,
  insta,
  setEmail,
  setInsta,
  username,
  setusername,
  pic1Source,
  pic2Source,
  pic3Source,
  pic4Source,
  pic5Source,
  pic6Source,
  pic7Source,
  pic8Source,
  pic9Source,
  pic10Source,
  pic11Source,
  pic12Source,
  pic13Source,
  pic14Source,
  pic15Source,
  pic16Source,
  setpic1Source,
  setpic2Source,
  setpic3Source,
  setpic4Source,
  setpic5Source,
  setpic6Source,
  setpic7Source,
  setpic8Source,
  setpic9Source,
  setpic10Source,
  setpic11Source,
  setpic12Source,
  setpic13Source,
  setpic14Source,
  setpic15Source,
  setpic16Source,
}) {
  // const [defaultImages, setdef] = useState([img1, img, img7]);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  const [nestpage, setpt] = useState(false);
  const [instaInput, setInstaInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [HostInput, setHostInput] =useState(false);
  //CONTENTS

  //CONTENTS

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const images = document.querySelectorAll(".im");

    const tl = gsap.timeline();

    images.forEach((image, index) => {
      tl.fromTo(
        image,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          duration: 0.09,
          y: 0,

          // Adjust the stagger effect
        }
      );
    });
  }, []);
  const handleEdit1 = (e) => {
    setusername(e.target.value);

  };
  const handlePopupClose = () => {
    setShowOverlay(false);
    setInstaInput(false);
    setEmailInput(false);
    setHostInput(false);
  };
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log();
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  function confunc(event) {
    let elec = event.target;
    let classname = elec.className;
    let ele = document.getElementById("ddd");

    ele.classList.remove("dbox");
    ele.classList.add("dbox1");
    setpt(true);
    setTimeout(function () {
      // Redirect to '/info'
      if (classname === "con") {
        navigate("/info");
      }
      if (classname === "st") {
        navigate("/stories");
      }
    }, 1100);
  }

  function addInput(setImageSource) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/";
    fileInput.id = "dynamicFileInput";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function (e) {
      handleImageChange(e, setImageSource);
      document.body.removeChild(fileInput);
    });

    fileInput.click();
  }
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage([URL.createObjectURL(file),file]);
    }
  };
  

  return (
    <>
      {" "}
      {showOverlay && (
        <div className="overlay">
          <div className="closecon">
            {" "}
            <div className="close" onClick={handlePopupClose}>
              X
            </div>
          </div>
          {instaInput && (
            <div className="containeroimg">
              <input
                placeholder={insta ? insta : "Enter your instagram link"}
                onChange={(e) => {
                  setInsta(e.target.value);
                  // console.log(pic1);
                }}
              />
            </div>
          )}
          {emailInput && (
            <div className="containeroimg">
              <input
                placeholder={email ? email : "Enter your email id"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          )}
          {HostInput && (
            <div className="containerohost">
             <p className="hostText"> This action is irreversible. Are you sure you want to proceed with hosting it? </p>
            <div className="bts"> <div className="bt1" onClick={handlePopupClose}>No</div><div className="bt1">Yes</div> </div>
            </div>
            
          )}
        </div>
      )}
      <div>
        {nestpage && (
          <div className="transistion">
            <div className="c">1</div>
            <div className="c">2</div>
            <div className="c">3</div>
            <div className="c">4</div>
            <div className="c">5</div>
          </div>
        )}

        <div className="dbox" id="ddd">
          <div className="ibh">
            <div className="logo" 
            onClick={() => addInput(setpic1Source)}
            >
              <img src={pic1Source[0]} alt=""/>
            </div>

            <div className="usernameContainer">
             <textarea className="username" onChange={handleEdit1}>{username ? username : "Username"}</textarea> <div className="underline"></div>
            </div>

            <div className="port">
              Portfolio <div className="underline"></div>
            </div>

            <div className="con" onClick={confunc}>
              Contact<div className="underline"></div>
            </div>
            <div className="con" onClick={()=>{setShowOverlay(true); setHostInput(true)}}>
              Host it!<div className="underline" ></div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
              <div>
                <a
                  onClick={() => {
                    setShowOverlay(true);
                    setInstaInput(true);
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  onClick={() => {
                    setShowOverlay(true);
                    setEmailInput(true);
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="ibox2" >
          <img src={pic2Source[0]} alt="" className="im" onClick={() => addInput(setpic2Source)}/>
          <img src={pic3Source[0]} alt="" className="im" onClick={() => addInput(setpic3Source)}/>
          <img src={pic4Source[0]} alt="" className="im" onClick={() => addInput(setpic4Source)}/>
          <img src={pic5Source[0]} alt="" className="im" onClick={() => addInput(setpic5Source)}/>
          <img src={pic6Source[0]} alt="" className="im" onClick={() => addInput(setpic6Source)}/>
          <img src={pic7Source[0]} alt="" className="im" onClick={() => addInput(setpic7Source)}/>
          <img src={pic8Source[0]} alt="" className="im" onClick={() => addInput(setpic8Source)}/>
          <img src={pic9Source[0]} alt="" className="im" onClick={() => addInput(setpic9Source)}/>
          <img src={pic10Source[0]} alt="" className="im" onClick={() => addInput(setpic10Source)}/>
          <img src={pic11Source[0]} alt="" className="im" onClick={() => addInput(setpic11Source)}/>
          <img src={pic12Source[0]} alt="" className="im" onClick={() => addInput(setpic12Source)}/>
          <img src={pic13Source[0]} alt="" className="im" onClick={() => addInput(setpic13Source)}/>
          <img src={pic14Source[0]} alt="" className="im" onClick={() => addInput(setpic14Source)}/>
          <img src={pic15Source[0]} alt="" className="im" onClick={() => addInput(setpic15Source)}/>
          <img src={pic16Source[0]} alt="" className="im" onClick={() => addInput(setpic16Source)}/>
          </div>
        </div>
      </div>
    </>
  );
}
