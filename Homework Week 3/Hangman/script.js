
var words = ["bootcamp", "challenge", "tropical", "cappuccino", "experience"]; 
var randomword = words[Math.floor(Math.random() * words.length)]; 
var answerArray = []; 
var guessesLeft = 6; 
var lettersLeft = randomword.length; 
var guessedLetters = [] 

for(i = 0; i < randomword.length; i++){
  answerArray[i] = "_";};
 
var alreadyGuessed = 0; 
var answerToDisplay = answerArray.join(" "); 
  document.getElementsByClassName("answerarea")[0].innerHTML = answerToDisplay; 

  function contains(thing, array){
  
  if(array.indexOf(thing) > -1){
    return true;
  }
  else {
    return false;
        }
      };


function reset(){
 randomword = words[Math.floor(Math.random() * words.length)]; 
 answerArray = []; 
 guessesLeft = 6; 
 lettersLeft = randomword.length; 
guessedLetters = [] 
for(i = 0; i < randomword.length; i++){answerArray[i] = "_";};
 
 alreadyGuessed = 0; 
 answerToDisplay = answerArray.join(" "); 
  
  document.getElementsByClassName("answerarea")[0].innerHTML = answerToDisplay;} 


function guess(){
      
      var userGuess = document.getElementById("user-guess").value;
      
      alreadyGuessed = contains(userGuess,guessedLetters);

      if(alreadyGuessed === true){
        document.getElementsByClassName("instructions")[0].innerHTML = "You've already tried that letter " + userGuess.toUpperCase();
      }
     
     else if(lettersLeft === 0){
      document.getElementsByClassName("instructions")[0].innerHTML = "Brilliant! You won!";
    }
     
     else if(isNaN(userGuess) && userGuess.length === 1 ){
      


        guessedLetters.push(userGuess);

        document.getElementsByClassName("instructions")[0].innerHTML = "Nope! " + userGuess.toUpperCase() + " is not a letter in the word.";
        
        for(j=0; j < randomword.length; j++){
          if(randomword[j] === userGuess){
            answerArray[j] = userGuess;
            lettersLeft--;
          
          
          answerToDisplay = answerArray.join(" ")
          
          document.getElementsByClassName("answerarea")[0].innerHTML = answerToDisplay;

          document.getElementsByClassName("instructions")[0].innerHTML = "Good one! You guessed correctly!" ;
          if(lettersLeft === 0){
            document.getElementsByClassName("instructions")[0].innerHTML = "Brilliant! You won!";
          }
          }
      }
      }
     else{
       document.getElementsByClassName("instructions")[0].innerHTML = "Please guess a single letter.";
     }
 
     var userGuess = document.getElementById("user-guess").value = "";
  