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

const num: number = 12; // setting type of variable like number.
const Name: string = "vishal";
const age: number = 15;
let text; // by default it set to be any so, it will accept any value.

text = 1;
console.log("type of text:", typeof text);

text = "sdfs";
console.log("type of text:", typeof text);

console.log(num, Name, age, text);
console.log("type of text");

// object

const person: {
  name: string;
  age: number;
} = {
  name: "amit",
  age: 12,
};

console.log("person name", person.name);

//tuple

let role: [number, string];

role = [12, "stag"];

// enum

enum user {
  ADMIN,
  DEVELOPER,
  CLIENT,
  ENDUSER,
}

console.log(user.ADMIN);

//Aliases

type combine = number | string; // you can combine any two type and give and aliases name later on you can use as type in other variable

let num1: combine; // num1 can take both number or string as a input;

num1 = 12;

num1 = "sdfa";
