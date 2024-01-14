import React,{useState,useEffect} from 'react'
import Transaction from './Transaction';

//css
const containercss = {
 
    overflow: "auto",
    "padding":"20px",
    "margin":"5px",
    "color": "#0077ff",
    "border": "2px solid #0077ff",
    "borderRadius": "6px",
    boxSizing: "border-box",
    minWidth: "75%",
    maxHeight: "300px",
    background: "#0060a4",
  };

function TransactoinContainer() {

    const [userdata, setUserData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
          .then((res) => res.json())
          .then((data) => {
            setUserData(data.users);

          })
          .catch((error) => {
            console.log("api error ", error);
          });
      }, []);

  return (
    <>
        <div style={containercss}>
            <h2 style={{color:"white"}}>All Transactions </h2> 
            
            {
               userdata?(userdata.map((user)=>(
                    <div key={user.id}>
                    <Transaction {...user} />
                    </div>
               ))):null
            }

        </div>
    </>
  )
}

export default TransactoinContainer
