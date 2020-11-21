var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.rgb(255, 4, 0).bold('THE 🧪  BIG 🔭  BANG 🥼  THEORY 🔬  QUIZ\n'));
var welcomeUser = readlineSync.question(chalk.cyan.bold('Enter your name:') + ' ' );
var score = 0;

console.log(chalk.rgb(248, 252, 3).bold('\nDRUMROLLS PLEASE 🥁  🥁  🥁'));

console.log(chalk.rgb(242, 222, 2)('\nHello ') + chalk.blue.bold(welcomeUser.toUpperCase()) + chalk.rgb(242, 222, 2)(', Welcome to the BIG BANG THEORY QUIZ\n'));

// INSTRUCTIONS
console.log(chalk.bold.rgb(0, 0, 0).bgGreen('RULES'))
console.log(chalk.rgb(255, 0, 0)('1) There will be 5 questions.'));
console.log(chalk.rgb(255, 0, 0)('2) Each right answer will yield 2 points.'));
console.log(chalk.rgb(255, 0, 0)('3) There will be no points given for wrong answer.'));
console.log(chalk.rgb(255, 0, 0)("4) You have to choose a single answer from  'a, b, c or d'.\n"));




function quiz(question, answer) {
	var userAns = readlineSync.question(question);
	if(userAns === answer) {
		console.log(chalk.green('RIGHT ANSWER'));
		console.log(chalk.green.bold(('You got ') + chalk.blue.bold('+2') + ' points'));
		score = score + 2;
	}else {
		console.log(chalk.rgb(255, 0, 0)("WRONG ANSWER"));
		console.log(chalk.green("The right answer is: " + "'" +answer + "'"))
		console.log(chalk.rgb(255, 0, 0)("You got 0 points"))
	}
		console.log(chalk.rgb(0, 183, 255)('Your current score is: ' + score));
		console.log('-------------------------------\n')
		
}

var questions = [
	questionOne = {
		question:"1) What does Sheldon's mom call him? \na) Sheldon \nb) Sheldor \nc) Shelly \nd) MoonPie \nYOUR ANSWER:",
  answer:"c"
	},
	questionTwo = {
		question: "2) What astronaut nickname was Howard given by his space friends? \na) Rocket Man \nb) Froot Loops \nc) Space Man \nd) Mama's Boy \nYOUR ANSWER:",
		answer: 'b'
	},
	questionThree = {
		question: "3) Who was once engaged to a Saudi prince? \na) Penny \nb) Bernadate \nc) Amy \nd) Leslie Winkle \nYOUR ANSWER:",
		answer: 'c'
	},
	questionFour = {
		question: "4)What is Leonard's middle name? \na) Leaky \nb) Andrew \nc) Alferd \nd) Louis \nYOUR ANSWER:",
		answer: 'a'
	},
	questionFive = {
		question: "5) Where do Sheldon, Raj, Howard, and Leonard work? \na) Harvard \nb) MIT \nc) Oxford \nd) Caltech \nYOUR ANSWER:",
		answer: 'd'
	},
]

for(i = 0; i< questions.length; i++) {
	let currentQuestion = questions[i];
	quiz(currentQuestion.question, currentQuestion.answer)
	
}

console.log(chalk.rgb(255, 221, 0).bold("Congratulations your final score is " + score + '\n'))
console.log(chalk.bold.rgb(191, 255, 0)("****HIGHSCORES****"));

var highScores = [{
		name: 'Vijay',
		score: 10
	},
	{
		name: 'Rahul',
		score: 10
	},
	{
		name: 'Lavanya',
		score: 10
	},
	
]

for(i = 0; i < highScores.length; i++) {
	accessScores = highScores[i];
	console.log((i + 1) + ') ' + accessScores.name + '	' + accessScores.score)
}

if(score == 10) {
	console.log(chalk.bold.rgb(255, 162, 0)('\nYOU SECURED THE HIGHEST SCORE  🥳  🎊  🥳'));
	console.log(chalk.yellow("\nPlease send me a screenshot on twitter at @omang_webdev"));
}

console.log('\n=============================')