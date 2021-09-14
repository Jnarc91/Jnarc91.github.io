/**
 * 0. CONTROL FLOW
 * 
 * 1. 1. CONTROL FLOW: refers to the order in which a sequence of code is executed. Statements will execut
 *                      from top to the bottom. The statements inside your source files are generally executed from
 *                      top to bottom, in the order that they appear. Control flow statements, however, break up the flow of
 *                      execution by employing decision making program to conditionally execute particular blocks of code.
 * 
 * 2. Types of Control Flow statements are: Conditional Statements and Switch statements.
 * 
 * 3. CONDITIONAL STATEMENTS: control behavior in JavaScript and determine whether or not pieces of code can run.
 * 
 * Here is a example of a conditonal statement and its proper syntax:
 *   if (condition1) {
 *   // block of code to be executed if condition1 is true
 *
 *    } else if (condition2) {
 *   block of code to be executed if the condition1 is false and condition2 is true
 *
 *    } else {
 *    block of code to be executed if the condition1 is false and condition2 is false
 *
 * 
 * 4. IF STATEMENT: are used for the purpose of decision making; they evaluate the statement if the condition is true. To check if the given If condition
 *                  is satisfied, If Statement is executed; otherwise the condition is false to exit the If condition.
 */
 if(15 < 20) { //--> Since 15 is less than 20
     console.log('This line is executed');//--> "This line is executed"
 }
 if( 15 > 20) { //--> false since 5 is not greater then 20
     console.log('This line is executed');// --> This code block will not execute
 }
 /**
 * 5. ELSE IF: is another decision-making statement. It evaluates the Statement only if condition is true from several conditions, elseif statement can
 *              be used many times in a program; if the two conditions are false it means else Statement is executed.
 *
 * */
  var score = 65 ;
    if (score < 90){ // the beginning of a if statement, the statement will end on a boolean;
        console.log('Please try again!'); // will print on the console if it is before 12 and will stop if true;
    } else if (score === 90){ // if false it will go to the next condition;
        console.log('You Passed!'); // will print on the console if true and stop;
    } else if (score > 90 && score < 100 ){ // here is another condition, the if statement can contain as many else if statements you want;
        console.log('Almost Aced It!'); // will print on the console if true and stop;
    } else { // and if it doesn't meet any condition above, it will go to the else statement which is the last and will print if the above isn't true;
        console.log('You Failed'); // will print on the console if above conditions isn't met;

 
  
 // 6. ELSE STATEMENT: is the last on the list of an if else statement. When there is no more conditions else is used.
 var temp = 27;
        if (temp > 85) {                          // -> false
            console.log("It is a hot day");       // doesn't print this
        } else if (temp > 60) {                   // -> false
            console.log("It is a nice day");      // doesn't print this
        } else if (temp > 32) {                   // -> false
            console.log("It is a cold day");      // doesn't print this
        } else {                                  // all others were false, so do this
            console.log("It is a freezing day");  // -> prints this


 /* 7.  SWITCH CASE STATEMENT: is a control Statement, it is better than If else statements. To improve the readability o
 *                          a program multiple if else Statements can be replaced with Switch Statements. In Switch Case Statements
 *                          using the break statement will cause an immediate exit from switch statement as soon as the code under the code is executed.
 */
 
var trafficLightColor = "Red";
var driverDecision;
switch (trafficLightColor) {      // (trafficLightColor) = the given input value
    case "Green":                 // Green is not equal to Red
        driverDecision = "go";
        break;
    case "Yellow":                // Yellow is not equal to Red
        driverDecision = "slow down";
        break;
    case "Red":                   // Red is equal to Red
        driverDecision = "stop";  // execute this assignment statment
        break;                    // -> stop executing statements in the switch
    default:   //this executes only if no other case matches input expression
        driverDecision = "Treat intersection as a 4-way stop";
        break;
        } 
    }
}