import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import UserContainer from "./components/user/UserContainer";
import TransactoinContainer from "./components/transaction/TransactoinContainer";
import { CgFormatJustify } from "react-icons/cg";
import bg from "./bg.svg"


const DashboardCSS = {
  display:"flex",
  "flexDirection":"row",
  "flexFlow": " row",
  overflow: "hidden",
  "width":"100%",
  border:"2px solid #0077ff",
  borderRadius:"6px",
  backgroundImage: "url('bg.svg')",
}
const buttonCSS={
  "padding":"10px",
  margin:"10px",
  background:"white",
  border:"2px solid #0077ff",
  borderRadius:"6px"
}
function App() {
  const [opensidebar,setSidebar]=useState(false);
  const handleSidebar =()=>{
    setSidebar((preState)=>!preState)
  }
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div style={DashboardCSS}>
        <div>
        {
          <button style={buttonCSS} onClick={handleSidebar}>{opensidebar?(<Header/>):(<CgFormatJustify/>)}</button>
        }
        </div>
        <div>
          <h1 style={{color:"white"}}>Admin Dashboard</h1>
          <UserContainer />
          <TransactoinContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
