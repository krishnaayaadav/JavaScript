let personInfo = {

    name: "krishna",
    sir_name: "yadav",
    skills: ['Python', 'Django', 'Rest-API Development', 'React.js', 'SQL'],

    getDetails: ()=>{
        console.log(personInfo.name, personInfo.sir_name, personInfo.skills)
    }

}

// access properties normal way

console.log(personInfo.name, personInfo.sir_name, personInfo.skills)


personInfo.getDetails()

// using object de-structuring

let {name, sir_name, skills} = personInfo;
console.log(name,sir_name, skills)

// class inheritance

class Person{
    constructor(name, age, address){
        this.name = name
        this.age  = age
        this.address = address

        this.details = ()=>{
            console.log(this.name, this.age, this.address)
        }
    }
};

p1 = new Person('Krishna yadav', 23, 'Punjab, India')

let {name:naam, age, address} = p1;
// console.log(naam, age, address)

p1.details()

// inheritance 
class Student extends Person{

    constructor(name, age, address, university, course){
        super(name, age, address); // calling parent constructor

        this.course = course,
        this.university  = university
    }
};

s1  = new Student('Nisha', 25, 'New Delhi', 'LPU', 'CSE')

s1.details()

// de-structuring

let bookDetails = ['Bhavan Singh', 'Master in Python', 3200, 450];

let author     = bookDetails[0];
let bookName   = bookDetails[1];
let bookPrice  = bookDetails[2];
let totalPages = bookDetails[3];

let [authorName, names, prices, pages] = bookDetails;

console.log(authorName, names, prices,  pages);

// arrow functions 

// normal function
function make_double(num){
    return num*2
}

// arrow function
let make_doubles = number => number*2;

function print_table(num){

    for(let i=1; i <= 10; i++){

        console.log(`Table of ${num} is: ${num}*${i} = ${num*i}`)

    }
}

print_table(21)

// using arrow function

let make_table = (number) => {

    for(let i=1; i <= 10; i++){
        console.log(`Table of ${number} is: ${number}*${i} = ${number*i}`)
    }


}

make_table(21)

// rest operator and spread operator

function add_numbers(...numbers){ // using here rest operator

    console.log(numbers)
    let total_sum = 0;

    numbers.forEach(elm => { // arrow function
        total_sum += elm;

    })

    return total_sum
}

console.log(add_numbers(12,23,1))


// spread operators are use to spread or open

console.log({...personInfo})// spread operators
console.log(...bookDetails)

let newBook = ['some data', 'page', 34, ...bookDetails];

console.log(newBook);

// while loop

// find reverse of number

function reverse(num){

    let rev = 0;

    let temp = num;

    while (temp != 0){

        remainder = temp%10;
        rev       = rev *10 + remainder;
        temp      = Math.floor(temp/10);
    }
    return {'original number': num, 'reverse is': rev}


}

console.log(reverse(123))