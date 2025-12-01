import { useState } from 'react'
import findWinner from '../utils/findWinner'

const options = ["Rock", "Paper", "Scissor"]
const round = 10;

export function useGame() {
    const [choice, setChoice] = useState({ user: null, comp: null})
    const [score, setScore] = useState({ user: 0, comp: 0})
    const [status, setStatus] = useState("Pick a move to start!")
    const [click, setClick] = useState(false)
    const [fightLabel, setFightLabel] = useState("Start Fight");
  
    let randomNumber;
    let compChoice;

    function handleFight(){
        if(score.user >= round || score.comp >= round) {
            console.log("game restart");
            setStatus("Pick a move to start!");
            setScore({user: 0, comp: 0});
            setChoice({user: null, comp: null});
            setFightLabel("Start Fight");
            setClick(false);
            return;
        }
        
        if(!click) {
            console.log("user has not pick an option");
            setStatus("Pick a move first before start a fight");
            return;
        }
        
        console.log("user has picked an option");
        
        randomNumber = Math.floor(Math.random()*3);
        compChoice = options[randomNumber];
        console.log("comp has pick an option");

        const {message: newStatus, user: userPoint, comp: compPoint} = findWinner(choice.user, compChoice, options);
        const newScore = {user: score.user+userPoint, comp: score.comp+compPoint};

        if(newScore.user==round) {
            setStatus("Congrats you win!");
            setFightLabel("Try Again");
        } else if(newScore.comp==round) {
            setStatus("Sorry you lose :(");
            setFightLabel("Try Again");
        } else {
            setStatus(newStatus);
        }

        setScore(newScore);
        setChoice(current => ({...current, comp: compChoice}));
        setClick(false);
    }   
  
    function setOption(value){
        setChoice(current => ({...current, user: value}));
        setClick(true);
    }

    return { choice, score, status, click, options, fightLabel, setOption, handleFight };
}