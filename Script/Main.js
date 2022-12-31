const choices=document.querySelectorAll('.choices')
// const restart=document.querySelector('.restart-btn')
// console.log(restart)
const score=document.querySelector(".score");
const result=document.querySelector('#result')

let Pscore=0;
let Cscore=0;

function play(e)
{
    const playerChoice=e.target.id
    const computerChoice=getCChoice()
   const winner=getWinner(playerChoice,computerChoice)
   
   
   document.querySelector('#yourchoice').innerHTML=playerChoice
   document.querySelector('#computerchoice').innerHTML=computerChoice
   let win=document.querySelector('#resultt').innerHTML=winner
   
   const score2=getScore(winner)



}
function getScore(winner)
{
 if(winner=='Draw')
 {
     
 }
 else if(winner=='computer')
 {
   document.querySelector('#c12').innerHTML= "Computer: "+ Cscore++
}
 else{
    document.querySelector('#p12').innerHTML= "Player: "+ Pscore++
}
 }


function getWinner(p,c)
{
    if(p==c)
    {
        return 'Draw'
    }

    else if(p=='rock'){
        if(c=='paper'){
            return 'computer'

        }else{
            return 'player'
        }
    }
    
    else if(p=='paper'){
        if(c=='scissors'){
            return 'computer'

        }else{
            return 'player'
        }
    }
    else if(p=='scissors'){
        if(c=='paper'){
            return 'player'

        }else{
            return 'computer'
        }
    }
    

    }


choices.forEach(function(e)
{
    e.addEventListener('click',play)
})

function getCChoice()
{
    const randomNumber=Math.random()*20
    console.log(randomNumber)
    if(randomNumber<=7)
    {
        return "rock"
    }
    else if(randomNumber>=6&&randomNumber<=15)
    {
        return "paper"
    }
    else {
        return "scissors"
    }
}