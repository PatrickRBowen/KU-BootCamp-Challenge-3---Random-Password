Index.html and Style.css are provided.

Created a new script.js with functions writePassword(), generatePasswordCharacters(), generatePassword().  

writePassword() should enable the user to input how many characters they would like to include in their random password, and if they would like to include lowercase letters, uppercase letters, numbers, special characters and then generate a "password" with those formats.
generationPasswordCharacters() then defines what the random characters can be and combines the sets (lowercase, uppercase, numbers, special) together depending on user input.  for loop is included inside function to randomize which characters are used and then password is returned.
generatePassword() then calls the password and displays it in the provided textbox in the index.html by finding element ID "password."  Alert pops up saying "we did it!"

I also got tired of looking at a white screen so I used a couple functions I had readily available from previous work - getRandomColor() and changeBackgroundColor().  
changeBackgroundColor() function was added to the end of writePassword(), so that background color is randomizes with each new password created.

