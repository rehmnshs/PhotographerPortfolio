import React, { useEffect } from "react";
import "../css/st.css";
import Stcard from "./Stcard";
import { gsap } from "gsap";
export default function Stories({stname,setStname}) {

//contents 





let stTitle= "what our users say about us"; 



//contents

    /*useEffect(() => {
   
      
        
          gsap.fromTo(
              ".stmain",
              {opacity:0,duration:0.5,delay:1, y:400,x:10 },
            {opacity:1,
            y:0}
            );
          
      
      },[]);
      */
function handleEditoftst(e){
  stTitle = e.target.innerText;
 
}
      document.addEventListener('wheel', (e) => {
        const scrollContainer = document.getElementById('scroll_container');
        const scrollSpeed = 5; // Adjust the scroll speed factor
    
        // Check if the scroll event originated from the scrollContainer or its descendants
        if (e.target.closest('#scroll_container')) {
            // Use requestAnimationFrame for smoother scrolling
            requestAnimationFrame(() => {
                // Adjust the scroll speed by multiplying e.deltaY with a factor
                scrollContainer.scrollLeft += e.deltaY * scrollSpeed;
            });
    
            // Prevent the default vertical scrolling behavior
            e.preventDefault();
        }
    });

  return (<>
      <div className="transistions"><div className="cc"></div><div className="cc"></div><div className="cc"></div><div className="cc"></div><div className="cc"></div></div>
    <div className="stmain">
      <div className="stupperbx">
        <h2 className="title12" contentEditable={true} onInput={handleEditoftst}>{stTitle}</h2>
        <div className="leftrightsvgs">
      
          <div className="svglayer">
         
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7a715c"
              viewBox="0 -960 960 960"
              width="20"
              height="20"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </div>
         
          <div className="svglayer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              fill="#7a715c"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>{" "}
          </div>
        </div>
      </div>
      <div className="cardCor" id="scroll_container" >
       <Stcard  stname={stname} setStname={setStname}/>
 
       
    
      </div>
    </div>

</>
  );
}
