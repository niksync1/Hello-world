/*var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;
var num1 = parseInt(window.prompt("Enter a number: "));
var num2 = parseInt(window.prompt("Enter a number: "));
var operand1 = document.getElementById("operand1");
operand1.innerHTML+="num1";
var operand2 = document.getElementById("operand2").innerHTML="num2";
operand2.innerHTML+="num2";
var sum = num1 + num2;
var difference = num1 - num2;
var product= num1 * num2;
var num1 = parseInt(window.prompt("enter a number"));
var num2 = parseInt(window.prompt("enter another number"));
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");
operand1.innerHTML += num1;
operand2.innerHTML += num2;

// Part 5 - Operations
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

// Part 6 - Display results
var numbersString = num1 + " and " + num2 + " is ";
document.getElementById("addition").innerHTML = "The sum of " + numbersString + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + numbersString + difference;
document.getElementById("multiplication").innerHTML = "The product of " + numbersString + product;
document.getElementById("division").innerHTML = "The quotient of " + numbersString + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + numbersString + modResult;
*/
var guess;
var number = Math.floor(Math.random() * 100);
var limit = 5;
var won = false;
var guesses = [];

for (i=0; i <= limit; i++){
    guess = parseInt(prompt("enter a no.:"));
    while(isNaN(guess) || isPreviousGuess(guess));
    
    // correct guess let user know they won
    if (number == guess){
        document.write("correct!!you Won");
        won = true;
        break;}
    else{
        guesses[i] = guess;
        alert ("incorrect.\n You have guessed: " +
         guesses.toString() + "\nTries remaining: "+ (limit -i));}
        }

        // if user run out of tries, let them know the game is over
if (!won){
    document.write("sorry, you ran out of tries. Game over.<br> the correct number was: " + number);
    }
function isPreviousGuess(){
    for (i = 0; i < guesses.length;i++);
    if (guesses[i] = guess){
        return True;
    }
    return false
}