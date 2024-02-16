import React from 'react'
import { useLocation, Link } from "react-router-dom";
import MenuButton from '../components/menuButton/MenuButton';

function EndGame() {

    const location = useLocation();
    const data = location.state;
   

  return (
    <div className="App">
      <div className="App-body">
      End Game!
      <div>

        Your score: {data.score}

      </div>
    <Link to="/">
      <MenuButton name={'Menu'} color={'red'}/>

    </Link>
    </div>
    </div>
  )
}

export default EndGame
