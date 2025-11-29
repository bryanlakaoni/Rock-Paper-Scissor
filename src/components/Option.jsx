export default function Option({value, setOption}) {

  function handleClick(){
    setOption(value)
    console.log("value is set to ",value);
  }

  return (
    <button className='option' onClick={handleClick}>{value}</button>
  )
}