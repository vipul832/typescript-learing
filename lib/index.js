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
class userInfo {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const user1 = new userInfo("vishal", "vishal@gmail.com");
console.log(user1.email);
// function signature
//example 1
let greeting; //in bracket you defining number of argument that function will take,there data type
// and function return type. here is void means nothing
greeting = (name, message) => {
    console.log(`${message},${name}`);
};
greeting("ashish", "Halo");
//example 2
let car; // here i specified return type should be string
car = (name, year) => {
    return `Your name is ${name} and model year is ${year}`;
};
console.log(car("BMW", 2023));
//Querying the Document
const atag = document.querySelector("a"); //! it means that you saying it never will be null or undefined "!" this knows as definite assignment operator
console.log(atag);
const input1 = document.querySelector("#form1"); // type Assertions
console.log(input1);
// Generic
const addPlace = (obj) => {
    let place = "Ahmadabad";
    return Object.assign(Object.assign({}, obj), { place });
};
let person1 = addPlace({ name: "raj", age: 12 });
// console.log(person1.name);    This will give an error because we not specified return type and it does not know what properties object has.
// TO upgrade that we use generic
// METHOD 1
const pincode = (obj) => {
    let pincode = "312020";
    return Object.assign(Object.assign({}, obj), { pincode });
};
let newAddress = pincode({ stree: 14, landMark: "ramnagar" });
console.log(newAddress);
console.log("Land Mark:", newAddress.landMark);
const doc = {
    // Hear i can specified what should be the type of property
    DocId: 1,
    DocName: "Bill Record",
    DocDate: { day: 12, month: 2, year: 2013 },
};
const isObj = (a) => {
    return typeof a == "object" && !Array.isArray(a) && a !== null;
};
console.log(isObj(true));
console.log(isObj([1, 2, 3]));
console.log(isObj({ a: 12 }));
//never
let outNever; // number and string cannot be come together
// let FalconShip: (id: number, shipInfo: Starship) => void;
let FalconShip = (id, shipInfo) => {
    return Object.assign({ id }, shipInfo);
};
FalconShip(1, { name: "falconShip" });
