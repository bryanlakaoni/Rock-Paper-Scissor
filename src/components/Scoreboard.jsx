export default function Scoreboard({score}) {
    return (
      <div className='scoreboard'>
        <h3 className='score'>Your Score: {score.user}</h3>
        <h3 className='score'>Opponent Score: {score.comp}</h3>
      </div>
    )
}