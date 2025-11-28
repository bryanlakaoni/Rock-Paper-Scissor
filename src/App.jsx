import { useState } from 'react'
import './App.css'

function Option({value, setChoice, setClick}){

  function handleClick(){
    setChoice(current => ({...current, user: value}));
    setClick(true);
    console.log("value is set to ",value);
  }

  return (
    <button className='option' onClick={handleClick}>{value}</button>
  )
}

function Options({setChoice, setClick, options}) {
  return (
    <div className='options'>
      <Option value={options[0]} setChoice={setChoice} setClick={setClick}/>
      <Option value={options[1]} setChoice={setChoice} setClick={setClick}/>
      <Option value={options[2]} setChoice={setChoice} setClick={setClick}/>
    </div>
  )
}

function Scoreboard({score}){
  return (
    <div className='scoreboard'>
      <h3 className='score'>Your Score: {score.user}</h3>
      <h3 className='score'>Opponet Score: {score.comp}</h3>
    </div>
  )
}

function Fight({choice, setChoice, score, setScore, setStatus, click, setClick, options}) {
  let randomNumber;
  let compChoice;
  const [fight, useFight] = useState("Start Fight");

  function handleFight(){
    randomNumber = Math.floor(Math.random()*3);
    compChoice = options[randomNumber];
    // setChoice(current => ({...current, comp: choices[randomNumber]}));
    console.log("comp has pick an option");
    if(click == "false") {
      console.log("user has not pick an option");
      setStatus("Pick a move first before start a fight");
    } else {
      console.log("user has picked an option");
      if(score.user < 10 && score.comp < 10) {
        console.log("neither user or comp has 10 wins");
        if(choice.user == compChoice) {
          console.log("seri");
          setStatus("Draw!");
          setClick(false);
        } else if((choice.user == options[0] && compChoice == options[2])||(choice.user == options[1] && compChoice == options[0])||(choice.user == options[2] && compChoice == options[1])) {
          console.log("user +1");
          if(score.user + 1 == 10) {
            console.log("user won");
            setStatus("Congrats you win!");
            useFight("Try Again");
          } else {
            setStatus("Win!");
          }
          setClick(false);
          setScore(current => ({...current, user: current.user + 1}));
        } else {
          console.log("comp +1");
          if(score.comp + 1 == 10) {
            console.log("comp won");
            setStatus("Sorry you lose :(");
            useFight("Try Again");
          } else {
            setStatus("Lose!");
          }
          setClick(false);
          setScore(current => ({...current, comp: current.comp + 1}));
        }
        setChoice(current => ({...current, comp: compChoice}));
      } else {
        console.log("game restart");
        setStatus("");
        setScore({user: 0, comp: 0});
        setChoice({user: null, comp: null});
        useFight("Start Fight");
        setClick(false);
      }
    }
  }    

  return (
    <>
      <button className='fight-button' onClick={handleFight}>{fight}</button>
    </>
  )
}

export default function Game() {
  const [choice, setChoice] = useState({ user: null, comp: null})
  const [score, setScore] = useState({ user: 0, comp: 0})
  const [status, setStatus] = useState(null)
  const [click, setClick] = useState(false)
  const options = ["Rock", "Paper", "Scissor"]

  function Choice() {
    if(click){
      return <p>You pick {choice.user}</p>;      
    } else {
      return null;
    }
  }

  return (
    <>
      <h1>Rock Paper Scissor</h1>
      <p>Choose one of the moves to defeat your enemy. The first one to reach 10 scores wins.</p>
      <Scoreboard score={score}/>

      <p className='status'>{status}</p>
      <Choice/>
      <Options setChoice={setChoice} setClick={setClick} options={options}/>
      <Fight choice={choice} setChoice={setChoice} score={score} setScore={setScore} setStatus={setStatus}  click={click} setClick={setClick} options={options}/>
    </>
  )
}


// need to rapihin code and function biar lebih code quality, structured, maintainable, dan jelas solving problem approachnya.