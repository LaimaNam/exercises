// fizzbuzz
const fizzBuzz = () => {
  for (num = 1; num < 101; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(num, "FizzBuzz");
    } else if (num % 3 == 0) {
      console.log(num, "Fizz");
    } else if (num % 5 == 0) {
      console.log(num, "Buzz");
    } else {
      console.log(num);
    }
  }
};

/*Chessboard
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. 
At each position of the grid there is either a 
space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

const hashChessBoard = () => {
  let str = "";
  for (line = 1; line < 9; line++) {
    for (cell = 1; cell < 9; cell++) {
      if (line % 2 == cell % 2) {
        str = str + " ";
      } else {
        str = str + "#";
      }
    }
    str = str + "\n";
  }
  return str;
};

/*
When you have a program that generates this pattern, 
define a binding size = 8 and change the program so 
that it works for any size, outputting a grid of the given 
width and height.
*/

const hashChessBoard2 = () => {
  let size = 10;
  let str = "";

  for (line = 0; line < size; line++) {
    for (cell = 0; cell < size; cell++) {
      if (line % 2 == 0) {
        if (cell % 2 == 0) {
          str = str + " ";
        } else {
          str = str + "#";
        }
      } else {
        if (cell % 2 == 0) {
          str = str + "#";
        } else {
          str = str + " ";
        }
      }
    }
    str = str + "\n";
  }
  return str;
};

// FUNCTIONS
//  Write a function min that takes two arguments and returns their minimum.
// const min = (num1, num2) => Math.min(num1, num2);
// min(2, -6);

// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }
const promptFunc = () => {
  let n1 = prompt("Write any number", "0");
  let n2 = prompt("Write any number", "0");
  let num1 = parseInt(n1);
  let num2 = parseInt(n2);

  let minNum = min(num1, num2);
  // console.log(`Your min number is ${minNum}`);
  document.getElementById("funcMin").innerHTML = `Your min number is ${minNum}`;
};

const min = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};

// isEven recursive func

const isEven = (num) => {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
};

// Write a function countBs that takes a string as its only argument
// and returns a number that indicates how many specific characters
// there are in the string.

const countBs = (string) => {
  let strOfBs = "";
  const letterB = "b";
  for (i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letterB) {
      strOfBs = strOfBs + string[i];
    }
  }
  return strOfBs;
};

console.log(countBs("bp;skdpoasfbbbbbb"));

// --------------------------------------->
const countChar = (string, letter) => {
  let strOfBs = 0;
  const lowerCaseLetter = letter.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (string[i] === lowerCaseLetter) {
      strOfBs++;
    }
  }
  return strOfBs;
};

console.log(countChar("alkfowqhrowaaaaaAAAAAAeiubvdkjfoasg", "A"));

// Scopes local/global
const num1 = Math.random();

const multiplyer = () => {
  let num2 = 1000;
  return num1.toFixed(2) * num2;
};

console.log(multiplyer());

// Block-scoped variables

const warriors = [
  {
    name: "ninja",
    age: 31,
  },
  {
    name: "samurai",
    age: 24,
  },
  {
    name: "rick",
    age: 55,
  },
];

const oldWarriors = () => {
  console.log(warriors);

  warriors.map((warrior) => {
    if (warrior.age > 30) {
      // block-scoped
      let age = warrior.age;
      console.log(`old worrior: ${warrior.name}, his age: ${warrior.age}`);
    }
  });
};
oldWarriors();

// 1. return array of numbers from start to end + take third argument

const range = (start, end, step = 1) => {
  let numArray = [];

  if (step > 0) {
    for (i = start; i <= end; i = i + step) {
      numArray.push(i);
    }
  } else if (step < 0) {
    for (i = start; i >= end; i = i + step) {
      numArray.push(i);
    }
  } else {
    console.log("Error, third argument must not be 0");
  }

  return numArray;
};
console.log(range(10, 1, -2));

// 2. function that takes an array of numbers and returns the sum of these numbers
const sum = (arrayOfNums) => {
  let sumOfNum = 0;
  for (i = 0; i < arrayOfNums.length; i++) {
    sumOfNum += arrayOfNums[i];
  }
  return sumOfNum;
};

console.log(sum(range(1, 10)));

// reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
const reverseArray = (someArray) => {
  let newArray = [];
  let lengthOfArray = someArray.length;
  // LOOP: take the last element of array and put it in new array
  for (i = 0; i < lengthOfArray; i++) {
    let newItem = someArray.pop();
    newArray.push(newItem);
  }
  return newArray;
};
console.log(reverseArray([1, 2, 3, 4, 5]));

// different approach
const reverseArray2 = (someArray) => {
  let newArray = [];
  let lengthOfArray = someArray.length;
  for (i = 1; i <= lengthOfArray; i++) {
    let x = lengthOfArray - i;
    let newItem = someArray[x];
    newArray.push(newItem);
  }
  // console.log(someArray);
  return newArray;
};

console.log(reverseArray2(["A", "B", "C", "D", "E"]));

// reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.
// without creating new array.

const reverseArrayInPlace = (array) => {
  let lengthOfArray = array.length;
  // iterate over half of array
  // sukeist 0 su last
  // sukeist 1 su last - 1
  // sukeist 2 su last - 2 ir tt
  for (i = 0; i < Math.floor(lengthOfArray / 2); i++) {
    let lastElement = lengthOfArray - i - 1;
    let arr = array[i];
    console.log("i =" + i + "  lastElement=" + lastElement + "   arr=" + arr);
    array[i] = array[lastElement];
    array[lastElement] = arr;
  }

  return array;
};

let arrayValue = [10, 20, 30, 40, 50, 60, 70];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Write a function arrayToList that builds up
// a list structure like the one shown when given [1, 2, 3] as argument.
/* let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};*/

const arrayToList = (array) => {
  let element = null;
  for (let i = array.length - 1; i >= 0; i--) {
    let newElement = { value: array[i], rest: element };
    element = newElement;
  }
  return element;
};

console.log(arrayToList([10, 20, 30, 4, 50, 60, 70, 80, 90]));

// write a listToArray function that produces an array from a list.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: {
          value: 5,
          rest: null,
        },
      },
    },
  },
};
const listToArray = (inputList) => {
  console.log("LOOOOOOOOOOOOOOOOOOL");
  let array = [];
  let i = 0;
  let currentListStart = inputList;

  while (currentListStart != null) {
    array[i] = currentListStart.value;
    currentListStart = currentListStart.rest;
    i++;
  }

  return array;
};

console.log(listToArray(list));

// add a helper function prepend, which takes an element
// and a list and creates a new list that adds the element to the front of the input list
const prepend = (list, element) => {
  list = { value: element, rest: list };
  return list;
};
console.log(prepend(list, 10));

// nth, which takes a list and a number and returns the element at the given
// position in the list (with zero referring to the first element)
// or undefined when there is no such element.

// recursive version of nth
