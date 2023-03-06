let n1 = document.getElementById('firstNumber') ;
num1 = Math.floor(Math.random() * 100) + 1;

let n2 = document.getElementById('secondNumber') ;
num2 = Math.floor(Math.random() * 100) + 1;

console.log(num1);
console.log(num2);

n1.textContent = parseInt(num1) ;

n2.textContent = parseInt(num2) ; 

a = parseInt(n1.textContent) ;
b = parseInt(n2.textContent) ;



function checkResult(){
    let n3 = (document.getElementById('userInput').value) ;
    console.log(n3) ;
    c = parseInt(n3) ;
    if(c === a+b){
        document.getElementById("result").textContent = 'Yes, you are correct.' ;
    }
    else document.getElementById("result").textContent = 'Incorrect' ;
}

// let btn = document.createElement('button') ;
// btn.textContent = Restart ;

// btn.onclick = function(){
    //document.body.appendChild(btn) ;
    
// }

function restartGame(){
    window.location.reload() ;
}