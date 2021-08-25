/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'Amphibian';
animal['name'] = 'Spark';
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'Bark';
noises.push('Moo');
noises.unshift('Chirp');
noises[noises.length] = 'Run';
console.log(noises.lenth);
console.log(noises[noises.lenth-1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
animal.noises[noises.length] = 'Whimper';
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  You can access propeties on object
    Dot notation: object.property.
    Square brackets notation: object['property']
    Object destructuring: const { property } = object.
    
 * 2. What are the different ways of accessing elements on arrays?
 *      We can use bracket notation and array functions
 * *******************************************************************
 */
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Variable named animals
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
console.log(animals);

var dog = {
    species: 'dog',
    name: 'Skip',
    noises: ['growl', 'bark']
};

var cat = {
    species: 'cat',
    name: 'Hunter',
    noises: ['pur', 'hiss']
};

animals.push(dog);
animals.push(cat);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //Array structure//-----> This array structure is perfect for acceesing my list and manipulating it.
var friends = [];
function getRandom() {
    return Math.floor(Math.random() * animals.length);
}
friends.push(animals[getRandom()].name);
console.log(friends);
animal[friends] = friends;
duck.friends = friends;
dog[friends] = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}