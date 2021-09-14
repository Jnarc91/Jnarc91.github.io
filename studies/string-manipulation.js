/** 
 * 0. String Manipulation
 * 
 *       String manipulation (or string handling) is the process of changing, parsing, splicing, pasting, or analyzing strings.
 *      Typically, most programming languages provide a string data type that holds a sequence of characters.
 * 
 * 1. concat() - Combines the text of two or more strings and returns a new string.
 * 2. indexOf() – Returns the starting index of a substring within another string. 
 *              A –1 is returned if no match is found.
 * 
 * 3. charAt() – Returns the character at the specified location.
 * 
 * 4. lastIndexOf() - Returns the index within the string of the last occurrence of the specified value, or -1 if not found.
 * 
 * 5. match() - Used to match a regular expression against a string.
 * 
 * 6. substring() – A portion of a string is returned. 
 *                  A starting and ending location are passed to this function.
 * 
 * 7. replace() – Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
 * 
 * 8. search() - Executes the search for a match of a regular expression. If successful, search returns the index of the match inside the string. 
 *                  Otherwise, it returns -1.
 * 
 * 9. slice() - Extracts a section of a string and returns a new string.
 * 
 * 10. split() - Splits a string into an array of strings by separating the string into substrings.
 * 
 * 11. length() – The length of the string is returned as the count of the number of characters it contains.
 * 
 * 12. toLowerCase() – Converts the entire string to lower case.
 * 
 * 13. toUpperCase() – Converts the entire string to upper case.
 * 
 * In addition to the functions, there are numerous special characters that may be used to represent key effects. 
 * These characters include the following:
 * 
 * 1. \t – tab
 * 2. \b – backspace/delete
 * 3. \r – carriage return
 * 4. \n – newline
 * 5. \f – form feed
 */
 //14. Examples of String Manipulations//
 /** 1. Slice()(start, end)//
        const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        var citrus = FRUITS.slice(1, 3);
        // citrus => [ 'Orange', 'Lemon' ]

        // Negative values slice in the opposite direction
        var fromTheEnd = FRUITS.slice(-3, -1);
        // fromTheEnd => [ 'Lemon', 'Apple' ]
        
        
*/  
//2. Concat() //This method adds two or more strings and returns a new single string.//

        // let str1 = new String( "This is string one" ); 
        // let str2 = new String( "This is string two" ); 
        // let str3 = str1.concat(str2.toString());
        // console.log("str1 + str2 : "+str3)
        
       // output:
       // str1 + str2 : This is string oneThis is string two  
 /* 
  
    /*3. Split() The split method convers a string to an array by splitting the string up by a designated
 * character and entering these separte strings into ethe elements of a new aray. This is 
 * a sueful method to be able to manipulate individual words in a sentence by iterarting through that new array.
 * If the string you ware working on is a paragraph or a file, this manipulation
 * can be sued to cound words, find words, or delete words in them
*/
var sentence = "Hi, I am a sentecne";
var newArray = sentence.split(" ");
console.log(newArray); //---> ['Hi', 'I', 'am', 'a' 'sentence']
