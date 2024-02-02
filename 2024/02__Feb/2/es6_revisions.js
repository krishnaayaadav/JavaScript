
console.log('Welcome to Es6')

// functions, arrow functions, classes and inheritance, de-structuring, filters map and reduce functions


// normal functions

function greet_message(message){
    console.log(`Your message is: ${message}`)
    return message
}


console.log(greet_message('Welcome to JavaScript normal functions'))


// arrow functions

let make_double = (number)=>{
    return number*2
}

result = make_double(22); // calling a function
console.log(result);

let make_square = (number) => {
    return number*number
}

num_square = make_square(10);
console.log(num_square)


// classes and inheritance 

class Person{

    constructor(name, age, address){

        // properties here
        this.name = name
        this.age  = age
        this.address = address


    }
    // method here
    getDetails = ()=>{
        console.log(`${this.name} ${this.age} ${this.address}`)
    }

    getName = ()=>{
        return this.name
    }

    setName = (newName) => {
        this.name = newName; // updating name here
    }
}

p1 = new Person('Krishna yadav', 24, 'Punjab, India')

p1.getDetails()

console.log(p1.getName())

p1.setName('Ankita') // updating name

console.log(p1.name)

console.log(p1.getName())


// inheritance 
class Student extends Person{

    constructor(name, age, address, course, university, fee){

        super(name, age, address); /// calling here parent constructor

        // child properties
        this.fee    = fee
        this.course = course
        this.university = university
    }

    // child methods here

    getAllDetails = ()=>{
        console.log(`Name: ${this.name} Age: ${this.age} Course: ${this.course} University: ${this.university}  Address: ${this.address} `)
    }
}

s1  = new Student('Aisha', 25, 'New Delhi','CSE', 'LPU', 50000)

s1.getDetails()
s1.getAllDetails()
let name = s1.getName()

console.log(name)

// de-structuring 

// normal ways to fetching objects data
name = p1.name;
let age = p1.age;
let address = p1.address;
let course  = p1.course;
let university = p1.university;


// objects de-structing

let {name:naam, age:ages, address:addresss, university:universities } = s1;
console.log(naam, ages, addresss, universities)


// array de-structring
let studentDetails = ['Krishna Yadav', 24, 'Punjab, India', 'CSE', 'Lovely Professional University']

// normal ways to access the values

let stuName       = studentDetails[0];
let stuAge        = studentDetails[1];
let stuAddress    = studentDetails[2];
let stuCourse     = studentDetails[3];
let stuUniversity = studentDetails[4];

console.log(stuName, stuAge, stuAddress, stuCourse, stuUniversity)

// arrays de-structring
let [studName, , studAge, ,  studUniversity] = studentDetails;

console.log(studAge, studName, studUniversity)

// filter, map and reduce