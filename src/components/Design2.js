import React, { useEffect, useState } from "react";
import img from "../assets/img2.jpg";
import img1 from "../assets/img4.jpg";
import img5 from "../assets/img6.png";
import img7 from "../assets/img7.jpg";
import "./d2c.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import axios from "axios";

export default function Design2() {
  //STATES
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [nestpage, setpt] = useState(false);
  const [logoImg, setLogoImg] = useState(img5);
  const [ptt, setptt] = useState("fi");
  const arrayimgs = [];
  const [logoforserver, setlogoforserver] = useState();
  const [arrayimgsforserver, setarrimfser] = useState([]);

  //STATES

  //Host it! sending data to server

  const finishmode = async () => {
    const resp = await axios.post("http://localhost:5000/storeDis", {
      logo: logoforserver,
      displayimgs: arrayimgsforserver,
    });
    console.log("sent to the server",resp.data);

  };

  //end of Host it!

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

  function openim() {
    setShowOverlay(true);
  }
  const handlePopupClose = () => {
    setShowOverlay(false);
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
    }, 2000);
  }

  function addborderclass() {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/";
    fileInput.id = "dynamicFileInput";
    fileInput.maxLength = "1048576";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function () {
      handleFileUpload(fileInput, setLogoImg);
      document.body.removeChild(fileInput);
    });

    fileInput.click();
  }
  function handleFileUpload(input, setstate) {
    if (input.files.length == 1) {
      setlogoforserver("");
      setlogoforserver(input.files[0]);
      console.log(logoforserver);
      return setLogoImg(URL.createObjectURL(input.files[0]));
    }

    if (input.files.length > 1) {
      let i = 0;
      for (let i = 0; i < input.files.length; i++) {
        var img = document.createElement(`img`);
        img.className = "im";
        setarrimfser(arrayimgsforserver.push(input.files[i]));

        img.src = URL.createObjectURL(input.files[i]);

        arrayimgs.push(img);
      }
      console.log(arrayimgsforserver);

      var imgcontainerdiv = document.querySelector(".ibox2");
      for (let i = 0; i < arrayimgs.length; i++) {
        imgcontainerdiv.appendChild(arrayimgs[i]);
      }
    }
  }
  function setlayouthero() {
    // Get the parent div
    var ibox2 = document.querySelector(".ibox2");

    // Remove all child elements
    while (ibox2.firstChild) {
      ibox2.removeChild(ibox2.firstChild);
    }
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.id = "dynamicFileInput";
    fileInput.style.display = "none";
    fileInput.size = "576";
    fileInput.multiple = true;

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function () {
      handleFileUpload(fileInput, setLogoImg);
      document.body.removeChild(fileInput);
    });

    fileInput.click();
  }

  return (
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
      {showOverlay && (
        <div className="overlay">
          <div className="closecon">
            {" "}
            <div className="close" onClick={handlePopupClose}>
              X
            </div>
          </div>
          <div className="containeroimg">
            <div className="curtain"></div>
            <img className="imgg" src={img7} />
          </div>
        </div>
      )}
      <div className="dbox" id="ddd">
        <div className="ibh">
          <div className="logo" onClick={addborderclass}>
            <img src={logoImg} />
          </div>

          <div className="port">
            Portfolio <div className="underline"></div>
          </div>
          <div className="st" onClick={confunc}>
            Stories<div className="underline"></div>
          </div>
          <div className="con" onClick={confunc}>
            Contact<div className="underline"></div>
          </div>
          <div className="con" onClick={finishmode}>
            Host it!<div className="underline"></div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
        </div>

        <div className="ibox2" onClick={setlayouthero}>
          <img className="im" src={img1} onClick={openim} id="img1" />
          <img className="im" src={img} onClick={openim} />
          <img className="im" src={img7} onClick={openim} id="img" />
          <img className="im" src={img1} onClick={openim} />
          <img className="im" src={img} onClick={openim} id="img" />
          <img className="im" src={img1} onClick={openim} id="img1" />
          <img className="im" src={img} onClick={openim} id="img" />
          <img className="im" src={img1} onClick={openim} id="img1" />
          <img className="im" src={img} onClick={openim} id="img" />
          <img className="im" src={img1} onClick={openim} id="img1" />
        </div>
      </div>
    </div>
  );
}
