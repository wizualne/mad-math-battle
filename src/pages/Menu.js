import React from "react";

import { Link } from "react-router-dom";
import MenuButton from "../components/menuButton/MenuButton";

function Menu() {
  return (
    <div className="App">
      <div className="App-body">
        <Link to="/single/score-mode">
          <MenuButton color={"#ff006e"} name={"New single battle"}></MenuButton>
        </Link>
        <Link to="/multi">
          <MenuButton
            color={"#8338ec"}
            name={"New multiplayer battle"}
          ></MenuButton>
        </Link>
        <Link to="/options">
          <MenuButton color={"#3a86ff"} name={"Options"}></MenuButton>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
