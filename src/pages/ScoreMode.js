import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuButton from "../components/menuButton/MenuButton";
import Score from "../components/Score/Score";
import ProgressTimer from "react-progress-bar-timer";

function ScoreMode() {
  let [score, setScore] = useState(0);
  let [firstNum, setFirstNum] = useState("");
  let [secondNum, setSecondNum] = useState("");
  let [correctNum, setCorrectNum] = useState("");
  let [allScores, setAllScores] = useState([]);

  const ref = useRef();

  const generateNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    setFirstNum(generateNum(1, 100));
    setSecondNum(generateNum(1, 100));
  }, []);
  useEffect(() => {
    setCorrectNum(firstNum + secondNum);
  }, [firstNum, secondNum]);

  useEffect(() => {
    const scores = [];
    scores.push(correctNum);

    for (let index = 0; index < 3; index++) {
      scores.push(generateNum(1, 300));
    }
    const shuffled = scores
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setAllScores(shuffled);
  }, [correctNum]);

  const buttons = [];
  const colors = ["red", "blue", "purple", "green"];

  const history = useNavigate();

  const checkScore = (clickedScore) => {
    if (clickedScore === correctNum) {
      setScore(score + 1);
      setFirstNum(generateNum(1, 100));
      setSecondNum(generateNum(1, 100));
      setCorrectNum(firstNum + secondNum);
      const scores = [];
      scores.push(correctNum);

      for (let index = 0; index < 3; index++) {
        scores.push(generateNum(1, 300));
      }
      const shuffled = scores
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setAllScores(shuffled);
      ref.current?.restart()
    } else {
      //END GAME
      history('/end', {state: {score}})
    }
  };

  for (let index = 0; index < 4; index++) {
    buttons.push(
      <MenuButton
        key={index}
        score={allScores[index]}
        checkScore={checkScore}
        color={colors[index]}
        name={`${allScores[index]}`}
      ></MenuButton>
    );
  }

  return (
    <div className="App">
      <div className="App-body">
        <ProgressTimer duration={3} started={true} ref={ref} onFinish={() => history('/end', {state: {score}})} />

        <Score score={score} />

        <div>
          {firstNum} + {secondNum} = ?
        </div>

        {buttons}
      </div>
    </div>
  );
}
export default ScoreMode;
