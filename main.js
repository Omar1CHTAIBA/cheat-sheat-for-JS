// overview
document.querySelector('h1').style.color = '#2819d1';
document.write('<h4>Supervisor</h4>');
document.querySelector('h4').style.color = '#1928d1';
// window.alert()

// data-types and variables {(typeof "hello" tells the datatype of the input)}
var x;
console.log(typeof x);
let y = "hello world with JS";
y = "hi";
window.console.log(typeof y);
const z = true;
console.log(typeof z);

/*
diffrences between {const, let, var}
1- In const declaraiton and inialization should be at the same time  (re-initialisation is not allowed in const)
2- Re-declare is allowed in var but not allowed in let and const
*/ 

// important ---> in JS u can concatenate number with str

let name = 'Omar';
let age = 26;
age += 1;
age ++; // log(++ age) (adding one after that print it ) | here log(age++) here will not work but it will change it!
age --;
let concatenatation = name + ' ' +age;
console.log(concatenatation);
console.log(`My name is ${name} and my age is ${age}`); //Like formating in python


// changing number into str 

console.log('4' - 4); // excepting {+} operation ; str datatype gonna be treated like number 
console.log(+'5' + +'7');
console.log(+'5' + -'7');
console.log(typeof Number('8.8'));
console.log(parseInt('4 omar'));
// console.log(parseInt('omar 4 omar')) this will not work the number should be befor the text and he does not know float
console.log(parseFloat('4 omar')); // more accurate 
console.log(Number.isInteger('4'));
console.log(Number.isNaN('omar' * 3));

// Math class

console.log(Math.abs(-5));
console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));

// input in JS

// let num = window.prompt()
// console.log(num)

// number into string
let str_into_int = 100;
console.log(typeof String(100))
console.log(typeof (str_into_int.toString())) // it should be variable because the compiler gonna think its a float point
console.log(((100.6).toString())) // or do it like this

// index
let index_testing = "Aya";
console.log(index_testing[0]); // if the index is out of range will return undefined
console.log(index_testing.charAt(0)); // but here will not show u anything
console.log(index_testing.indexOf('A', 2)); // the 2 mean start searching from index 2
console.log(index_testing.lastIndexOf('a', 2));// star from the back but same funcionality as indexOf
console.log(index_testing.includes('a', 2)); // true or false
console.log(index_testing.slice(0, 2));
console.log(index_testing.startsWith('A')); // also he have a start to lead the funciton from where to start
console.log(index_testing.endsWith('a')); // also can take an argument wich is lenght wich is the number of letters that i want to see if they finish by a for example
// other way to slice
let h = 'i love java script'
console.log(h.slice(2,6));// slice can take a minus values like python  and not one of them all of them
console.log(h.substr(2,6)); // first argument is the start and second is the lenght wich is how much letter do u want to take considering the start index letter
// console.log(index_testing.substr(0, 2));

// arrays

let names = ["omar", "ali", "aya"]
console.log(names)
names.push('gamal', 'lina') // gonnna add in the end of the array
names.unshift('gamal', 'lina') //gonnna add in the beggining of the array
names.shift()// delete the first and return the deleted data
names.pop() // delete the last and return the deleted data

// splice and slice array
console.log(names);
names.splice(0, 2); //start deleting from 0 and delete two objects so index 0 and 1
console.log(names);
names.splice(1, 1, 'omar', 'lina') // gonna add them in the place of the indexes that i precised early on
// names.splice(index, 0, 'omar', 'lina') // here is an adder
console.log(names);
console.log(names.slice(1, 2));// don't affect the original array (if i donot write the end it go at the end)

// search in arrays
console.log(names.indexOf('ahmed', 2)); // same arg in str method
// console.log(names.lastIndexOf('ahmed', 2)) // also reveald before in str
console.log(names.includes('omar')) // also reveald before in str (there is also a start arg)
// For adding arrays cause array + array is not working in Js but in Python it is
let arr = [1, 4, 5]
arr.concat(names) // also i can any other data type

// .trim remove unneeded spaeces
// === value and datatype | == just value
// and = && / or = ||

