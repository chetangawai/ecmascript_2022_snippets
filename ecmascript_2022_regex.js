/*****************************************************************************
                 ECMAScript 2022 Addition of d flag in regex
******************************************************************************/

let testString= 'this hat is better than that hat.';

//matchAll without d flag

let regexWithoutDFlag = /th(..) hat/g;
let result = [...testString.matchAll(regexWithoutDFlag)];
console.log('Result without d flag ::', result);

// matchAll with d flag

let regex = /th(..) hat/gd;
let res = [...testString.matchAll(regex)];
console.log('Result with d flag :: ', res);