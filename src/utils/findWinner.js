export default function findWinner(userChoice, compChoice, options){
        if(userChoice == compChoice) {
            console.log("seri");
            return { message: "Draw!", user: 0, comp: 0};
        } 
        
        if((userChoice == options[0] && compChoice == options[2])||(userChoice == options[1] && compChoice == options[0])||(userChoice == options[2] && compChoice == options[1])) {
            console.log("user +1");
            return { message: "You Win!", user: 1, comp: 0};
        }
        
        console.log("comp +1");
        return { message: "You Lose!", user: 0, comp: 1};
    }