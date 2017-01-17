// $(document).ready(function(){

var countTo = parseInt(prompt("What number do you want to count to?"));
var countBy = parseInt(prompt("What number do you want to count by?"));
var sums = [];

var checkVars = function(countBy, countTo) {
  if (isNaN(countTo) || isNaN(countBy)) {
    alert("Please enter a number");
    location.reload();
  }
  else if (countTo < countBy) {
    alert("It's not a factor");
    location.reload();
  }
  else if (countTo < 0 || countBy < 0){
    alert("Don't use negative numbers, please");
    location.reload();
  }
};

checkVars(countBy, countTo);

var counter = (countTo / countBy).toFixed(0);
console.log(counter);

for(var index = countBy; index <= countTo; index += countBy) {
  sums.push(index);
  console.log(index);
}
console.log(sums);
alert(sums);
// });
