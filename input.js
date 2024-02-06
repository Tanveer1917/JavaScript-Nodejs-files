const p=require('prompt-sync')();

var name=p('Enter name:');
var salary=p('enter salary:');
var empid=p('Enter Id');
var empStatus=p('Enter Status');

console.log("Your name is"+"  "+name);
console.log("Your salary is"+"  "+salary);
console.log("Your Empid is:"+"  "+empid);
console.log("Employee status: "+"  "+empStatus);
