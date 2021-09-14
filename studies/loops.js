/**
 * 0. LOOPS
 * 
 * 1. Loops- are used in JavaScript to perform repeated tasks based on a condition
 *          Conditions typically return true or false when analysed. A loop will continue running until the defined condition returns false
 *          An operation is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter
 *          has reached a prescribed number.
 * 
 * 2. The 3 most common type of Loops are: For Loop, While loop and For...In Loop.
 * 
 * FOR LOOP: provides a concise way of writing the loop structure. Unlike a while loop, a for statement consumes the initialization, condition
 *           and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
 * 
 * For Loop Syntaxfor (<START CONDITION>; <STOP CONDITION>; [INCREMENTS]) {
 *                      <STATEMENT>
 *                  }
 *                  START CONDITON: The condition set to tell your loop where to begin.
 *                  STOPPING CONDITION: The condition set to tell when your loop to stop (based on boolean value)
 *                  INCREMENT: The command to tell how to move per iteration.
 */
     //Example of a for loop counting forward. Here we will count the numbers from 1 to 10 and print it on the console:
    for(var i = 1; i <= 10; i++){
    console.log(i); // will print --> 1 2 3 4 5 6 7 8 9 10 //to the console
    }
    //This is an example of looping backwards
    for(var i = 10; i >= 1; i--){
    console.log(i); // will show on the console 10 9 8 7 6 5 4 3 2 1
    }
 
 /* 
 * 3. Initialization condition: Here, we initialize the variable in use. It marks the start of a for loop. An already declared variable can be
 *                              used or a variable can be declared, local to loop only.
 * 
 * 4. Testing Condition: It is used for testing the exit condition for a loop. It must return a boolean value. It is also an Entry Control Loop
 *                          as the condition is checked prior to the execution of the loop statements.*
 * 
 * 5. Statement execution: Once the condition is evaluated to true, the statements in the loop body are executed.
 *      
 *    Increment/ Decrement: It is used for updating the variable for next iteration.
 * 
 * 6. WHILE LOOP: is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be
 *                thought of as a repeating if statement.
 *  
 *                  1. It starts with the checking of condition. If it evaluated to true, then the loop body statements are executed otherwise first statement
 *                  following the loop is executed.
 * 
 *                  2. Once the condition is evaluated to true, the statements in the loop body are executed. Normally the statements contain an update value 
 *                     for the variable being processed for the next iteration.
 * 
 *                  3. When the condition becomes false, the loop terminates which marks the end of its life cycle.
 */
 
  //   7. Here is an example of a while loop printing 1 to 10 on the console:
    var i = 1;
    while (i <= 10){
    console.log(i); // will print 1 2 3 4 5 6 7 8 9 10 on console;
    i++; // this also means the same as i = i + 1;
    }

 
 
 /* 
 * 8.  FOR...IN LOOP: can be used to iterate over the items within an iterable object. for...in loops are useful if we want to run a certain block of code based
 *                    on the number of attributes in an object, or items in an array.
 * 
 *      For...In Loop Syntax:
 *               for (<VARIABLE> in <OBJECT>) {
 *               <STATEMENTS>
 *       }
 */
    function student(property, object){
    var person = {"name":"Jonathan","age":27};
        for (property in person) {
	        console.log(property,person[property]);
    }
                //name Jonathan
                //age 27
    }
 /*
 * 
 * 
 * 
 * 
 * 
 */