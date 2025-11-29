import { useGame } from './hooks/useGame';
import Options from './components/Options';
import ChoiceStatus from './components/ChoiceStatus';
import Scoreboard from './components/Scoreboard';
import FightButton from './components/FightButton';
import './App.css'

export default function App() {
  const { choice, score, status, click, options, fightLabel, setOption, handleFight } = useGame();

  return (
    <>
      <Scoreboard score={score}/>
      <h1>Rock Paper Scissor</h1>
      <p>Choose one of the moves to defeat your enemy. The first one to reach 10 scores wins.</p>
      <p className='status'>{status}</p>
      <Options options={options} setOption={setOption}/>
      <ChoiceStatus click={click} choice={choice}/>
      <FightButton handleFight={handleFight} fightLabel={fightLabel}/>
    </>
  )
}


// need to rapihin code and function biar lebih code quality, structured, maintainable, dan jelas solving problem approachnya.