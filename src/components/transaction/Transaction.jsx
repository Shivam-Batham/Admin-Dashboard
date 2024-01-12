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
      "color": "#0077ff",
      "border": "2px solid #0077ff",
      "borderRadius": "6px",
      boxSizing: "border-box",
      minWidth: "5px",
      minHeight: "2px",
      background: "#fffff",
      
    };

return (
  <>
    <div style={containercss}>
      <div>
        <p>{firstName} &nbsp; Rs. {`${amount}`}</p>
      </div>
    </div>
  </>
);
}

export default Transaction
