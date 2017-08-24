/* Downloaded from https://www.codeseek.co/ */

var words = ['lamp','javascript','lasso','disco','table','chair','elephant','patio','adult','airplane','air','aircraft','carrier','airport','album','alphabet','apple','arm','army','baby','backpack','balloon','banana','bank','barbecue','bathroom','bathtub','bed','bee','bible','bird','bomb','book','boss','bottle','bowl','box','boy','brain','bridge','butterfly','button','cappuccino','car','race','carpet','carrot','cave','chair','chess','board','chief','child','chisel','chocolates','church','circle','circus','clock','clown','coffee','shop','comet','compact','disc','compass','computer','crystal','cup','cycle','data','base','desk','diamond','dress','drill','drink','drum','dung','ears','earth','egg','electricity','elephant','eraser','explosive','eyes','family','fan','feather','festival','film','finger','fire','floodlight','flower','foot','fork','freeway','fruit','fungus','game','garden','gas','gate','gemstone','girl','gloves','grapes','guitar','hammer','hat','hieroglyph','highway','horoscope','horse','hose','ice','ice cream','insect','jet','fighter','junk','kaleidoscope','kitchen','knife','leather','jacket','leg','library','liquid','magnet','man','map','maze','meat','meteor','microscope','milk','milkshake','mist']; //list of available words
var word = words[Math.floor(Math.random() * words.length)]; //selects a random word from word list
var answerArray = []; //creates empty array to house answer
var guessesLeft = 6; //tracks how many guess remain for the user
var lettersLeft = word.length; //tracks how many letters there are left in the word, when it equals zero, the player wins
var guessedLetters = [] //letters are pushed her as the player guesses
for(i = 0; i < word.length; i++){
  answerArray[i] = '_';
}; //fills answerArray with the right amount of blanks
var alreadyGuessed = 0; //Tracks if current guess have been guess before
var answerToDisplay = answerArray.join(' '); //joins the array to a space-separate string, is updated as players guess
document.getElementsByClassName('answerarea')[0].innerHTML = answerToDisplay; //displays the blanks for the user to see

function contains(thing, array){
  if(array.indexOf(thing) > -1){
    return true;
  }
  else {
    return false;
  }
};
function reset(){
 word = words[Math.floor(Math.random() * words.length)]; //selects a random word from word list
 answerArray = []; //creates empty array to house answer
 guessesLeft = 6; //tracks how many guess remain for the user
 lettersLeft = word.length; //tracks how many letters there are left in the word, when it equals zero, the player wins
guessedLetters = [] //letters are pushed her as the player guesses
for(i = 0; i < word.length; i++){
  answerArray[i] = '_';
}; //fills answerArray with the right amount of blanks
 alreadyGuessed = 0; //Tracks if current guess have been guess before
 answerToDisplay = answerArray.join(' '); //joins the array to a space-separate string, is updated as players guess
document.getElementsByClassName('answerarea')[0].innerHTML = answerToDisplay; //displays the blanks for the user to see
}
function guess(){
      //Set user input value in a variable
      var userGuess = document.getElementById("user-guess").value;
      //Check if player has already guessed the letter
      alreadyGuessed = contains(userGuess,guessedLetters);
      if(alreadyGuessed === true){
        document.getElementsByClassName('instructions')[0].innerHTML = "You've already guessed " + userGuess.toUpperCase();
      }
      //Check if win-case is true, display that the game is won.
     else if(lettersLeft === 0){
      document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You won!';
    }
     // Check if the user's answer is a single letter, otherwise display error message
     else if(isNaN(userGuess) && userGuess.length === 1 ){
        //insert negative guess results, they will be undone if the guess is right
        guessedLetters.push(userGuess);
        document.getElementsByClassName('instructions')[0].innerHTML = "Aww shucks! " + userGuess.toUpperCase() + ' is not a letter.';
        //check user's guess against the randomly selected word
        for(j=0; j < word.length; j++){
          if(word[j] === userGuess){
            answerArray[j] = userGuess;
            lettersLeft--;
          
          //update the guessed letters, placing the result in the below variable
          answerToDisplay = answerArray.join(' ')
          //display the new variable, thereby updating user on their progress
          document.getElementsByClassName('answerarea')[0].innerHTML = answerToDisplay;
          document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You guessed correctly!' ;
          if(lettersLeft === 0){
            document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You won!';
          }
          }
      }
      }
     else{
       document.getElementsByClassName('instructions')[0].innerHTML = "Please guess a single letter.";
     }
 // Clear input box box
     var userGuess = document.getElementById("user-guess").value = '';
  
  //Debug Displays
       // document.getElementsByClassName('debug')[0].innerHTML = lettersLeft + ' | ' + word + ' | * ' + guessedLetters + ' *' + alreadyGuessed;
        }