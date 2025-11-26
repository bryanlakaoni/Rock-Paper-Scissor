import { useState } from 'react'
import './App.css'

function Option({value, setValue, setClick}){

  function handleClick(){
    setValue(value);
    setClick("true");
    console.log("value is set to ",value);
  }

  return (
    <button className='option' onClick={handleClick}>{value}</button>
  )
}

function Options({userChoice, setChoice, setClick}) {
  return (
    <div className='options'>
      <Option value="Rock" setValue={setChoice} setClick={setClick}/>
      <Option value="Paper" setValue={setChoice} setClick={setClick}/>
      <Option value="Scissor" setValue={setChoice} setClick={setClick}/>
    </div>
  )
}

function Scoreboard({userScore, compScore}){
  return (
    <div className='scoreboard'>
      <h3 className='score'>Your Score: {userScore}</h3>
      <h3 className='score'>Opponet Score: {compScore}</h3>
    </div>
  )
}

function Fight({userChoice, userScore, compScore, setUser, setComp, setStatus, compChoice, setCompChoice, click, setClick}) {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random()*3);
  const [fight, useFight] = useState("Start Fight");
  setCompChoice(choices[randomNumber]);

  function handleFight(){
    if(click == "false") {
      setStatus("Pick a move first before start a fight");
    } else {
      if(userScore < 10 && compScore < 10) {
        if(userChoice == compChoice) {
          console.log("seri");
          setStatus("Draw!");
        } else if((userChoice == "Rock" && compChoice == "Scissor")||(userChoice == "Paper" && compChoice == "Rock")||(userChoice == "Scissor" && compChoice == "Paper")) {
          console.log("user +1");
          if(userScore + 1 == 10) {
            setStatus("Congrats you win!");
            useFight("Try Again");
          } else {
            setStatus("Win!");
            setClick("false");
          }
          setUser(userScore + 1);
        } else {
          console.log("comp +1");
          if(compScore + 1 == 10) {
            setStatus("Sorry you lose :(");
            useFight("Try Again");
          } else {
            setStatus("Lose!");
            setClick("false");
          }
          setComp(compScore + 1);
        }
      } else {
        setStatus("");
        setUser(0);
        setComp(0);
        useFight("Start Fight");
        setClick("false");
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
  const [userScore, setUserScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [compChoice, setCompChoice] = useState(null)
  const [status, setStatus] = useState(null)
  const [click, setClick] = useState("false")

  function Choice() {
    if(userChoice!=null){
      return (
        <p>You picked {userChoice}</p>
      )
    } else {
      return (
        null
      )
    }
  }

  return (
    <>
      <h1>Rock Paper Scissor</h1>
      <p>Choose one of the moves to defeat your enemy. The first one to reach 10 scores wins.</p>
      <Scoreboard userScore={userScore} compScore={compScore}/>

      <p className='status'>{status}</p>
      <Choice/>
      <Options userChoice={userChoice} setChoice={setUserChoice} setClick={setClick}/>
      <Fight userChoice={userChoice} userScore={userScore} compScore={compScore} setUser={setUserScore} setComp={setCompScore} setStatus={setStatus} compChoice={compChoice} setCompChoice={setCompChoice} click={click} setClick={setClick}/>
    </>
  )
}


// need to rapihin code and function biar lebih code quality, structured, maintainable, dan jelas solving problem approachnya.