// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

var userInput = window.prompt("Choose the length of your password")

var passwordLength = parseInt(userInput)

if (passwordLength < 8 || passwordLength > 128){
  window.alert("Please choose a length between 8 and 128 characters")
return
}
if (isNaN(passwordLength)) {
  window.alert("You need to input a number")
return
}
// Elements of the password that need to be prompted

var userWantsLowerCase = window.confirm("Do you want to include lower case letters?")
var userWantsUpperCase = window.confirm("Do you want to include upper case letters?")
var userWantsSymbols = window.confirm("Do you want to include symbols?")
var userwantsNumbers = window.confirm("Do you want to include numbers?")

// Elements of the password that needed to be input

var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbolsList = ["!","@","#","$","%","^","&","*"]
var numbersList = ["1","2","3","4","5","6","7","8","9","0"]

var optionsCart = []
// Applying the choices to the code
for (var i = 0; i < lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userwantsNumbers === true) {
  optionsCart.push(numbersList)
}
if (userWantsUpperCase === true) {
  optionsCart.push(uppercaseList)
}
if (userWantsLowerCase === true) {
  optionsCart.push(lowercaseList)
}
if (userWantsSymbols === true) {
  optionsCart.push(symbolsList)
}

var generatedPassword = ""
 
for (var i = 0; i < passwordLength; i++)  {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
}

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
