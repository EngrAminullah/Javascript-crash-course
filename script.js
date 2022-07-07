// let js = "amazing";
// if (js === "amazing") alert("javascript is fun!");
// console.log(20 + 210 + 41210 - 12430);

// let firstName = "amin";
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 24;
// let person = "jonas";
// let PI = 3.1415;
// let myFirstJob = "programmer";
// let mySecondJob = "Teacher";

// let country = "Gapshapistan";
// let contenent = "Sub-continent";
// let population = "9000M";

// console.log(country);
// console.log(contenent);
// console.log(population);

// let sevenPrimitiveDataTypes = () => {
//   "numbers", "string", "boolean", "undefined", "null", "symbol", "BigInt";
// };
// let number = 24;
// let string = "amin";
// let boolean = true;
// // let undefined;
// // let => null;

// /// Javvascript comment
// let BigInt = "larger integer than the number ccan hold";

// let petrol = true;
// console.log(petrol);

// console.log(typeof true);

// petrol = "ak sawa assi";
// console.log(typeof petrol);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1993;
// console.log(typeof year);
// //------------Math operators --------------
// const now = 2037;
// const ageAmin = now - 1993;
// const ageHuma = now - 1995;
// console.log(ageAmin, ageHuma);

// console.log(ageAmin * 2, ageAmin / 5, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3=2*2*2

// const ffirstName = "Amin";
// const secondName = "ullah";
// console.log(ffirstName + " " + secondName);
// //--------------Assignment Operators ---------
// // let x = 2 + 5; //7
// // x += 10; // x= x+10
// // x *= 2; //x=x*2
// // x++; //x+1
// // x--; // x-1
// // console.log(x);

// //----------Comparison operators

// console.log(ageAmin > ageHuma); //>,<,>=,<=
// console.log(ageHuma <= 18);

// const isFullAge = ageHuma >= 18;
// console.log(now - 1995 > now - 2018);
// console.log(25 - 10 - 5);
// //---------operator precedence----------------
// let x, y;
// x=y=25-10-5;
// console.log(x, y)

// const averageAge= ageAmin+ageHuma/2;
// console.log(ageAmin, ageHuma, averageAge)
// const FaverageAge= (ageAmin+ageHuma)/2;
// console.log(ageAmin, ageHuma, FaverageAge)

//-----------------Coding challenge##1------------

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHiegherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHiegherBMI);

// if(BMIMark>BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is greater than the John's BMI (${BMIJohn})!`)
// }else{
//     console.log(`John's (${BMIJohn}) BMI is greater than the Mark's BMI(${BMIMark})!`)
// }

// const firstName='Amin';
// const job ='teacher';
// const birthyear='1993';
// const year=2037;

// const Amin ="I'm " + firstName +' a ' +(year - birthyear)+' year '+ job;
// console.log(Amin)

// const AminNew=`i'm ${firstName}, a ${year-birthyear} year old ${job}`
// console.log(AminNew)

// console.log(`just a regular string`)
// console.log('string with \n\
// multiple \n\
// lines');
// console.log(`string with 
// multiple
//  lines💕`)


// const age=19;
// if(age>=18){
//     console.log(`Sarah can start driving license`)
// }else{
//     const yearsLeft=18-age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)!`)
// }

// const birthYear=2001;

// let century;
// if(birthYear <= 2000){
//     century=20;
// }else{
//     century=21;
// }
// console.log(century)

//------------------ Type Conversion---------------
// const inputYear='1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear)+18)
// console.log(Number('Amin'))
// console.log(typeof NaN)
// console.log(String(23), 23)


//----------------- type Coercion------------------

// console.log('I am ' + 23 +' years old')
// console.log('23'-'10'-3)
// console.log('12' * 2)
// console.log('23'/'2')

// let n='1' +1;
// n=n-1;
// console.log(n)

//--------------5 falsy values--------------------
//---0,'',undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined))
// console.log(Boolean('Amin'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money=0;
// if(money){
//     console.log("Don't spend it all!")
// }else{
//     console.log("go and get a job!")
// }

// let height;
// if(height){
//     console.log('Yay! Height is defined')
// }else{
//     console.log('Height is undefined')
// }

const age ='18';
if(age===18){ // '23'==23, '23'===string
    // console.log('Hey everyOne, I am 18 plus! (Strick)')
}
if(age==18){
    // console.log('Hey everyOne, I am 18 plus! (Loose)')
}

const favourite = Number(prompt("whats your fav number!!"))
// console.log(favourite)
// console.log(typeof favourite)


if(favourite===23){
    console.log('Cool! 23 is a great number')
}else if(favourite===7){
    console.log('7 is a cool number')
}else if(favourite===9){
    console.log('9 is a cool number')
}
else{
    console.log('Number is not 23 or 9 or 7')
}
if(favourite !== 23){
    console.log('why not 23?')
}