// problem: half of a square 5x5
/*
#####
####
###
##
#
*/

// 1 ---
const lineOfHashs = (size) => {
  let str = "";
  for (row = 1; row <= size; row++) {
    str = str + "#";
  }
  return str;
};
console.log(lineOfHashs(7));

// 2-----
const squareOfHashs = (size) => {
  let str = "";

  for (row = 1; row <= size; row++) {
    for (i = 1; i <= size; i++) {
      str = str + "#";
    }
    str = str + "\n";
  }
  return str;
};
console.log(squareOfHashs(5));

//  3--------
const halfOfSquare = (size) => {
  let str = "";

  for (row = 1; row <= size; row++) {
    for (i = 1; i <= size + 1 - row; i++) {
      str = str + "#";
    }
    str = str + "\n";
  }
  return str;
};
console.log(halfOfSquare(5));

/* Problem: side triangle

  # 1
  ## 2 
  ### 3
  #### 4
  ### 3
  ## 2
  # 1
  
   */

const triangle = () => {
  let str = "";
  for (row = 1; row <= 7; row++) {
    let hash = 0;
    if (row > 4) {
      hash = 7 - row + 1;
    } else {
      hash = row;
    }
    for (i = 1; i <= hash; i++) {
      str = str + "#";
    }
    str = str + "\n";
  }
  return str;
};

console.log(triangle());

/* 
Luhn algorithm: write a program that takes an identification number of arbitrary length
and determines wether the number is valid under the Luhn formula.
First: 
- COMPUTING check DIGIT of a given number to understand the  L algorithm 
*/

// 1--------- func which doubles and sums num
const doubleDigit = (someNum) => {
  let doubleDigit = someNum * 2;
  let sum;
  if (doubleDigit >= 10) {
    sum = 1 + (doubleDigit % 10);
  } else {
    sum = doubleDigit;
  }
  return sum;
};

// 2 ----------
// func where the values of each digit are summed and the check digit is found
const findCheckDigit = (arrayOfNums) => {
  let sumOfNum = 0;
  for (i = 0; i < arrayOfNums.length; i++) {
    sumOfNum += arrayOfNums[i];
  }
  return 10 - (sumOfNum % 10);
};

// func where everything gets done
const luhnAlgo = (num) => {
  let arrOfNum = Array.from(String(num), Number);
  let arrLength = arrOfNum.length;
  let newarr = [];

  for (i = 0; i < arrLength; i++) {
    let digit = arrOfNum[arrLength - i - 1];
    if (i % 2 === 0) {
      let dig = doubleDigit(digit);
      newarr.push(dig);
    } else {
      newarr.push(digit);
    }
  }

  let checkDigit = findCheckDigit(newarr);
  arrOfNum.push(checkDigit);
  arrOfNum = arrOfNum.join("");
  return arrOfNum;
};

console.log(luhnAlgo(1111));

/* 
Second: 
Checking if the given number is correct according to Luhn algorithm 
If not: 
- REMOVING wrong LAST DIGIT
- COMPUTING LAST DIGIT with the func i wrote above
*/
const sum = (numb) => {
  let sumOfNum = 0;
  for (i = 0; i < numb.length; i++) {
    sumOfNum += numb[i];
  }
  return sumOfNum;
};

const luhnChecksumFormula = (numbers) => {
  let array = Array.from(String(numbers), Number);
  let checkDigit = array.pop();

  let arrLength = array.length;
  let newarr = [];

  for (i = 0; i < arrLength; i++) {
    let digit = array[arrLength - i - 1];
    if (i % 2 === 0) {
      let dig = doubleDigit(digit);
      newarr.push(dig);
    } else {
      newarr.push(digit);
    }
  }

  let sumOfNum = sum(newarr);

  if ((sumOfNum + checkDigit) % 10 === 0) {
    array.push(checkDigit);
    array = array.join("");
    return `Your check digit is correct: ${array}`;
  } else {
    let digit = findCheckDigit(newarr);
    array.push(digit);
    array = array.join("");
    return `Your check digit is incorrect so I made new one: ${array}`;
  }
};
console.log(luhnChecksumFormula(11114));
