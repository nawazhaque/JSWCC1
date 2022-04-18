//Very easy 
var x= 2;
var y= 2;
console.log(x-y);

//Easy
var nameOne= "Vanessa"
const nameTwo= "Nikhi";
var  statement= "The name ";
var statementTwo= " is longer than ";
var statementThree= " by 2 characters."
console.log(statement + nameOne + statementTwo + nameTwo + statementThree);
// console.log(`The name ${nameOne} is longer than ${nameTwo} by ${nameOne, length - nameTwo, lentgh} characters. }`);


//Medium
var voice = prompt("What are you saying"); 

    if (voice === voice.toUpperCase()) 

    { console.log(`User is shouting`) 

    } else if (voice === voice.toLowerCase()) {

    console.log(`User is whispering`)

} else {

    console.log(`User is talking normally`);
}

//Hard
let n1;
let n2;
let add = n1 + n2
let minus = n1 - n2
let multiply = n1 * n2
let divide = n1 / n2;


//Very Hard
let n1 = Number(prompt(`Please enter a number `));
let operator = prompt(`Please select an operator either (+, -, *, and /):`);
let n2 = Number(prompt(`Please enter another number `));

if (operator == '+') {
    let result = n1 + n2
    console.log(`${n1} ${operator} ${n2} = ${result}`);
}

else if (operator == "-") {
    let result = n1 - n2
    console.log(`${n1} ${operator} ${n2} = ${result}`);
}

else if (operator == "*") {
    let result = n1 * n2
    console.log(`${n1} ${operator} ${n2} = ${result}`);
}

else if (operator == "/") {
    let result = n1 / n2
    console.log(`${n1} ${operator} ${n2} = ${result}`);
}



