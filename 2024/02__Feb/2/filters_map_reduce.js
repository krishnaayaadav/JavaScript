
let students = [
    {
        name: "Aisha",
        email: 'aish@gmail.com',
        age: 22,
        marks: 80,
        bonus: 0,
        gender: 'female'
    },
    {
        name: "Aman",
        email: 'aman@gmail.com',
        age: 23,
        marks: 85,
        bonus: 0,
        gender: 'male'
    },
    {
        name: "karna",
        email: 'karna@gmail.com',
        age: 18,
        marks: 90,
        bonus: 0,
        gender: 'male'
    },
    {
        name: "Krishan",
        email: 'krisha@gmail.com',
        age: 23,
        marks: 80,
        bonus: 0,
        gender: 'male'
    },
    {
        name: "Lagan",
        email: 'lagan@gmail.com',
        age: 22,
        marks: 30,
        bonus: 0,
        gender: 'female'
    },
    {
        name: "kailash",
        email: 'aish@gmail.com',
        age: 22,
        marks: 40,
        bonus: 0,
        gender: 'female'
    },
];


// filters are use to filterout the particular data from datasets

let stuAge20 = students.filter( stu => {

    if(stu.age >= 20){
        return stu
    }
} )

console.log(stuAge20)

let stuAgeMale = students.filter( stu => {

    if(stu.gender == 'male'){
        return stu
    }
} )

console.log(stuAgeMale)

// get all female candidates

let stuFemale = students.filter( stu => {

    if(stu.gender == 'female'){
        return stu
    }
} ) 

console.log(stuFemale)

// map functions is alter the all values

let stuBonus = students.map( stu => {

    if(stu.bonus == 0){
        stu.bonus += 100;
        return stu
    }
} )

console.log(students, stuBonus)