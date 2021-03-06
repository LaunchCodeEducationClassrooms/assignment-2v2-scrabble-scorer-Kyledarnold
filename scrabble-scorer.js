// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  word = input.question("Let's play some scrabble!\n\nEnter a word:");
  return word;
};

// function simpleScore(word) {
//   console.log(word.length);
// }

function simpleScore(word) {
  word = word.toUpperCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++){
    letterPoints++
  }
  return letterPoints;
}


function vowelBonusScore(word){

  word = word.toUpperCase();
	let letterPoints = 0;
  let vowels = ['A', 'E', 'I', 'O', 'U']
 
	for (let i = 0; i < word.length; i++) {
 
 	 		 if (vowels.includes(word[i])) {
			letterPoints += 3;
       } else {
        letterPoints += 1;

      }
		 }
 
	  return letterPoints;
	}

	
function transform(oldPointStructure) {
  let newObject = {};
  for (item in oldPointStructure){
    let letterList =  oldPointStructure[item]
    for (let i = 0; i < letterList.length; i++) {
      let letter = oldPointStructure[item][i].toLowerCase();
      newObject[letter] = parseInt(item)
        }
  }
  return newObject;
};

let newPointStructure = transform(oldPointStructure);


function scrabbleScore(word) { 	
  word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
    let letter = word[i] 
    let score = newPointStructure[letter] 
    letterPoints += parseInt(score)
	}
	return letterPoints;
 };

const scoringAlgorithms = [

Object({name: 'simple', description: 'Simple Score', scorerFunction: simpleScore, scoringFunction: simpleScore}), Object({name: 'vowel', description: 'Bonus-vowels', scorerFunction: vowelBonusScore, scoringFunction: vowelBonusScore}), Object({name: 'scrabble', description: 'Scrabble', scorerFunction: scrabbleScore, scoringFunction: scrabbleScore})];

function scorerPrompt() {
  let scoreIndex = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, 2: ");
  
  return scoreIndex;
}





function runProgram() {
   let word = initialPrompt();
   let scoreMethod = scorerPrompt();
   let score = scoringAlgorithms[scoreMethod].scorerFunction(word);
   console.log(`Score for '${word}':`, score);
  ///scorerFunction(word);

   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
