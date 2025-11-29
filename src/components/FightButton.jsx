export default function FightButton({fightLabel, handleFight}) {
    return (
        <button className='fight-button' onClick={handleFight}>{fightLabel}</button>
    )
}