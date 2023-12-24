import { useState } from "react";
import "./App.css";

import Design2 from "./components/Design2";

function App({arrayimgs, setarrayimgs, logo, setLogo, email,insta}) {
  return (
<><Design2 setarrayimgs={setarrayimgs} arrayimgs={arrayimgs} logo={logo} setLogo={setLogo} email={email} insta={insta}/></>
  );
}

export default App;
