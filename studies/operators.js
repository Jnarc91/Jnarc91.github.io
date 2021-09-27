/**
 * 0. OPERATORS: 
 * 1. An operator performs some operation on single or multiple operands (data value) and produces a result.
 * 
 * 2. An operator performs some operation on single or multiple operands
 * (data value) and produces a result.
 * 
 * 3. An ASSIGNMENT OPERATORS assigns a value to its left operand based on the value of its right operand.
 * 
 * 4. Here are some assignment operator types:
 * 
 * = operator --> assigns a vaolue to a variable
 * += operator --> adds a vlue to a variable
 * -= operator --> subtracts a value from a variable.
 * /= operator --> divides a variable
 * %= operator --> assigns a remainder to a variable
 * 
 * 5. ARITHMETIC OPERATORS: perform arithmetic operations on numbers
 */ 
 // 6. Examples of Arithmetic Operators
 
  //The addition operator (+) adds numbers.
        var x = 5;
        var y = 2;
        var z = x + y;
        
  //The subtraction operator (-) subtracts numbers.
        var x = 5;
        var y = 2;
        var z = x - y;
        
  //The multiplication operator (*) multiplies numbers.
        var x = 5;
        var y = 2;
        var z = x * y;
  
  //The division operator (/) divides numbers.
        var  x = 5;
        var y = 2;
        var z = x / y;
  
  //The modulus operator (%) returns the division remainder.
        var x = 5;
        var y = 2;
        var z = x % y;
  
  //The increment operator (++) increments numbers.
  
        var x = 5;
        x++;
        var z = x;
  //The decrement operator (--) decrements numbers.
        var x = 5;
        x--;
        var z = x;
  
  //The exponentiation operator (**) raises the first operand to the power of the second operand.
        var x = 5;
        var z = x ** 2;          // result is 25
  
 /*
 * 7. COMPARISON OPERATORS: are used in logical staemtnes to determein
 *                          equality or difference bewtween variables or values.
 */ 
 // 8. Comparison Operators Types:
 // == equal to
        5 == "5"; // returns true
        
 // === strictly equal to
        5 === "5"; //returns false;
        
 // != not equal
        x != 8//--> returns true
        
 // !== not equal to value or not equal to type(strictly)
        x !== 5 //--> returns false
        
 // > greater than
        5 > 8 //--> returns false
        
 // < less than
        5 < 8 //--> returns true
        
 // >= greater than or equal to
        5 >= 8;
        
// < lessthan or equal to
        5 <= 8;
 /*
 
 * 9. LOGICAL OPERATORS: are used to determine the logic between variables or values
 *  
 * 10. Logical Operator Types:
 *      && and
 *      || or
 *      ! not
 * 
 * 11. TERNARY OPERATORS: JavaScript also contains a conditional operato
 *                          that assigns a value to a variable based on some condition.
 */ 
        // Syntax: condition ? expression_1 : expression_2;
        
        //Longer Version
        var age = 19;
        var canDrive;
        if (age > 16) {
            canDrive = 'yes';
        } else {
            canDrive = 'no';
        }
        
        //Ternary Version (Cleaner)
        var age = 19;
        var canDrive = age > 16 ? 'yes' : 'no';
 
 
 
 /* 
 * 13. UNARY OPERATOR- A UNARY operator is one that takes a single operand/argument
 *                      and performs an operation. Unary operators are more efficient than standard JavaScript function calls
 *                      Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
 * 
 * 14. Unary Operator Types:
 */ 
 //          Unary plus (+) Tries to convert the operand into a number
             let a = 10;
             a = +a; // 10
             a = -a; // -10
 
 /*
 *          Unary negation (-) Tries to convert the operand into a number and negates after
 *          Logical Not (!) Converts to boolean value then negates it
 *          Increment (++) Adds one to its operand
 *          Decrement (–) Decrements by one from its operand
 *          Bitwise not (~) Inverts all the bits in the operand and returns a number
 *          Typeof Returns a string which is the type of the operand
 *          Delete Deletes specific index of an array or specific property of an object
 *          Void Discards a return value of an expression.
 * 
 * 
 */