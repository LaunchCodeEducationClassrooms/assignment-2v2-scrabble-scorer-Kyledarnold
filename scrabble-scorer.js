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


const vowels = ['A', 'E', 'I', 'O', 'U']


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
	console.log(letterPoints);
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  //console.log("Let's play some scrabble! Enter a word:");
  word = input.question("Let's play some scrabble! Enter a word:");
  return word;
};

function simpleScore(word) {
  console.log(word.length);
}



function vowelBonusScore(word){

  word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
 	 		 if (vowels.includes(word[i])) {
			letterPoints += 3;
       } else {
        letterPoints += 1;

      }
		 }
 
	  console.log(letterPoints);
	}

	
 


let scrabbleScore;

const scoringAlgorithms = [

  {
    'name': 'Simple Score',
    'description': '	Each letter is worth 1 point.',
    'scorerFunction': simpleScore

  },
  {
    'name': 'Bonus Vowels',
    'description': 'Vowels are 3 pts, consonants are 1 pt.',
    'scorerFunction': vowelBonusScore
  },

  {
    'name': 'Scrabble',
    'description': 'The traditional scoring algorithm.',
    'scorerFunction': oldScrabbleScorer

  }

]

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system");
  
  scoreIndex = parseInt(input.question("Enter 0, 1, or 2: "));
  return scoreIndex;
}

function transform(oldPointStructure) {
  let newPointStructure = {};
  for (var key in oldPointStructure){
    chars = oldPointStructure[key];
    for (var c in chars){
      char = chars[c];
      console.log(`Yo. I'm on key ${key} and I'm going to assign ${char} the point value ${key}`);
      newPointStructure[char] = key;
    }
  }
  return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  
  let scoreIndex = scorerPrompt();
  ///console.log(scorerPrompt());
   word = initialPrompt();
   // oldScrabbleScorer(word);
   ///console.log(simpleScore(word));
   ///console.log(vowelBonusScore(word));
   let scorerFunction = scoringAlgorithms[scoreIndex]['scorerFunction'];
   
  scorerFunction(word);

   
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
