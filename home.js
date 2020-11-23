console.log('hello');


//alert('hello this is PC-A');

//How to write a comment inLine

//Variables

var b= 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//Manupulate Dom with Javascript

//document.getElementById('someText').innerHTML ='Hey there';

//var age =prompt('What os your age?');

//document.getElementById('someText').innerHTML =age;

//Numbers in javascript
var num1=10;

//increment num1 by 1
num1++;

//Decrement num1 by 1
num1--;

console.log(num1);

//Divide, multiply *, remainder %
console.log(num1 % 6);


//Increment/decrement by 10
num1 +=10;
console.log(num1);

/* Functions
1.Create a function
2.Call the function
*/
//Create
function fun (){
    console.log('this is a function');
}
//call
fun();

/* Let's create a function that take in a name and says hello
followed by your name 

For example 

Name: "Qazi"
Return: "Hello Qazi"
*/

function greeting(yourName){
    var result= "Hello "+yourName; //String concatenation
    console.log(result);
}
var namef = prompt("What is your name?");

greeting(namef);

//How do arguments work in functions?
//How do we add 2 numbers toggether in a function?

function sumNumbers(num1, num2){
    var result  = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);


/*While loops

var num = 0;
while (num <100){
    num +=1;
    console.log(num);
}
*/

//For loop
for (let num =0; num <100; num ++){
    console.log(num);
}

//Data types
let yourAge = 18; //number
let yourName = "Adrian" // string
let name = {first: 'Jane', last: "doe"}; //object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; // undefined
let nothing = null; //value null

//String in javascript (common methods)
let fruit = 'banana, apple, orange, blackberry';
let moreFruits = 'banana\napple'; //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));//split by a comma
console.log(fruit.split(''));//split by characters


//Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

alert(fruits[1]);

console.log(fruits[2]); // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit';//same as push
console.log(fruits);
fruits.shift()//remove first element from a list
console.log(fruits);
fruits.unshift('kiwi')//add first element from a list
console.log(fruits);
444444444444444444444444444444444444
let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers= [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a,b){return a-b}));//sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a}));//sorted in descending order

let emptyArray= new Array();
for (let num = 0; num <=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);


//Objects in Javascript
//Dictionaies in Python

let student = {
    first: 'Adri',
    last: 'Vaz',
    age:21, 
    height:150,
    studentInfo: function(){
        return this.first +'\n'+this.last+ this.age;
    }
};
//console.log(student.first);
//console.log(student.last);

//student.first = 'notAdri';
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//Conditionals, control flows (if else)
//18-31 is my target demographic
//&& AND, || OR
let age=45;

if ((age>=18) && (age <=35)){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}

//Switch statements
//differentiate between weekday vs weekend
//day 0--> sunday
//day 6--> Saturday -->
//day 4 --> Thursday -->weekday
switch(6){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);