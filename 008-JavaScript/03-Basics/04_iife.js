/* Immediately Invoked Function Expressions (IIFE) :
   - Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are
     executed immediately after they are defined. They are typically used to create a local scope
     for variables to prevent them from polluting the global scope.

   - use cases : 	DB connection, API calls, private variables, module patterns.

   - syntax : (function() { ... })();
*/


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// The semicolon (;) after the first IIFE tells JavaScript that the first function execution is complete.
// This allows the second IIFE to be correctly parsed and executed.
// Always use a semicolon (;) after an IIFE to avoid unexpected issues.


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('hitesh')

/*  Explanation : The function is wrapped in parentheses (function() { ... }),
                  followed by () to immediately invoke it. */
                  

// chai()