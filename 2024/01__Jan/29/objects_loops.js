
// loops 

// 1-100

function print_nums(start, end){
    for(let i = start; i<= end; i++){
        console.log(i)
    }
    

}


// odd numbers

let odd_nums = []; // array here

for(let i = 2; i<= 100; i++){

    if(i%2 === 0){
        odd_nums.push(i); // store in odd_nums array
    }
}

console.log(odd_nums);

// find reverse of numbers 321

let user_input = 321;

function reverse_number(number){

    if(typeof(number) == 'number'){
        console.log('Yes it is a valid number')
        tempNum = number;
        reverseNum = 0


        while(tempNum != 0){
            // remainder 
            remainder  = tempNum%10
            reverseNum = reverseNum*10 + remainder
            console.log(reverseNum)
            tempNum    = Math.floor(tempNum/10)
        }
        console.log(reverseNum, number)


    }else{
        console.log('Sooory it is invalid number')
    }
    // console.log(typeof(number))
}

// reverse_number('fdfd')
reverse_number(3210001)

// console.log(321%10, 321/10)

// console.log(Math.floor(321/10))

// palindrom of numbers
function is_palindrom(number){
    let is_number_palindrom = false;

    if(typeof(number) === 'number'){

        tempNum = number;
        reverseNum = 0;

        while(tempNum != 0){
            remainder  = tempNum%10;
            reverseNum = reverseNum*10 + remainder;
            tempNum    = Math.floor(tempNum/10);

        }

        if(reverseNum === number){
            is_number_palindrom = true;
            console.log(`Yes number is palindrom number: reverse is: ${reverseNum} original number: ${number} `)

        }
        else{
            console.log(`No number is not palindrom number: reverse is: ${reverseNum} original number: ${number} `)

        }
        return is_number_palindrom;

    }
}

let result = is_palindrom(232);
console.log(result)

// objects in JavaScript 

let person = {
    name:  'krishna yadav',
    email: 'krishna123@gmail.com',
    address: 'Jalandhar, Punjab, India 152032'
}

// 
console.log(person.name, person.email, person.address)


// objects de-structring

let {name, email, address} = person;
console.log(name, email,  address);


// arrays de-structring

let bookDetails = ['Joss William', 'Learn Python', 1300, 200, '2022-12-21'];

console.log(bookDetails[0], bookDetails[1]);

let [authorName, bookName, ,price, publishDate] = bookDetails;
console.log(authorName, bookName, price, publishDate)

// arrow functions 

let makeDouble = number => number*2;

let makeTable  = number => {

    // multiple statements
    for(let i = 1; i  <= 10; i++){
        console.log(`Table of ${number} is: ${number}*${i} = ${i*number}`)
    }
}

console.log(makeDouble(12))
makeTable(12)