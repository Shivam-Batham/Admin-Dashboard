import React,{useState} from 'react'

function Transaction({firstName,height}) {

  const [amount, setAmmount] = useState(height);
  const [username, setUserName] = useState(firstName);

  const containercss = {
      "display" : "flex",
      "flexDirection":"row",
      "flexFlow": "row wrap",
      "padding":"5px",
      "margin":"5px",
      "color": "#00487B",
      "border": "2px solid #0077ff",
      "borderRadius": "6px",
      boxSizing: "border-box",
      minWidth: "5px",
      minHeight: "2px",
      fontSize:"bold",
     
      background: "#FFF5EE",
      
    };

return (
  <>
    <div style={containercss}>
      <div>
        <h4>{firstName} &nbsp; Rs. {`${amount}`}</h4>
      </div>
    </div>
  </>
);
}

export default Transaction
