import React, { useState } from 'react'
import './lp.css'
export default function LandingPage() {
    const [toggle, setToggle] = useState(false);
    function toggledivs() {
      var div1 = document.getElementById("inside");
      div1.classList.remove("inside");
      div1.classList.add("inside2");
      setToggle(true);
    }
    setTimeout(toggledivs, 2000);
    return (
      <div className="App">
        <div className="twolayer">
          <div className="partone">
            <h1 className="inside1" id="inside">
              welcome to @title@
            </h1>
            {toggle && (
              <div className="options">
                <div className="insideoptions">
                  <div class="top-div">Top Div 1</div>
                  <div class="top-div">Top Div 2</div>
                  <div class="bottom-div">Bottom Div</div>
                </div>
              </div>
            )}
          </div>
          <div className="parttwo"></div>
          
        </div>
      </div>
    );
}
