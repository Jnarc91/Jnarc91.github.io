// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//Using . notation
_.identity = function(value) {
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (value) {
    if(Array.isArray(value)){
        return "array";
    } else if(typeof value === 'string') {
        return "string";
    }  else if(value === null) {
       return "null";
    }  else if(typeof value === "object") {
        return "object";
    }  else if(typeof(value) === "undefined"){
        return "undefined";
    }  else if(typeof(value) === "number"){
        return "number";
    }  else if(typeof(value) === "boolean"){
          return "boolean";
    } else if(typeof(value) === "function") {
        return "function";
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (array, number) {
    //I: array array, number number
    //O: return [] if array is not an array
    //C: 
    //E: number is negative, number > array.length
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== "number" || typeof number === 'undefined') {
        //if number is empty or NaN or is undefinded, return the first element in the array
        return array[0];
    }  else if (number < 0) {
        //if number is negative, return empty array
        return [];
    }  else if (number > array.length)  {
        return array;
        //if number > array length, return whole array
    } else {
        //otherwise, return the first number of elements in array
         return array.slice (0, number); 
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function (array, number) {
    //I:array array, number number
    //O: return [] if array is not an array
    //C:
    
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== "number" || typeof number === 'undefined') {
        //if number is empty or NaN or is undefinded, return the first element in the array
        return array[array.length -1];
    }  else if (number < 0) {
        //if number is negative, return empty array
        return [];
    }  else if (number > array.length)  {
        return array;
        //if number > array length, return whole array
    } else {
        //otherwise, return the first number of elements in array
         return array.slice(-number); 
    }
}
    
    





/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value){
    //I: array array, value value
    //O: return inded of 1st element taht === value
    //      return -1 if value is not in array
    //C: do not use .indexOf method
    //E: multiple occurances of val && val isnt an array
    for (var i = 0; i <= array.length - 1; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    

//return -1 if the value is not in the array
if (!array.includes(value)) {
    return -1;
    }
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
   //I: array, value
   //O: return true if array contains value
   //       return false otherwise
   //C: use ternary operators for control flow
   //E: ? is ternary
   //       value could be undefined
   
   
   //check if value is undefined
   if (typeof value === "undefined") {
       return "There is no value";
   } else {
       //using ?, return true or false if value is in array
       return array.includes(value) ? true : false;
   }
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //check if collection is an array
    // if so loop through the array
    //call the callback function on the value, index and collection
if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
        func(collection[i], i, collection);
    }
    //if collection is an object
        //use for in loop to gain access to each property
            //called the callback function to the value, key and collection
} else {
    for (var key in collection) {
        func(collection[key], key, collection);
     }
    }
}

var arr = [1, 2, 3];

_.each(arr, function(value, index, oll) {
    console.log(value, index); // how to call this function --> //1 2 3
})




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    //I: Array
    //O: Return new array of all elements from <array> w/ duplicates removed
    //C: Use _.indexOf() from above

    //create a new array to enter non duplicates
    var returnArr = [];
    //loop through given array to check each element for uniquness
    for(var i = 0; i < array.length; i++) {
        if(_.indexOf(returnArr, array[i]) === -1) {
            returnArr.push(array[_.indexOf(array, array[i])]);
        }
    }
    return returnArr;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function (array, func) {
   //I: array array, func function
   //O: return new aray of elements for which func returns treu
   //C: use function passed into _.filter
   //E: func returns not boolean
   
   //create new array to store the filtered elements
   var filteredElements = [];
   //loop through array to access each element
   for(var i = 0; i < array.length; i++) {
       //use func on each element
       //if func returns true, push elment to new array
       if(func(array[i], i, array) === true) {
           //must === true to cover edge-case that func does not return boolean t or f
            filteredElements.push(array[i]);
           
       }
       
   }
   // return new array of filtered elemtns
   return filteredElements;
} 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func) {
    //I: array array, func function
    //O: return new array of elements for whch func returns false
    //C: use function passed into
    var myElements = [];
    for (var i = 0; i <= array.length - 1; i++) {
        //use func on each element
        //if true, we need to push the element to the new array
        if(func(array[i],i,array) === false) {
            //must === true to cover eedge-case taht func does not return boolean
        myElements.push(array[i]);
        }
    }
    //return new array of filtered elements
    return myElements;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
    _.partition = function (array, func) {
        //create one array to hold and return values that func gives as truthy,
        //and for values taht func gives as falsy
        var truArr = [];
        var falArr = [];
        var myArr = [];
        for (var i = 0; i < array.length; i++){
           if(func(array[i], i, array)) {
               //if truthy, push current value to truArr
               truArr.push(array[i]);
           } else {
               //must be falsy, so push value to falArr
               falArr.push(array[i]);
           }
        }
        //after looping through func, return nw arrays as one array
        myArr.push(truArr, falArr);
        return myArr;
        
    }
    


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
    _.map = function (collection, func) {
        //.map function will return a new collection that will be modified by the func param
        
        //create new array to return new values modified by func
        var arrValues = [];
        
        //check if colleciton is an array
        if (Array.isArray(collection)) {
            //loop throug harray to access each element
            for(var i = 0; i < collection.length; i++) {
                //apply func to each element, and push into the new array
                arrValues.push(func(collection[i], i, collection));
            }
        //retrun new array
        return arrValues;
    } else {
        //must be object, so loop through it
        for(var key in collection) {
            //now we push func to the value and new array
            arrValues.push(func(collection[key], key, collection))
        }
        return arrValues;
        }
    }
    



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
    _.pluck = function(array, key){
    //I: array of objects, key property
    //O: return an array of values that are paired to key param
    //C: must use _.map()
    
    //map() will take collection and func and return the array modified by func
    //The modefication will return value of key and func in map takes args (collection[i], i, collection)
    function getKeyValue(arrayElement) {
        return arrayElement[key];
    }
    // return an array of values that are paired to key param using _.map()
    return _.map(array, getKeyValue);
    
    
    }
    

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

    _.every = function(collection, func) {
    //I: collection arraay, func function
    //O: {boolean}
    //C:
    //E:if not boolean return true for thruthy value, or false for falsy/
    //func may not be a function
    
    if(func === undefined) {
        //iterate through collection and test the element
        for (var i = 0; i < collection.length; i++) {
            //test elemtn to be false
            if(collection[i] === false) {
                //if element is false then return false
                return false;
            }
        }
        //else return true
        return true;
    }
    //check if collection is an array
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            //check if func returns boolean
            if (!func(collection[i], i, collection)) {
                return false;
            }
        }
        return true;
    }
    //check if current value, current key, <collection> is equal to the object
    else if (typeof collection === 'object') {
        for (var key in collection) {
            //check if returns value to the object
            if (!func(collection[key], key, collection)) {
                return false;
            }
        }
        //elese true;
        return true;
    }
  }
    
    
    
    
    
    
    
    
    
    
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
* 
*/
    _.some = function(collection, func) {
        //account for func being undefined
        //if undefined, return true id every elemnt is true -- false is falsy
        if(func === undefined) {
            //iterate through collection and test the lement
            for (var i = 0; i < collection.length; i++) {
                //test elemnt to false
                if (collection[i] === true) {
                    //if element is false then return false
                    return true;
                }
            }
            //else true
            return false;
        }
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if(func(collection[i], i, collection)) {
                    return true;
                }
            }
            //else false
            return false;
        }
        //check to see if collection is equal to the object and loop through keys
        else if(typeof collection === 'object') {
            for (var key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
            return false;
            
        }
    }




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

    _.reduce = function(array, func, seed) {
        //check if seed exist
        if (seed !== undefined) {
            //if it does exits, loop through the array
            for (var i = 0; i < array.length; i++) {
                //reassign seed to be the value of the functiojn call
                //call the func on seed, value, and index
                seed = func(seed, array[i], i);
        }
        return seed;
        
        } else {
            //if no seed is given, set seed to equal the first value of the array
            seed = array[0];
            //if it does, then loop through array
            for (var i = 1; i < array.length; i++) {
                seed = func(seed, array[i], i);
            }
        }
        return seed;
        }  



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
        _.extend = function(obj1, ...obj2) {
            var newObj = Object.assign(obj1, ...obj2);
            return newObj;
        }

    

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
