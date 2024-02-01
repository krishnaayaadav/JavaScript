
// variables,  data types, conditional statements, operators, functions.


// Variable
// let , var and const are use to variable 

// creating variables
var user_name = 'krishna';
var student_id = 34233434;

let auth_status = false;
let password    = 'krishna123';


{   // global scope 
    var age = 23;
    console.log(`Age is : ${age}`)

    var age = 25; // re-initialization
}

console.log(`Age is : ${age}`) // here getting the value because it global scope


{
    // let variables are blocked scope
    let  has_voter_id = true;

    if(has_voter_id){
        console.log('Yes Voter Id Exists: ', has_voter_id)
    }

    // let variables are created single at time we can not create let variables more than one time

}

// console.log('Yes Voter Id Exists: ', has_voter_id)

// const variables
{
    // are also blocked scoped
    const emp_id  = '340945klkg0950';

    // const variables can be updated, we can not update the cont variables
}

// data -types : is classification/ categorization of the data into different categories so that we get know what are different operations that can performed on particular data set
/*
 Major data types in JavaScript

 1. String: is sequence of characters which is written in single or in double quetes.

 2. Number: is all number including positive and negative numbers weather they containing decimal points values also considered as valid number.

 3.Boolean: are use to work with true or false values single at a time.
 
 4.Undefined: when the value of the variable is not defined it called undefined.

 5.Objects: is an real world entity which having two things attributes and behaviors it known as object.

 */

 // string

let  userName = 'krishna';
let  userId   = 'userkdf34jk45kj';

console.log(typeof(userName))

// numbers

let student_roll = 7778;
let civil_score  = -45;
let temp         = 50.5;
console.log(student_roll, civil_score, temp)

// Booleans are use for true or false value

let status = false;
let is_eligible = false;
let is_present  = true;

console.log(status, is_eligible, is_present)

// undefined 
// when variable is defined but not value is assigned then it known as undefined

let exam_status ; // variable is created but value is not defined it called undefined
let exam_date   ;
console.log(exam_date,)

// objects
// objects are real world entity which contains attributes and behaviors

let person = {
    name: 'krishna yadav',
    email: "krishna234@gmail.com",
    address: "Punjab, India",
}

// access object properties values so we use object_name.property_name


console.log(person.name, person.email, person['address'])

// objects de-structuring
let {name:full_name, email, address} = person;
console.log(full_name, email, address)


// conditional statements which is control the flow of execution it is use perform/execute perform certain task as conditions it some condition is true that some task will be performed

if(userId){
    console.log(`Yes userId exists: ${userId}`)

}

if(is_eligible == true){
    console.log('Yes your eligible for');

}else{
    console.log('Soooory your not eligible for Vote')
}


if(!userName){
    console.log('username does not exists');

}else{
    console.log('yes username exists');
}

// operators : are special symbols 
/*
 Major Operatos Types are: 

 1. Arithmetic Operators: are use to perform mathematical operations addition, substraction, division, modulus, exponent ect.

 2. Assignment Operators: are use to assign the right hand side value to the left operand.

 3. Comparision Operators: are use compare two or values in terms of less than, greater than, equal to, not equal to etc.

 4. Logical Operators: are use to perform logical operation such as logical and , logical or , logical not

 5. Bitwise Operators: are use to perform operation on bits by bits So it first convert the given number into bits after then it start performing the operations

 6. Tarnary Operators: are use to perform ternay operations based on conditions.

 7. Relational Operators: are use to define the relation between two elements. We use in or instanceof

*/

// Arithmetic Operators:
let marks = 92;
let marks2 = 15;

// addition
let sum = marks + marks2;
console.log(sum)


// substraction
let substraction = marks - marks2;
console.log(substraction, marks2-marks)

// multiplication
let multiplication = marks * 3;
console.log(multiplication)

// division
let division = marks / marks2;
console.log(division, Math.floor(division))

// modulus remainder find
let modulus = marks % marks2;
console.log(modulus)

// exponent to the power

let square = 2 **2;
console.log(square) // 2*2 = 4

let quard = 2**4; // 2*2*2*2 = 16

console.log(quard)


// Assignment Operators

let roll = 50;

// addition assignment operators 

roll += 5; // 55 why: roll = roll + 5; 50 + 5 = 55 addition then assignment
console.log(roll)


roll -= 45; // roll = roll -45; substraction then assignment

console.log(roll)

roll %= 3; // remainder roll = 10%3 = 1;
console.log(roll)

// Comparision Operators

if(roll < 40){
    console.log('Roll is less than 40')
}else{
    console.log('Roll is greater than 40')

}

if(21 == 21){
    console.log('it is equal')
}

if(21 != 20){
    console.log('It is not equal')
}

// logical operators are use to perform logical operations such as logical and , logical or , logical not

if(12 == 12 && 54 == 54){ // logical and it both conditions are true it will return true
    console.log('Yes both are equal Logical And')

}

if(23 != 45 || userId == undefined){
    console.log('Logical or operator')
}

if(!userName){
    console.log('Username is not exists')

}else{
    console.log('username is exists')
}

// Bitwise operators
console.log(34 << 2) // bitwise leff shifft

console.log(45 >> 2) // bitwise right shifft


// ternay operators

let result =  (23 > 21) ? 'Yes it greater': 'Sooory it less';
console.log(result)

let pass_status = (userName == 'krishna123') ? 'Yes you are pass': 'Sooory your failed';
console.log(pass_status)

// Relational Operators membership operators

let carDetails = {
    name: 'Toyota',
    model: 'MDL34',
    price: 120000
}

let carName = 'name';

if(carName in carDetails){
    console.log('Yes car name is exist')
}else{
    console.log('Sooory car does not exists')
}

let bookDetails = ['William Width', 45000, 400];

console.log(400 in bookDetails ? 'Yess 400 is exists': '400 not exists')

// instanceof
class User{
    
    //constructor
    constructor(name, email, password){
        
        // properties/attributes
        this.name = name
        this.email = email
        this.password = password
    }
};

u1 = new User('Krishna', 'krishna234@gmail.com', 'krishna345')

console.log(u1 instanceof User ? 'Yes it instance of this class' : 'No it not instance')

// functions here  to create we function keyword

function greet_msg(msg){
    console.log(`Your message is: ${msg}`);
    return msg
}

// function code/block will only execute when it is called
greet_msg('Welcome to JavaScript functions')