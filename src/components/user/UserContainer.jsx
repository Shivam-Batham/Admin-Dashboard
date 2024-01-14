import React, { useEffect, useState } from "react";
import User from "./User";


const containercss = {
    "display" : "flex",
    "flexDirection":"row",
    "flexFlow": "row wrap",
    overflow: "auto",
    "padding":"20px",
    "margin":"5px",
    "color": "#0077ff",
    "border": "2px solid #0077ff",
    "borderRadius": "6px",
    boxSizing: "border-box",
    "minWidth": "75%",
    "maxHeight": "300px",
    "background": "#0780D6",


    
  };

function UserContainer() {
  const [userdata, setUserData] = useState([]);
  const [limit,setLimit] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.users);
        setLimit(data.limit);
      })
      .catch((error) => {
        console.log("api error ", error);
      });
  }, []);



  return (
  <>
        <div style={containercss}>
            <h2 style={{color:"white"}}>Total Users : <span>{limit}</span></h2> 
            
            {
               userdata?(userdata.map((user)=>(
                    <div key={user.id}>
                    <User {...user} />
                    </div>
               ))):null
            }

        </div>
  </>);
}

export default UserContainer;
