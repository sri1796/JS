let randomNumber = Math.floor(Math.random() * 100) + 1;
 console.log(randomNumber) ;
 const guesses = document.querySelector('.guesses');
 const lastResult = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('.lowOrHi');
 
 const guessSubmit = document.querySelector('.guessSubmit');
//  const guessField = document.querySelector('.guessField');
 
 let guessCount = 1; 
 let user = document.getElementById('guessField') ;
 let userGuess = parseInt(user.value) ;


function checkGuess()
{
  let userGuess = parseInt(user.value) ;
  //console.log(userGuess);
  if(guessCount  === 1)
  guesses.textContent = 'Previous guesses: ' ;
  if (guessCount <= 10){
    if(userGuess<randomNumber){
      lowOrHi.textContent = 'value is too low' ;
      lastResult.textContent += userGuess ;
      lastResult.textContent += ', ';
      guessCount++;
    }
    else if(userGuess>randomNumber){
      lowOrHi.textContent = 'value is too high' ;
      lastResult.textContent += userGuess ;
      lastResult.textContent += ', ';
      guessCount++;
    }
    else if(userGuess === randomNumber){
      lowOrHi.textContent = 'Congratulations you guessed the correct value.'
      const button = document.createElement('button')

    // Set the button text to 'Can you click me?'
      button.innerText = 'Play Again'
      button.addEventListener('click', () => {
      // When there is a "click"
      // it shows an alert in the browser
        window.location.reload() ;
    })
    // Add the button to your HTML <body> tag
      document.body.appendChild(button)
      //guessCount++;
    }
    else
    lowOrHi.textContent = 'Enter the correct input.'
  }
  else
  {
    lowOrHi.textContent = 'You have used all the attempts, please try again later.'
    
    // <button onClick="window.location.reload()"> Reset </button> 
    const button = document.createElement('button')

    // Set the button text to 'Can you click me?'
    button.innerText = 'Reset'
    button.addEventListener('click', () => {
      // When there is a "click"
      // it shows an alert in the browser
      window.location.reload() ;
    })
    // Add the button to your HTML <body> tag
    document.body.appendChild(button)
  }
  
}
