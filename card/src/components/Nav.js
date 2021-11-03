import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
return (
<div className ="nav">
          <ul>
            <li>
              <Link to="/" className ="link">Home</Link>
            </li>
            <li>
              <Link to="/about" className ="link" >About</Link>
            </li>
            <li>
              <Link to="/contact" className ="link">Contact</Link>
            </li>

            <li>
              <Link to="/cards" className ="link">Cards</Link>
            </li>
          </ul>
          <input class="searchbar">Search</input>
        </div>
)
}
export default Navbar; 