import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <Link to="/">Math Magicians</Link>
      <nav style= {{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </nav>
    </header>
  );
}

export default Nav;