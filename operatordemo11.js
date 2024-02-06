const p=require('prompt-sync')();

var num1=parseInt(p('Enter the First Number'));
var num2=parseInt(p('Enter the Second number'));

console.log("The addition of two numbers:"+" "+(num1+num2));
console.log("The subtraction of two numbers:"+" "+(num1-num2));
console.log("The multiplication of two numbers:"+" "+(num1*num2));
console.log("The dicvision of two numbers:"+" "+(num1/num2));
console.log("The power of two numbers:"+" "+(num1**num2));
console.log("The reminder of two numbers:"+" "+(num1%num2));
