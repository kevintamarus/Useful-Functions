//Generates a random number between num1 and num2
var randomGenerator = function(num1, num2) {
    var a = num1;
    var b = num2;
    if (num1 > num2) { a = num2; b = num1}
    return b - (Math.floor(Math.random()*((b-a)+1)));
}