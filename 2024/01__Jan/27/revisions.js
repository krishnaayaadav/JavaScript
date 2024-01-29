

// console
console.log('Welcome to JavaScript');

// variables using let var, const

let username = 'krishna';
var user_name = 'krishna123';


console.log(username, user_name)

const employee_id = 1223;

console.log(employee_id);

// operators are use to perform operations according to the symbols we are using

// artithmetic operators , assignment operators ,  logical operator, bitwise operators, membership operators , identity operators


let roll1 = 2334;
let roll2 = 34434;

console.log(roll1 + roll2)

let sum  = roll1+ roll2;
console.log(sum)


const licenceId  = 'ldkflkg24kj45kl34';
let collage_name = 'Lovely Professional University';

console.log(collage_name)


let age = 18;

if(age >= 18){ // 18 > 18: False or 18 == 18 : True

    console.log(`Yes your eligible for Vote`)

}else{
    console.log('Your not eligible for Vote')
}

/// logical operators in JavaScript

let user_password    = 'user123';
let is_authenticated = true;

if(user_password == 'user123' && is_authenticated == true){
    console.log('Yes user password is matched and user is authenticated')

}else{
    console.log('Password mis-matched ')
}

let auth_status = false;

// logical && operators
if(username && user_password){
    // perform authentication
    auth_status = true;

    console.log('Yes user is authenticated because username and password both exists')

}else{
    console.log('Sooooory user is not authenticated')
}
  

// logical or operator
if(age > 18 || age == 18){
    console.log('Yes your eligible for Vote')
}

// logical not operators
if(age != 18){
    console.log('Age is not equal to 18')
}
let db_password = 'user123@$';

// logical not operator
if(user_password  != db_password){
    console.log('User password mis-matched')
}


// functions in javaScript to create a function we use  function keyword
function funct_name(msg){
    // define body here

}


function greet_message(message){
    console.log(`Your message is: ${message}`)

    return message
};

greet_message('Welcome to JavaScript Functions ')


// arrow functions 
let make_double = num =>  num *2;
console.log(make_double(22));

 