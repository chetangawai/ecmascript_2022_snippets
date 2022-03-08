/*****************************************************************************
                    ECMAScript 2022 hasOwn feature
******************************************************************************/

const mobile = {
  model: 'AAA',
  type: null,
}

let hasOwnProperty = Object.prototype.hasOwnProperty;

if (hasOwnProperty.call(mobile, "model")) {
  console.log("Object.prototype:: Has property model");
}

//hasOwn simplifies the code to:

if (Object.hasOwn(mobile, "model")) {
  console.log("Object.hasOwn:: Has property model");
}

mobile.type = null;
console.log('Has property type', Object.hasOwn(mobile, "type")); //true
mobile.color = undefined;
console.log('Has property color', Object.hasOwn(mobile, "color")); //true

/******* Object.hasOwn returns false if the property is inherited, or has not been declared at all *******/

console.log('Has property memory', Object.hasOwn(mobile, "memory")); //false
console.log('Has property toString', Object.hasOwn(mobile, "toString")); //false
 
/******* Re-implementation of hasOwnProperty() does not affect Object *******/

let cirlce = {
  hasOwnProperty: function () {
    return false;
  },
  radius: 2
};

console.log('Has property hasOwnProperty', Object.hasOwn(cirlce, 'hasOwnProperty')); // true

/************************* Behavior of Object.create(null) ********************************/

//Object.create(null) will create an object that does not inherit from Object.prototype, making those methods inaccessible.

const obj = Object.create(null);

//console.log('Object.create property using hasOwnProperty:: Has property prop',  Object.create(null).hasOwnProperty("prop"));
//Throws error - Uncaught TypeError: Object.create(...).hasOwnProperty is not a function

console.log('Object.create property using hasOwn:: Has property prop', Object.hasOwn(obj, "prop")); //false