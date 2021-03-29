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
