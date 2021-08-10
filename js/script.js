const guessedLetterElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetterInput=document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses=document.querySelector(".remaining");
const remainingSpan=document.querySelector(".remaining span");
const message=document.querySelector(".message");
const playAgainButton=document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function(word){
    //use an array:
    const placeholderLetters =[];
    for (const letter of word){
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText=placeholderLetters.join("");

};
placeholder(word);

guessButton.addEventListener("click",function(e){
    e.preventDefault();
    const inputValue=guessLetterInput.value;
     console.log(inputValue);
     guessLetterInput.value="";
}
);