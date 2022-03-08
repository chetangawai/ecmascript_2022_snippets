/*****************************************************************************
          ECMAScript 2022 `.at()` on Array
******************************************************************************/

let sortedList = [4, 10, 30, 100, 202, 400];

/**************************** Using array length *****************************/

//1. Syntax affects the readability.
//2. We need to store the array in a variable and use the array name repeatedly
//3. It is hostile to anonymous values.

console.log(sortedList[sortedList.length - 1]); 
console.log(sortedList[sortedList.length - 2]); 

/******************************** Using slice ********************************/

//Although it avoids name repetition and is friendly to anonymous values,
//the syntax of using array.slice is a little weird, especially [0]

console.log(sortedList.slice(-1)[0]); 
console.log(sortedList.slice(-2)[0]);

/************************* Simplified syntax using at() ***********************/

console.log(sortedList.at(-1)); 
console.log(sortedList.at(-2));