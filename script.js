"use strict";
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

// const age ='18';
// if(age===18){ // '23'==23, '23'===string
// console.log('Hey everyOne, I am 18 plus! (Strick)')
// }
// if(age==18){
// console.log('Hey everyOne, I am 18 plus! (Loose)')
// }

// const favourite = Number(window.prompt("whats your fav number!!"))
// console.log(favourite)
// console.log(typeof favourite)

// if(favourite===23){
//     console.log('Cool! 23 is a great number')
// }else if(favourite===7){
//     console.log('7 is a cool number')
// }else if(favourite===9){
//     console.log('9 is a cool number')
// }
// else{
//     console.log('Number is not 23 or 9 or 7')
// }
// if(favourite !== 23){
//     console.log('why not 23?')
// }

// const hasDriversLiscence=true //A
// const hasGoodVision=true//B

// console.log(hasDriversLiscence && hasGoodVision)
// console.log(hasDriversLiscence || hasGoodVision)
// console.log(!hasDriversLiscence)

// if (hasDriversLiscence && hasGoodVision){
//     console.log('sarah is able to drive')
// }else{
//     console.log('Someone else should drive')
// }

// const isTired=false; //C
// console.log(hasDriversLiscence && hasGoodVision && isTired)

// if (hasDriversLiscence && hasGoodVision && isTired){
//     console.log('sarah is able to drive')
// }else{
//     console.log('Someone else should drive')
// }

// const scoreTalegram = (88 + 100 + 89) / 3;
// const scoreBadar = (86 + 100 + 91) / 3;
// console.log(scoreTalegram, scoreBadar);
// if (scoreTalegram > scoreBadar && scoreTalegram >= 100) {
//   console.log("Talegram win the trophy 🏆");
// } else if (scoreBadar > scoreTalegram && scoreBadar >= 100) {
//   console.log("Badar win the trophy 🏆");
// } else if (scoreTalegram === scoreBadar && scoreTalegram >= 100 && scoreBadar >= 100) {
//   console.log("Both win the trophy 🏆");
// }else{
//     console.log('no one wins the trophy 😂')
// }

//------------ Switch statement ---------------

// const day ='tuesday'
// switch (day){
//     case 'monday':
//         console.log('Plan Course structure')
//         console.log('Go to coding meetup')
//         break;
//         case 'tuesday':
//             console.log('Prepare theory videos')
//             break;
//             case 'wednesday':
//                 case 'thursday':
//                     console.log('write code example')
//                     break;
//                     case 'friday':
//                         console.log('Record videos')
//                         break;
//                         case 'satureday':
//                             case 'sunday':
//                                 console.log('Enjoy weekend')
//                                 break;
//                                 default:
//                                     console.log('Not valid day')
// }
// if (day === 'monday'){
//     console.log('Plan Course structure')
//         console.log('Go to coding meetup')
// }else if (day ==='tuesday'){
//     console.log('Prepare theory videos')
// }else if (day === 'wednesday' || day === 'thursday'){
//     console.log('write code example')
// }else if(day === 'friday'){
//     console.log('Record videos')
// }else if (day === 'satureday' || day === 'sunday'){
//     console.log('Enjoy weekend')
// }else{
//     console.log('not valid day')
// }

//-------------- Conditional (ternary) operator---------
// const age =23;
// age >=18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💧')

// const drink = age >= 18 ? 'wine 🍷' :'water 💧';
// console.log (drink)

// let drink2;
// if(age >= 18){
//     drink2 ='wine 🍷';
// }else{
//     drink2 ='water 💧'
// }
// console.log(drink2)
// console.log(`I love to drink ${age >= 18 ? 'wine 🍷' :'water 💧'}`)

// const bill=275;
// const tip=bill <= 300 && bill >= 50 ? bill * 0.15:bill* 0.2;
// console.log(`The bill was ${bill}, The tip was ${tip}, and the total value ${bill + tip}`)

// function logger() {
//   console.log("My name is sheela");
// }
// // Calling/ running/ invoking function
// logger();
// logger();

// function fruitprocessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitprocessor(8, 6);
// console.log(appleJuice);
// const appleOrangeJuice= fruitprocessor(2,8);
// console.log(appleOrangeJuice)

//-------------Function declaration---------------
// function calcAge1(birthYear){
//     return 2037-birthYear
// }
// const age1=calcAge1(1991);
// //---------function expression-------------
// const calcAge2=function(birthYear){
//     return 2037-birthYear;
// }
// const age2=calcAge2(1991)
// console.log(age1, age2)
// //----------Arrow function----------
// const calcAge3= (birthYear) => 2037 -birthYear;
// const age3= calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age=2037 -birthYear;
//     const retirement =65-age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1991, 'Amin'))
// console.log(yearsUntilRetirement(1995, 'Bacha'))
//--------------Functions calling other functions-----------------
// function cutFruirPieces(fruit){
//     return fruit * 4
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruirPieces(apples);
//     const orangePieces = cutFruirPieces(oranges)
//     console.log(apples, oranges);
//     const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2,3))

// const calcAge = function(birthYear){
//     return 2037 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age=calcAge (birthYear);
//     const retirement =65-age;
//     if (retirement >0){

//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{

//         console.log(`${firstName} has already retired 🥧`);
//         return -1
// }
// return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement (1991, 'Amin'))
// console.log(yearsUntilRetirement (1970, 'Bacha'))

//------------------Functions challenge---------------------

// const calcAverage=(a,b,c)=> (a+b+c)/3;
// console.log(calcAverage(3,4,5));

// //Test 1
// let scoreDolphins=calcAverage(44,23,71);
// let scoreKoalas=calcAverage(65,54,49)
// console.log(scoreDolphins,scoreKoalas)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins>= 2* avgKoalas){
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs.${avgKoalas})`)
//     }else if(avgKoalas >= 2*avgDolphins){
//         console.log(`Koalas win 🏆 (${avgKoalas} vs.${avgDolphins})`)
//     }else{
//         console.log('no team wins...')
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas)
// checkWinner(600, 123)

// // Test 2
// scoreDolphins=calcAverage(85,54,41);
// scoreKoalas=calcAverage(23,34,27)
// console.log(scoreDolphins, scoreKoalas)
// checkWinner(scoreDolphins, scoreKoalas)
///----------------------------Arrays------------------------
// const friend1='Amin';
// const friend2='bacha';
// const friend3='Sajjid';
// const friends=['Amin', 'Bacha', 'sajjid'];
// console.log(friends);
// const y=new Array(1991,1984,2008,2020);
// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length -1])
// friends[2]='Mansoor'
// console.log(friends)

// const firstName='Amin';
// const amin=[firstName,'Ullah',2037-1993,'teacher',friends];
// console.log(amin)

//----Exercise--------
// const calcAge =function(birthYear){
//     return 2037-birthYear
// }
// const years = [1990,1967,2002,2010,2018];

// console.log( calcAge(years))

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length-1])
// console.log(age1,age2,age3)
// const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
// console.log(ages)

//------------Basic array operations----------

// const friends=['Amin', 'Bacha', 'sajjid'];
// // Add elements
// const newLength=friends.push('Mansoor');
// console.log(friends)
// console.log(newLength)

// friends.unshift('attyka');
// console.log(friends)

// // Remove elements
// friends.pop();
// console.log(friends)
// friends.pop();
// console.log(friends)
// friends.shift();
// console.log(friends)
// console.log(friends.indexOf('Bacha'))
// console.log(friends.includes('Amin'))
// console.log(friends.includes('Attyka'))
// friends.push(23)
// console.log(friends.includes(23))

// friends.push('mansoor')
// if(friends.includes('mansoor')){
//     console.log('You have a friend called mansoor')
// }else{
//     console.log('There is no any mansoor wansoor')
// }

//------------------arrays challenge--------------------

// const calcTip=function(bill){
//     return bill >=50 && bill <=300 ?bill *0.15:bill*0.2;
// }
// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
// console.log(bills,tips,totals )

// const aminArray =[
//     'Amin',
//     'Ullah',
//     2037-1991,
//     'teacher',
//     ['Bacha','Sajid','Mansoor']
// ];
// const amin={
//     firstName:'Amin',
//     lastName:'Ullah',
//     age:2037-1991,
//     job:'teacher',
//     friends:['Bacha','Sajid','Mansoor']
// }

//-----------------Dot vs Bracket Notation-----------------

// const amin={
//     firstName:'Amin',
//     lastName:'Ullah',
//     age:2037-1991,
//     job:'teacher',
//     friends:['Bacha','Sajid','Mansoor']
// }
// console.log(amin);
// console.log(amin.lastName)
// console.log(amin['lastName'])

// const nameKey='Name';
// console.log(amin['first' + nameKey]);
// console.log(amin['last' + nameKey]);

// const interestedIn=prompt('what do you know about Amin? Choose between firstName, lastName, age,job, and friends')
// console.log(amin[interestedIn])

// if (amin[interestedIn]){
//     console.log(amin[interestedIn])
// }else{
//     console.log('Wrong request! Choose between firstName, lastName, age,job, and friends')
// }

// amin.location='Swat';
// amin['twitter']='@YousafzaiAmin'
// console.log(amin)

// // Challenge
// //"Amin has 3 friends, and his best friend is called Bacha"
// console.log (`${amin.firstName} has ${amin.friends.length} friends, and his best friend is called ${amin.friends[0]}`)

// const amin={
//         firstName:'Amin',
//         lastName:'Ullah',
//         birthYear:1991,
//         job:'teacher',
//         friends:['Bacha','Sajid','Mansoor'],
// hasDriversLicense:true,

// calcAge: function (birthYear){
//     return 2037 - birthYear
// }

// calcAge: function(){
//     console.log(this);
//     return 2037 - this.birthYear;
// }

//     calcAge: function(){
//         this.age= 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary:function(){
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? 'a':'no'} driver's license `
//     }
// };
// console.log(amin.calcAge());
// console.log(amin.age);
// console.log(amin.age);
// console.log(amin.age);
// console.log(amin['calcAge'](1991))

//Challenge
//"amin is a 46 years old teacher. and he has a driver license"
// console.log(amin.getSummary())

// const mark ={
//     fullName:'Mark Miller',
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi=this.mass/this.height ** 2;
//         return this.bmi
//     }
// };

// const john={
//     fullName:'john Smith',
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.bmi=this.mass/this.height ** 2;
//         return this.bmi
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi)
// console.log(john.bmi)

//"john Smith's BMI (28.3) is higher Than Mark Miller's (23.9) "

// if (mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }else if(john.bmi > mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

//----------------Iteration: the for loop---------------------

// console.log('lifting weights repitition 1 ☔')
// console.log('lifting weights repitition 2 ☔')
// console.log('lifting weights repitition 3 ☔')
// console.log('lifting weights repitition 4 ☔')
// console.log('lifting weights repitition 5 ☔')
// console.log('lifting weights repitition 6 ☔')
// console.log('lifting weights repitition 7 ☔')
// console.log('lifting weights repitition 8 ☔')
// console.log('lifting weights repitition 9 ☔')
// console.log('lifting weights repitition 10 ☔')

// for loops keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repitition  ${rep}☔`);
// }

//  const aminArray =[
//         'Amin',
//         'Ullah',
//         2037-1991,
//         'teacher',
//         ['Bacha','Sajid','Mansoor']
//     ];
//     const types =[]
//     for(let i=0;i<aminArray.length;i++){
//         console.log(aminArray[i], typeof aminArray[i]);

//         // types[i]=typeof aminArray[i]

// types.push(typeof aminArray[i])    }
//     console.log(types)

//     const years =[1991,2007,1969,2020];
//     const ages =[];
//     for(let i=0;i<years.length;i++){
//         ages.push(2037-years[i])
//     }
//     console.log(ages)

//     //----------------Continue and break---------------

//     console.log('---ONLY STRINGS---')
//     for(let i=0; i<aminArray.length;i++){
//         if(typeof aminArray[i] !== 'string') continue;
//         console.log(aminArray[i], typeof aminArray[i])
//     }
//     console.log('---BREAK WITH NUMBER---')
//     for(let i=0; i<aminArray.length;i++){
//         if(typeof aminArray[i] === 'number') break;
//         console.log(aminArray[i], typeof aminArray[i])
//     }

// const aminArray =[
//     'Amin',
//     'Ullah',
//     2037-1991,
//     'teacher',
//     ['Bacha','Sajid','Mansoor'],
//     true
// ];

// //0,1,...,4
// //4,3,...,0
// for(let i= aminArray.length - 1; i>=0;i--){
//     console.log(i, aminArray[i])
// }

// for(let excercise=1; excercise<4;excercise++){
//     console.log(`-----starting excercise ${excercise}--------`);

//     for(let rep=1; rep<6;rep++){
//         console.log(`Exercise ${excercise}:lifting weight repitition ${rep} 🏋️‍♂️`)
//     }
// }

// for (let rep=1;rep<=10; rep++){
//     console.log(`Leftings weight repitition ${rep} 🏋️‍♂️`)
// }
// let rep=1;
// while(rep<=10){
// console.log(`WHILE:Leftings weight repitition ${rep} 🏋️‍♂️`);
//     rep++;
// }

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice)
// while(dice !== 6){
//     console.log(`you rolled a ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1;
//     if(dice===6)console.log('loop is about to end...')
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage=function(arr){
//     let sum=0;
//     for(let i=0; i< arr.length; i++){
//         // sum=sum+arr[i]
//         sum += arr[i]
//     }
//     console.log(sum)
//     return sum / arr.length
// }
// console.log(calcAverage([2,3,7]))
// console.log(calcAverage(totals))
// console.log(calcAverage(tips))

// const x = "23";
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

/////------------- The this keyword---------------
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1993);

// const person = {
//   firstName: "Amin",
//   secondName: "Ullah",
//   id: 5522,
//   fullName: function () {
//     return this.firstName + " " + this.secondName;
//   },
// };
// let pes = person;

// console.log("person", person.fullName());

// ////-----------Destructuring Arrays--------------

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tevanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetrian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, second, third] = restaurant.categories;
// console.log(first, third, second);
// const [awal, , dwayam] = restaurant.starterMenu;
// console.log(awal, dwayam);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// ////-------------Switching Variables----------

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// ////-----------Nested destructuring------------
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// /////-----------Default----------------------
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

///-------------Destructuring Objects----------------

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tevanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetrian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gungri"];
console.log(newMenu);
///------------ Copy array------------

const mainMenuCopy = [...restaurant.mainMenu];

////------Join 2 arrays----------
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

///----------Iterables: arrays, strings, maps, sets. NOT objects

const str = "Amin";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
////--------Real-world Example---------
const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("ingredient 2?"),
  //   prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//// objects------------------
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Makaday Talegram",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Taghwan Talegram",
//   starterIndex: 1,
// });
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: srarters = [] } = restaurant;
// console.log(menu, srarters);

// /////Mutating Variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// ///////////Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
