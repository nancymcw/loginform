import React from "react";
//Straightforward Navbar with links and no other components used within it so nothing imported.
export default class Navigation extends React.Component {
  render() {
    console.log("Navbar loaded");
    return (
      <nav className="navBar">
        <ul>
          <li>
            <a href="...">Home</a>
          </li>
          <li>
            <a href="...">Details</a>
          </li>
          <li>
            <a href="...">Locations</a>
          </li>
          <li>
            <a href="...">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
