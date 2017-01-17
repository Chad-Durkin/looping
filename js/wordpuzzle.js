var originalString = prompt("Enter a sentence.");

var wholeFunction = function(originalString) {

  var arrayString = originalString.split("");
  var vowelArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y"];

  console.log(arrayString);

  var newArray = [];

  arrayString.forEach(function(letter) {
    for(index = 0; index < vowelArray.length; index++)
    {
      if(letter === vowelArray[index])
      {
        letter = "-";
        console.log("you got here");
      }
    }
    newArray.push(letter);
  });

  console.log(newArray);

  var finalString = newArray.join("");
  alert(finalString)

};

wholeFunction(originalString);
