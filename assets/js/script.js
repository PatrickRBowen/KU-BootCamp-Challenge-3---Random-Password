// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  // variables
  var length = prompt("Please type in a number between 8 and 128 characters for your password length.");
  // only between 8 and 128
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Password can only be between 8 and 128 characters!")
    return;
  }

  //Check to see if user would like these sets
  var iLC = confirm("Would you like to use lowercase numbers?");
  var iUC = confirm("Would you like to use uppercase numbers?");
  var iN = confirm("Would you like to include numbers?");
  var iS = confirm("Would you like to include special characters?");
  //generate pass
  var password = generatePasswordCharacters(length, iLC, iUC, iN, iS);

  // must select character tyupe

  if (!iLC && !iUC && !iN && !iS) {
    alert("You must select a character format to generate a password!");
    return;
  }

  // I didn't want to look at a white screen
  changeBackgroundColor();

  // Generate password based on selected criteria
  return password;

}

// defining what random characters can be.
function generatePasswordCharacters(length, iLC, iUC, iN, iS) {
  var lcC = "abcdefghijklmnopqrstuvwxyz";
  var ucC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nC = "0123456789";
  var sC = "!@#$%^&*()`+_-?<>,.;:'[]{}";
  // If user selected multiple sets, combine them together.
  var aC = "";
  if (iLC) aC += lcC;
  if (iUC) aC += ucC;
  if (iN) aC += nC;
  if (iS) aC += sC; 

// I don't know how this works, but it works.
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * aC.length);
    password += aC.charAt(randomIndex);
  }
  return password;
}

// Should display password in text box under "Generate a Password"
function generatePassword() {
  var password = writePassword();
  var passwordText = document.getElementById("password");
  // I couldn't get the password to populate properly on the text, mainly because of issues in code I didn't find earlier.  So I added an alert for safe measure.  Both work now.
  passwordText.value = password;
  if (password) {
  // I changed alert to no longer display password, redundant.  Almost added in a "We did it" youtube video from Dora.
    alert("We did it!");
  }
}

// I got really bored looking at the plain white screen so I decided to randomize the colors.  This has nothing to do with the project.  But I'm keeping it on here.
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// function added to end of writePassword()
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
