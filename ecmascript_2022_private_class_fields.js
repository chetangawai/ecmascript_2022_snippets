/*****************************************************************************
        ECMAScript 2022 Private instance fields, accessors and methods
******************************************************************************/
class User {
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this._phone = phone;
  }
  introduction() {
    return `UserWithPrivateFieldNameConvention :: My name is ${this.name} and I am ${this.age} years old!. My contact number is ${this._phone}.`;
  }
}

let user = new User("Chetan Gawai", 25, 999999);
console.log("Accessing _phone with private name convention ::",user._phone); //Phone number is accessible even if the naming convention is followed
console.log(user.introduction());


/***** Private fields and methods added in ECMAScript 2022 *****/

class UserWithPrivateFields {
  #phone;
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.#phone = phone;
  }
  //Private accessor
  get #phoneNumber() {
    return this.#phone;
  }
  //Private method
  #phoneNumberIntro() {
    return `My contact number is ${this.#phoneNumber}`;
  }
  introduction() {
    return `UserWithPrivateFields :: My name is ${this.name} and I am ${this.age} years old!. ${this.#phoneNumberIntro()}.`;
  }
}

let userWithPrivateFields = new UserWithPrivateFields("Chetan Gawai", 25, 999999);
console.log(userWithPrivateFields.introduction());
//console.log(userWithPrivateFields.#phoneNumberIntro()); //Uncaught SyntaxError: Private field '#phoneNumberIntro' must be declared in an enclosing class
//console.log(userWithPrivateFields.#phone); //Uncaught SyntaxError: Private field '#phone' must be declared in an enclosing class
//console.log(userWithPrivateFields.#phoneNumber); //Uncaught SyntaxError: Private field '#phoneNumber' must be declared in an enclosing class


/****** Private fields are not accessible in subclasses ******/

class UserSuperClass {
  #phone = 12345;

}
class Admin extends UserSuperClass {
  get phoneNumber() {
    //return this.#phone; //Uncaught SyntaxError: Private field '#phone' must be declared in an enclosing class
  }
}

/****** Limitations of Private fields ******/

/*** 1) Private fields and methods must be declared up-front in the field declaration. ***/
class UserWithUndeclaredPrivateFields {
  #phone;
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.#phone = phone;
    //#gender = "female"; // Uncaught SyntaxError: Unexpected identifier
  }
  get #phoneNumber() {
    return this.#phone;
  }
  introduction() {
    return `My name is ${this.name} and I am ${this.age} years old!. My contact number is ${this.#phoneNumber}.`;
  }

}

/*** 2) Private fields cannot be deleted ***/
class UserDeletingPrivateFields {
  #phone;
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.#phone = phone;
  }
  get #phoneNumber() {
    return this.#phone;
  }
  introduction() {
    //delete this.#phone; //Uncaught SyntaxError: Private fields can not be deleted
    return `My name is ${this.name} and I am ${this.age} years old!. `;
  }

}
