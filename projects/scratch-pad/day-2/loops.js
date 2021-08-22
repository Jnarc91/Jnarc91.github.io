// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //I: {Array}
  //O: Array Values
  //C: Console.log
  //E: N/A
  for (var i = 0; i <= array.length; i++) {
    //Looping through the array's length for the vlaue of i
    console.log(array[i]);
  }

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //I: {Array}
  //O: Array Values Reveresed
  //C: Console.log the value of i reversed
  //E: N/A
  for (var i = array.length -1; i >= 0; i--) {
    //Looping through the array's length for the vlaue of i
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //I: {object}
  //O: an array with obj keys
  for (var key in object) {
    return Object.keys(object);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //I: object
  //O: console print keys
  for (var key in object) {
    console.log(key);
    
  // YOUR CODE ABOVE HERE //
  
  } 
}



/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var array = []
  for (var key in object) {
    return Object.values(object);
  
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
var myArr = [];
  for(var key in object) {
    myArr.push(object[key]);
   console.log(object[key]);
   
  }

  
  // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
    return Object.keys(object).length;
  }
  // YOUR CODE ABOVE HERE //

}




/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var myArr = [];
  for(var key in object) {
    myArr.push(object[key]);
  }
  for(var i = myArr.length - 1; i > -1; i --) {
    console.log(myArr[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
