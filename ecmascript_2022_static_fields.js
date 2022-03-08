/*****************************************************************************
                 ECMAScript 2022 Static fields
******************************************************************************/
class Shape {
  static color = 'blue';

  static getColor() {
    return this.color;
  }

  getMessage() {
    return `Shape is of ${this.color} color` ;
  }
}

/*** The static fields and methods can be accessed from the class itself **/

  console.log("Accessing color using class name ::",  Shape.color); // blue
  console.log("Accessing getColor() using class name ::", Shape.getColor()); // blue
  
/************ Instances cannot access static fields and methods ************/

  const shapeInstance = new Shape();
  console.log("Accessing color with instance of class ::", shapeInstance.color); // undefined
  console.log("Accessing getColor() with instance of class ::", shapeInstance.getColor); // undefined
  console.log("Accessing getMessage non-static method with instance of class :: ", shapeInstance.getMessage());//Shape is of undefined color

/************** Static fields can only be accessed by static methods ***********/

  console.log(Shape.getColor()); // blue
  //console.log(Shape.getMessage()); //TypeError: Shape.getMessage is not a function

/*********** Static fields and methods are inherited from the parent class. ***********/

  class Rectangle extends Shape {

  }
  console.log("Accessing color of super class ::", Rectangle.color); // blue
  console.log("Accessing getColor() of super class ::", Rectangle.getColor()); // blue
  console.log('getMessage' in Rectangle); // false

/***************************** Static private fields *****************************/

//Like private instance fields and methods, 
//static private fields and methods are also defined with a hash (#) prefix.

class ShapeWithStaticPrivateFieldsMethods {
  static #color = 'blue';

  static #getColor() {
    return this.#color;
  }

  getMessage() {
    return `Shape is of ${ShapeWithStaticPrivateFieldsMethods.#getColor()} color` ;
  }
}
//console.log(ShapeWithStaticPrivate.#color); // Throws error
//console.log(ShapeWithStaticPrivate.#getColor()); // Throws error
const shape = new ShapeWithStaticPrivateFieldsMethods();
shape.getMessage(); // Shape is of blue color
console.log(shape); //Shape {}

/**************** Inheritance for private static fields and methods **************/

// Private static fields and methods are not inherited in the subclass

class ShapeParent {
    static #color = 'blue';
    static #getColor() {
      return this.#color;
    }
    static getMessage() {
      return `Shape is of ${this.#color} color` ;
    }
    getMessageNonStatic() {
      return `Shape is of ${this.#getColor()} color` ;
    }
  }
  class RectangleSubclass extends ShapeParent {}

  //console.log(RectangleSubclass.getMessage()); //Uncaught TypeError: Cannot read private member #color from an object whose class did not declare it
  const rectangle = new RectangleSubclass();
  //console.log(rectangle.getMessageNonStatic()); // TypeError: Cannot read private member #getColor from an object whose class did not declare it