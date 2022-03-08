/*****************************************************************************
          ECMAScript 2022 ergonomic brand check for private fields
******************************************************************************/

/************** Using try-catch to check for private field ******************/

class UserWithTryCatch {
  #phone = 99999;

  static phoneNumber(obj) {
    //Checks if #phone field is present in obj
    if (!obj.#phone) {
      throw new Error(`Error!`);
    }
    return `My phone number is ${obj.#phone}`;
  }
}
try {
  let phoneNo = UserWithTryCatch.phoneNumber(new UserWithTryCatch());
  console.log("UserWithTryCatch :: Phone number in user obj::", phoneNo); //UserWithTryCatch :: Phone number in user obj:: My phone number is 99999
  let newPhoneNo = UserWithTryCatch.phoneNumber({});
  console.log("UserWithTryCatch :: Phone number in empty obj::", newPhoneNo); //UserWithTryCatch :: Not applicable
} catch {
  console.log("UserWithTryCatch :: Not applicable");
}

/**************************** Using in operator *****************************/

class User {
  #phone = 99999;

  static phoneNumber(obj) {
    //Checks if #phone field is present in obj
    if (!(#phone in obj)) {
      return `Not applicable`;
    }
    return `My phone number is ${obj.#phone}`;
  }
}

let phoneNo = User.phoneNumber(new User());
console.log("User :: Phone number in user obj ::", phoneNo); //User :: Phone number in user obj :: My phone number is 99999
let newPhoneNo = User.phoneNumber({});
console.log("User :: Phone number in empty obj ::", newPhoneNo); //User :: Phone number in empty obj :: Not applicable

// Different class with same field
class NewUser {
  #phone = 111;
}

console.log("NewUser :: Phone number in a new obj ::", User.phoneNumber(new NewUser())); 
//NewUser :: Phone number in a new obj :: Not applicable
//as it is not the same #phone