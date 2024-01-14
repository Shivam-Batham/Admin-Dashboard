
import React, { useState } from "react";


const containercss = {
  "display" : "flex",
  "flexDirection":"row",
  "flexFlow": "row wrap",
  "padding":"2px",
  "margin":"1px",
  "color": "#0077ff",
  boxSizing: "border-box",
  minWidth: "23%",
  minHeight: "700px",
  "justifyContent":"center",
  "alignItems":"flex-start",
};
const listContainerCss={
  "display" : "flex",
  "flexDirection":"column",
  "flexFlow": "column wrap",
  "alignItems":"flex-start",
  "padding":"2px",
  "margin":"5px",
  "color": "#0077ff",
  boxSizing: "border-box",
  background: "#fffff",
}
const listCSS = {
  "listStyle" : "none",
  "padding" : "1px",
  "margin" : "2px 10px"
}
const buttoncss={
  "display" : "flex",
  "flexDirection":"column",
  "flexFlow": "column wrap",
  "padding":"10px",
  "margin":"1px",
  "color": "#ffff",
  "border": "2px solid #004f8f",
  "borderRadius": "6px",
  boxSizing: "border-box",
  minWidth: "100%",
  minHeight: "30px",
  background: "#0780d6",
}

function Header() {
  const [activeStatus, setActiveStatus] = useState(false);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      id: 1,
      active: activeStatus,
    },
    {
      name: "Users",
      slug: "/users",
      id: 2,
      active: activeStatus,
    },
    {
      name: "Transactions",
      slug: "/transactions",
      id: 3,
      active: activeStatus,
    },
    {
      name: "About",
      slug: "/about",
      id: 4,
      active: activeStatus,
    },
    {
      name: "Contact",
      slug: "/Contaact",
      id: 5,
      active: activeStatus,
    },
  ];

  return (
    <>
      <header style={containercss}>
        <nav>
          <ul style={listContainerCss}>
            {navItems.map((item) => (
              <div key={item.id}>
                <li style={listCSS}>
                  <button style={buttoncss}>{item.name}</button>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
