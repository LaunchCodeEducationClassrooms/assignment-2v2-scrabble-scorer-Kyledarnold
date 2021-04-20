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
  word = input.question("Let's play some scrabble!\n\nEnter a word:");
  return word;
};

function simpleScore(word) {
  console.log(word.length);
}

// function simpleScore(word) {
//   word = word.toUpperCase();
//   let letterPoints = 0;
//   for (let i = 0; i < word.length; i++){
//     letterPoints++
//   }
//   return letterPoints;
// }


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

	
 


//let scrabbleScore;
// function scrabbleScore(word) { 	
//   word = word.toLowerCase();
// 	let letterPoints = 0;
// 	for (let i = 0; i < word.length; i++) {
//     let letter = word[i] 
//     let score = newPointStructure[letter] 
//     letterPoints += parseInt(score)
// 	}
// 	return letterPoints;
//  };

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
  console.log("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");
  
  scoreIndex = parseInt(input.question("Enter 0, 1, or 2: "));
  return scoreIndex;
}

function transform(oldPointStructure) {
  let newPointStructure = {};
  for (var key in oldPointStructure){
    for (var char in oldPointStructure[key]){
      newPointStructure[char] = key;
    }
  }
  return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scoreIndex = scorerPrompt();
  ///console.log(scorerPrompt());

   // oldScrabbleScorer(word);
   ///console.log(simpleScore(word));
   ///console.log(vowelBonusScore(word));
   let scorerFunction = scoringAlgorithms[scoreIndex]['scorerFunction'];
   ///let score = scoringAlgorithms[letterPoints];
   console.log(`Score for '${word}':`,);
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
