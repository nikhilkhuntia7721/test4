// FUNCTION STATEMENT
// this is a function statement
// this way of creating a function is called function statement
// function a(){
//     console.log("a is called");
// }

// FUNCTION EXPRESSION
// In javascript we can assign a function to a variable
// here function acts like a variable ,we are initializing b with a function

// var b = function(){
//     console.log("b is called");
// }


// In the below case it will print a called ,b called
// function a(){
//     console.log("a is called");
// }
// a();
// var b = function(){
//     console.log("b is called");
// }
// b();

// The major difference between function statement and function expression is hoisting
// in the below case console show a is called and b is not a function
// It is showing a error because b is not a function b will be treated like any other variable and it will be assigned undefined until the function is assigned to it
// a();
// b();
// function a(){
//     console.log("a is called");
// }
// a();
// var b = function(){
//     console.log("b is called");
// }
// b();


//FUNCTION DECLARATION
// Function Declaration is same as Function Statement 


// ANONYMOUS FUNCTION
// function without a name is called anonymous function
// anonymous function doesnt have their own identity
// it will show a syntax error because according to ES6 a function should have a name,it is similar to function statement but without a name
// anonymous functions are used in places where functions are used as values ,it means you can use it to assign it to some variable

// function(){

// }

// NAMED FUNCTION EXPRESSION
// named function expression is an anonymous function with a name
// here xyz()will give error saying xyz is not defined
// if we use xyz() like this then xyz() is not created in the outer scope but it is created as a local variable,we can access the function inside the expression

// var b = function xyz(){
//     console.log("b is called")
//     // console.log(xyz) we can do this
//     }
// b();
// xyz();    

// DIFFERENCE BETWEEN PARAMETERS AND ARGUEMENTS
// whatever we put inside the identifier or this label - function(param1,param2) so here 
// param1 and param2 are local variable inside this function ,so these are the parameters ,we cannot access it outside the function
// var b = function (param1,param2){
//     console.log("b is called")
//     }
    // here 1,2 are arguements which we pass through during function call
// b(1,2);  


// FIRST CLASS FUNCTIONS
// here we have passed an anonymous function as an argument while calling b ,which can be done 
// var b = function (param1){
//          console.log(param1);
// }
// b(function(){

// })
// we can also do this in the following way
// var b = function (param1){
//     console.log(param1);
// }
// function xyz(){
    
// }
// b(xyz);

// we can do this too
// here we are returning a function from a function
// this will also give the function body of xyz() as the output
// var b = function (param1){
//     return function xyz(){

//     }
// }
// console.log(b());
// it woul behave the same if it would have been let b or const b
// the ability of functions to be used as values and passed as an argument to another function and returned from the function is known as First Class Functions in javascript
// First class functions are also known as first class citizens


// ARROW FUNCTION
// arrow function came out in ES6 or Ecmascript2015

// -------------------ADD THE NOTES UPTO 20MINS----------------------------------------------------


// fetch()
// fetch() basically goes and request a API call,the fetch function returns a promise and we have to pass a callback function which
// will be executed once the promise has been resolved
// console.log("Start");
// setTimeout(function cbT(){
//     console.log("CB SetTimeout");
// },5000);

// callback function is executed once the data is fetched 
// fetch("https://api.netflix.com")
// .then(function cbF(){
//     console.log("CB Netflix")
// })

// console.log("End")

// callback function is stored somewhere and is pushed into the callback whenever timer gets out
// where will the function inside .then go,it will not go inside the callback,the microtask queue comes into the picture
// microstask queue is similar to callback stack queue but with higher priority
// whatever function comes inside microtask queue will be executed first then function inside callback stack will be executed
// so here the cbF() goes inside the microtask queue and as usual the task of event loop is to check 
// whether the callstack is empty or not if it is empty then it will start giving chances to function 
// inside  microtask and callback queue. 
// Now the situation is the data is fetched within a few miliseconds and the timer also expires(cbT())
// but under the fetch operation there are millions of lines of code still executing
// after the execution of these millions of lines of code the function inside microtask queue and callback queue are scheduled
// function inside microtask queue gets executed first
// o/p:
// Start
// End
// CB Netflix
// CB SetTimeout
// As microtask queue is given higher priority ll the function coming inside promise goes into the 
// microtask queue and there is something called mutation observer which keeps checking whether there is some mutation in the DOM tree or not
// if there is some mutation in the DOM tree it will execute some callback function
// callback functions from promises and mutationobserver goes inside microtask queue
// sometimes inside the microtask queue the microtask may create another microtask and thisn process may
// keep going on endlessly and the function inside callback may not even get a chance to execute and 
// this situation is called STARVATION of task inside callback queue
// SO THIS WAS ALL ABOUT THE POWER O FTHE BROWSER 


// POWER OF JS ENGINE
// Javascript is everywhere
// javascript can run inside browser ,server smart watch ,light bulb
// this is all possible because of javascript run time environment
// JS runtime environment is like a big container which has everything required to run javascript 
// Some of the things present inside it are the JS Engine ,API to conect it to 
// the outer server ,event loop,callback loop,callback queue , microtask queue....
// NodeJS is a javascript runtime environment that means it has everything required to run javascript code 
// JS Engine is not a machine but a normal program written in low level language V8 is written in C++
// JS Engine takes the human readable code as input this code now goes through three steps 
// PARSING
// COMPILATION 
// EXECUTION

// PARSING: During parsing the code we write is broken down into tokens
// for ex: let a =7,here let is one token,a is another ,7 is another,= also
// SYNTAX PARSER takes the code and converts it into an AST(Abstract Syntax Tree)
// astexplorer.net find the AST for const bedtJScourse = "Namaste Javascript"


// COMPILATION :Javascript has something called Just In Time compilation
// interpreter? compiler? is javascript interpreted language or compiled language?
// in case of interpretted language code is executed using interpretter
// here the code is executed line by line
// in the other hand in case of compiled based language code is first compiled line by line even before executing
// this code is compiled and a optimized version of the code is generated
// Incase of an interpretter the code is fast and in case of compiler we have higher efficiency
// Javascript can behave as a compiled language as well as an interpretted language
// Javascript engines can use a interpretter along with a compiler and that 
// makes it a JIT (Just In Time) compilation language
// JIT Compilation is like best of the both worlds(interpretter and compiler)
// after parsing the code we got the AST,AST goes into interpretter and the interpretter converts our high level code to byte code and the code moves to execution step and while it is doing so it takes the help of compiler to optimize the code as the interpretter executes the code line by line the compiler tries to optimize the code simultaneously as much as it can

// ----------------MARK AND SWEEP ALGORITHM---------------------------
// INLINING
// V8 BLOG (ignition interprette and turbofan compiler)
// COPY ELISION
// INLINE CACHING
// OFFICIAL V8 ALGORITHM
// GARBAGE COLLECTOR ORINOCO(uses mark and sweep algorithm)
// Javascript runtime environment is a container which has everything you need to run a javascript code (JS engine, API,Callback queuue,master queue ,event loop ,etc)



