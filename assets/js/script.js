// Assignment code here
function generatePassword(){
//object that stores password parameters
  //if a key value of param is true, push a specified array to a new array as an element

    let length = prompt("Please input desired password length, length must be 8-128 characters");
      
    //validates password length and recursively reprompts if invalid
    lengthVal = function() {
      if ( 128 < length || length < 8  || length == undefined || isNaN(length) === true){
        length = prompt("Please input desired password length, length must be 8-128 characters"); 
        lengthVal();
      } 
    }
    lengthVal();
        
    let lower = confirm("Click \"ok\" if you'd like your password to contain lowercase letters, and \"cancel\" if you do not." );
    let upper = confirm("Click \"ok\" if you'd like your password to contain uppercase letters, and \"cancel\" if you do not.");
    let number = confirm("Click \"ok\" if you'd like your password to contain numeric characters, and \"cancel\" if you do not.");
    let special = confirm("Click \"ok\" if you'd like your password to contain special characters, and \"cancel\" if you do not.");

    
  //validates password parameters and recursively re-prompts if choices are invalid
  let paramVal = function (){
    if (lower === false && upper === false && number === false && special === false) {
      alert("You must choose valid password parameters");
      lower = confirm("Click \"ok\" if you'd like your password to contain lowercase letters, and \"cancel\" if you do not." );
      upper = confirm("Click \"ok\" if you'd like your password to contain uppercase letters, and \"cancel\" if you do not.");
      number = confirm("Click \"ok\" if you'd like your password to contain numeric characters, and \"cancel\" if you do not.");
      special = confirm("Click \"ok\" if you'd like your password to contain special characters, and \"cancel\" if you do not.") ;
      paramVal();
    };
  };

  paramVal();

  //available character sets
    let arrLow = "abcdefghijklmnopqrstuvwxyz".split("");
    let arrUp = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    let arrNum = "123456789".split("");
    let arrSpec= "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~".split("");
  
  //creates an array where character set arrays will be pushed as elements, this will be iterated over to generate the password
  let chosenSet = [];

  //defines an array where generated password character will be stored
  let genRes = [];

  //if statements push chosen parameters to previously defined chosenSet array
  if (lower === true) {
    chosenSet.push(arrLow);
  };

  if (upper === true) {
    chosenSet.push(arrUp);
  };

  if (number === true) {
    chosenSet.push(arrNum);
  };

  if (special === true) {
    chosenSet.push(arrSpec);
  };

  for(let i=0; i < length; i++) {
   let randArr =  chosenSet[Math.floor(Math.random()*chosenSet.length)];
   let randChar = randArr[Math.floor(Math.random()*randArr.length)];
   genRes.push(randChar)
  };

   return genRes.join("");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
