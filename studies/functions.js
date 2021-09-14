/**
 * 0. FUNCTIONS
 * 
 * 1. Functions- are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements
 *               that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output
 *               where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from
 *               which you wish to call it.
 * 
 * 2.   While the function declaration above is syntactically a statement, functions can also be created by a function expression. Function expressions are convenient
 *      when passing a function as an argument to another function.
 * 
 * 3. Defining a function does not execute it. Defining it simply names the function and specifies what to do when the function is called. Calling the function actually
 *      performs the specified actions with the indicated parameters. The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function.
 * 
 * 4. There are 4 parts to a function:
 * 
 * 1. NAME: The function name.
 * 
 * 2. PARAMETER(S): Function can optionally take parameters. So they can take no parameters or as many are required. Parameters are just placeholders for arguments that are later
 *                  passed or given to the function at call time. If the function needs parameters, put the parameters inside the ( ). If no parameters are needed, leave the ( ) empty.
 * 
 * 3. FUNCTION BODY: The statements comprising the body of the function.
 * 
 * 4. RETURN STATEMENT: Stops the execution of that function and return a value from that function. Function can optionally have a return statement. The return statement will pull
 *                      a value from a function call. Return statements can only be used in a function body.
 * 
 * 
 * 5.FUNCTION AND FUNCTION CALLS KEY POINTS:
 *   Functions are predefined commands for preforming an action.
 *   Function call tells the computer to perform that action once.
 *   Function calls in Javascript are written like this: function();
 *   Arguments are data inputs for a function call
 *   If the function needs arguments, you will place them inside the ();
 *   If no arguments are needed, leave the () empty
 *
 */


/**
 * 6.FUNCTION SYNTAX
 * 
 *  function name(parameter1, parameter2, etc){
 *      <function body>
 *      <function body>
 *          return statement (or no return statement)
 *  }
 * 
 */ 
 
 
 //Here will be an example of a function taking 2 parameters and calling it with 2 arguments. The return is adding the 2 paramters together:
function add(num1, num2){
    return num1 + num2;
}

console.log(add(2, 2));


 //7. How do we assign a function to a variable? //
        //Function Expressions//
 /**       In JavaScript, functions are first-class object, meaning they can be passed into other 
  *       functions like any other value.  One method of doing this is to assign a function's value
  *       to a variable.  This variable is called a function expression.
  */
   var foo = function() {
        console.log("bar");  // foo() prints "bar"
    }; 
//Alternatively, arrow function expressions do the same thing but more compact:
    var bar = () => {
        console.log("foo");  // bar() prints "foo"
};