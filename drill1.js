'use strict';

function hello() {
  console.log('hello world');
}

function goodbye() {
  console.log('goodbye world');
}

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

repeat(goodbye, 5);
repeat(hello, 5);

function hazardWarningCreator(typeOfWarning) {
  let warningCounter= 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));

'use strict';

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
input = input.split(' ');
console.log(input);


let output = input.reduce(function(acc, val) {
  if (val.length === 3) {
    acc = acc + ' ';
  } else {
    acc = acc + val.substr(val.length - 1);
  } return acc;}, '');

console.log(output);

'use strict'

function hello (){
    console.log('Hello World');
}

function goodbye(){
    console.log('Goodby world');
}

function repeat(func, num) {
    for(let i =0; i < num; i++) {
        func();
    }
}




function filter(arr, func) {
    const myArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])){
            myArray.push(arr[i]);
        } 
    }
    return myArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES