export default function ChoiceStatus({click, choice}) {
    if(click){
      return <p className="choice">You pick <span className="yellow">{choice.user}</span></p>;      
    }
    
    return <p className="choice">You pick none</p>;
  }