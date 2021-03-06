//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return (Object.keys(object).join(' '));
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var myArry = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            myArry.push(object[key]); 
        }
    } 
    return (myArry.join(' '));
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //I: {1 arg}
    //O:
    //C:
    //E:
    if(Array.isArray(collection)) {
    return ("array");
} else {
    return ('object');
}

}


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //I: {1 string}
    //O: return the first letter of that string capalized
    //C:
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //I: {String of words}
    //O: Return string will all words capitalized
    
    /* I am using split in order to get the words,
    *put them into an array and loop 
    *over it in order to print them
    */
    var arr = string.split(" ");
    var arr1 = []; 
        for (var i = 0; i < arr.length; i++) {
            arr1.push(arr[i][0].toUpperCase() + arr[i].slice(1)); /* --> pushing the capitalize words method onto all of the words
                inside my str array*/
    }
        return arr1.join(' '); // ---> Joining all words with spaces
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message /////////////////////////1/////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
   var str = object.name;
   var welcomeName = str[0].toUpperCase() + str.slice(1);
        return "Welcome " + welcomeName + "!"; //---->Space after welcome to include the name
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name;
    var species = object.species;
    var name2 = name[0].toUpperCase() + name.slice(1);
    var species2 = species[0].toUpperCase() + species.slice(1);
        return `${name2} is a ${species2}`;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises === undefined || !object.noises.length) {
        return "there are no noises";
    } else {
        return object.noises.join(" ");
    }
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //I:{2 parameters 1 string of words and 1 word
    //O: return true if word is in string of wrods/ false otherwise
    //C: Must loop through the string of words
    /* I am using split in order to get the words,
    *put them into an array and loop 
    *over it in order to print them
    */
    var string = string.split(' ');
    for(var i = 0; i < string.length; i++) {
        if (string.includes(word)) {
            return true;
        } else return false;
        
    }
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if (object.friends !=  undefined) {
    for (var i = 0; i <= object.friends.length; i++) {
        if(name === object.friends[i]) {
            return true;
            }
         }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(name !== array[i].name && array[i].friends.indexOf(name)) {
         arr.push(array[i].name);
             }
        }
        return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        delete object[array[i]];
        }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var returnArr = [];
    for (var i = 0; i < array.length; i++) {
        if(!returnArr.includes(array[i])) {
            returnArr.push(array[i]);
        }
    
    }
    return returnArr;
    
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}