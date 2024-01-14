import React,{useState} from "react";

function User({ firstName, age }) {

    const [username, setUserName] = useState(firstName);
    const [userage, setUserAge] = useState(age);

    const containercss = {
      display:"block",
      "padding":"5px",
      "margin":"5px",
      "color": "#00487B",
      "border": "2px solid #0077ff",
      "borderRadius": "6px",
      boxSizing: "border-box",
      minWidth: "5px",
      minHeight: "2px",
      background: "#F0F5F7",
      fontWeight:"700"
      };
     
  return (
    <>
      <div style={containercss}>
        <div >
          <p>Name: {`${username}`}</p>
          <p>Age : {`${userage}`}</p>
          
        </div>
      </div>
    </>
  );
}

export default User;
