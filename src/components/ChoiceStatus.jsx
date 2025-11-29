export default function ChoiceStatus({click, choice}) {
    if(click){
      return <p>You pick {choice.user}</p>;      
    }
    
    return <p>You pick none</p>;
  }