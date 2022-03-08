/*****************************************************************************
                    ECMAScript 2022 Class static block
******************************************************************************/

/**************************** Without static block ***************************/

class PersonWithoutStaticBlock {
  static panNo = "ABCD";
  static isEligibleForLoan;
  //If we write try-catch here, it will give syntax error. 
  // try {
  //   PersonWithoutStaticBlock.isEligibleForLoan = calculateEligibilityForLoan(PersonWithoutStaticBlock.panNo);
  //   console.log("PersonWithoutStaticBlock :: Is person eligible for loan?", Person.isEligibleForLoan);
  // } catch (error) {
  //   console.log('Error!');
  // }
}
try {
  PersonWithoutStaticBlock.isEligibleForLoan = calculateEligibilityForLoan(PersonWithoutStaticBlock.panNo);
  console.log("PersonWithoutStaticBlock :: Is person eligible for loan?", PersonWithoutStaticBlock.isEligibleForLoan);
} catch (error) {
  console.log('Error!');
}

function calculateEligibilityForLoan(panNo) {
  //Some complex logic for calculating loan eligibility
  return true; //Returning true for simplicity
}


/************* Using class static block (Simplifies code) ************/

class Person {
  static panNo = "ABCD";
  static isEligibleForLoan;
  static {
    Person.isEligibleForLoan = calculateEligibilityForLoan(Person.panNo);
    console.log("Person :: Is person eligible for loan?", Person.isEligibleForLoan);
  }
}


/******* Static blocks have privileged access to private state 
  (be they instance-private or static-private) ******************/

let getPanNo;

class PersonWithPrivateField {
  #panNo;
  static isEligibleForLoan;

  constructor(panNo) {
    this.#panNo = panNo;
  }

  static {
    // getPanNo has privileged access to #pan
    getPanNo = (obj) => obj.#panNo;
  }
}

let user = new PersonWithPrivateField('ABCD');
PersonWithPrivateField.isEligibleForLoan = getLoanEligibility(user);
console.log("PersonWithPrivateField :: Is person eligible for loan?", PersonWithPrivateField.isEligibleForLoan);

function getLoanEligibility(obj) {
  return calculateEligibilityForLoan(getPanNo(obj));
}


