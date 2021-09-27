/**
 * DATA TYPES:
 *0. Data types in Javascript describe the different types of data that store data and variables. There will be two Data Types explained.
 *
 *1. SIMPLE DATA TYPES (PRIMITIVE); 
 * 2. Simple Data Type are also known as Primitive data type is data that is not an object and has no methods.
 *      In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods.
 *          There are 7 primitive data types:
 * 
 * 1.String- is used to represent textual data (i.e. sequences of characters). 
 *      Strings are created using single or double quotes surrounding one or more characters. 
 *          Strings are collections of alphanumeric characters and symbols.
 * 2. Number-are just what they sound like. They’re numbers, including both integers and decimals. 
 *       Computers will often use numbers to perform mathematical operations, but they may also just be a number like a count of how many flavors of ice cream a particular store has.
 * 3. Bigint- is a numeric data type that can represent integers in the arbitrary precision format.
 *          In other programming languages different numeric types can exist, for examples: 
 *              Integers, Floats, Doubles, or Bignums.
 * 4. Boolean - can hold only two values: true or false. 
 *                  It is typically used to store values like yes (true) or no (false), on (true) or off (false
 * 5. Undefined- is a primitive type that has one special value undefined . 
 *          By default, when a variable is declared but not initialized, it is assigned the value of undefined . In this example, foo is a variable. Since foo is not initialized, it is assigned the value of undefined. 
 *           The purpose of an undefined datatype is to denote an absence of a meaningful value. 
 * 6. Symbol- Is a unique value that's not equal to any other value. A symbol value may be used as an identifier for object properties; 
 *              this is the data type's primary purpose, although other use-cases exist, such as enabling opaque data types, or serving as an implementation-supported unique identifier in general.
 * 7. Null- is a value that does not represent a real number, despite having number type. NaN is useful to represent faulty operations on numbers.
 *      The NaN is an error value in the JavaScript. However, technically it is the property of the global object.
 *          You get NaN when the value cannot be computed or as a result of attempted number coercion (type conversion) of non-numeric value (such that undefined) for which primitive numeric value is not available.
 * 
 * A primitive is not an object and has no methods of its own. All primitives are immutable. 
 * It is important not to confuse a primitive itself with a variable assigned a primitive value.
 * The variable may be reassigned a new value, but the existing value cannot be changed in the ways that objects, arrays, and functions can be altered.
 * 
 * 8. INFINITY: The value of the infinity is the largest number your JavaScript interpreter can handle. 
 *              It is never ending number that is greater than 0.
 * 
 * 9. INFINITY: The NEGATIVE_INFINITY is the largest negative number the JavaScript interpreter can represent.
 *              It is the never ending number that is less than 0.
 * 
 * 10. COMPLEX DATA TYPES: ARRAYS AND OBJECTS
 * 
 * 1. THE ARRAY DATA TYPE: An Array is also a collection of values. 
 *      Unlike an object, an Array is a collection of ordered values, not named values. 
 *      Each member of an Array is called an element. 
 *      Each element is denoted by a numeric position in the array–the position is called an index.
 * 
 * 2. OBJECT DATA TYPE: 
 *      An object contains properties, defined as a key-value pair. 
 *      A property key (name) is always a string, but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects.
 * 
 * 
 * 3. SIMPLE(PRIMITIVE) DATA TYPES: are known as being immutable data types because there is no way to change a primitive value once it gets created.
 * 
 * 4. COMPLEX DATA TYPES: values are mutable data types. 
 *      The value of an object can be changed after it gets created. Objects are not compared by value. This means that even if two objects have the same properties and values, they are not strictly equal. Same goes for arrays. Even if they have the same elements that are in the same order, they are not strictly equal.
 * 5.  The last 2 differences that they have is: Simple Data Types is copied by value and Complex Data Types are copied by reference.
 * 
 * 6. COPY BY VALUE: When you assign a variable, it is a reference to an object not the object itself. When you copy an object b = a both variables will point to the same address.
 * 
 * 7. COPY BY REFERENCE:A reference type can contain other values. Since the contents of a reference type can not fit in the fixed amount of memory available for a variable, the in-memory value of a reference type is the reference itself (a memory address).
 * 
 * 1. EXAMPLES OF SIMPLE DATA TYPES:
 */ 
 //      String Data Type:
           var a = 'stirng';
  
 //      NUMBER DATA TYPE:
           var b = 1;
  
 //      BOOLEAN DATA TYPE:
           var c = true;
           var d = false;
  
 //      THE NULL:
           var d = null;
  
 //      THE UNDEFINED:
           var e = undefined;
  
 //      NAN:
           function num(x) {
               if (isNaN(x)) {
               return NaN;
           }
               return x;
       }
           console.log(num('2')) // expected output: "1";
           console.log('Not a number!'); // exected output: NaN
  
 //      THE SYMBLE DATA TYPE:
           var f = Symbol();
  
 // 2. OBJECT DATA TYPES
           var object = {}; // this creates an empty objefct literal;
           var obj = {
               key: "value" // this creates an object with a property of key and the string value in object.
           }
  
 // 3. ARRAY DATA TYPE:
       var array = [] // this creates an array with an empty array literal;
       var array = ['element 1', 'elment 2'] // this creates an array with 2 elements inside.
  
 //  4. COPY BY VALUE AND COPY BY REFERENCE
 
 
 //  1. COPY BY VALUE
       var a = 1 // assign 1 to 'a'
       var b = a // assign "b" to the value of "a"
  
       b = 10// assign 10 to 'b'
       console.log(a) // --> 13
 // 
 
 /* 2. COPY BY REFERENCE:*/
       var a = { c: 13 } // assign the reference of a new object to `a`
       var b = a // copy the reference of the object inside `a` to new variable `b`
       var c = 37 // modify the contents of the object `b` refers to
       console.log(a) // --> { c: 37 }
  