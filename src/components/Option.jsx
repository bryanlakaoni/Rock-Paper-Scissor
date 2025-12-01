export default function Option({value, setOption}) {

  function handleClick(){
    setOption(value)
    console.log("value is set to ",value);
  }

  const imageID = value.toLowerCase();
  return (
    <button className={`option ${value}`} onClick={handleClick}>{value}</button>
  )
}