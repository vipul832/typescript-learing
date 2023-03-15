"use strict";
//Installation setup idea
/*
    Step 1) Install ts using Command
    
    "npm install -g typescript".

    Step 2) To Set tsconfig file use command with roodDirectory and outputDirectory
    
    "npm tsc --init --rootdir src --outdir lib".

    Step 3) Create two folder of name src and lib. Inside src folder create a file of any name with extension .ts write the code and save it

    Step 4) Now to covert Typescript to javascript convert use command

    "npm tsc --watch"  // to watch tsc file and to update in js file
*/
const num = 12; // setting type of variable like number.
const Name = "vishal";
const age = 15;
let text; // by default it set to be any so, it will accept any value.
text = 1;
console.log("type of text:", typeof text);
text = "sdfs";
console.log("type of text:", typeof text);
console.log(num, Name, age, text);
console.log("type of text");
// object
const person = {
    name: "amit",
    age: 12,
};
console.log("person name", person.name);
//tuple
let role;
role = [12, "stag"];
// enum
var user;
(function (user) {
    user[user["ADMIN"] = 0] = "ADMIN";
    user[user["DEVELOPER"] = 1] = "DEVELOPER";
    user[user["CLIENT"] = 2] = "CLIENT";
    user[user["ENDUSER"] = 3] = "ENDUSER";
})(user || (user = {}));
console.log(user.ADMIN);
let num1; // num1 can take both number or string as a input;
num1 = 12;
num1 = "sdfa";
