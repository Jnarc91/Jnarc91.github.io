/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



/*3. LET
*
*let is now preferred for variable declaration.
*let is block scoped
*A block is a chunk of code bounded by {}. A block lives in curly braces.
*Anything within curly braces is a block.
*So a variable declared in a block with let  is only available for use within that block.
*Example:
*/
   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
   
//   Just like var,  a variable declared with let can be updated within its scope.



/**
 * 4. CONST
 * 1. Variables declared with the const maintain constant values. const declarations share some similarities
 * with let declarations.
 */
       // You can create a constant array:
      const cars = ["Saab", "Volvo", "BMW"];
      
      // You can change an element:
      cars[0] = "Toyota";
      
      // You can add an element:
      cars.push("Audi");
      
      
 /** 
 * 2.Const declarations can only be accessed within the block they were declared just like let
 * 
 * 3. Const cannot be updated or re-declared
 * This means that the value of a variable declared with const remains the same within its scope.
 * It cannot be updated or re-declared. So if we declare a variable with const, we can neither do
 * this:
 * 
 */ 
      const greeting = "say Hi";
      greeting = "say Hello instead";// error: Assignment to constant variable.
      
   /**
    *5. Hoisting of const
    *    Just like let, const declarations are hoisted to the top but are not initialized.
    *      
    * 1. Hoisting/Redeclartaion/Reassigment Differences
    * 
    *    2. Var declarations are globally scoped or function scoped while let and const are block scoped.
    * 
    *    3. Var variables can be updated and re-declared within its scope; let variables can be updated but
    *    not re-declared; const variables can neither be updated nor re-declared.
    * 
    *    4.They are all hoisted to the top of their scope. But while var variables are initialized with
    *    undefined, let and const variables are not initialized.
    * 
    *    5.While var and let can be declared without being initialized, const must be initialized during 
    *    declaration.
   