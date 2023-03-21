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

// interface

interface User {
  name: string;
  email: string;
}

class userInfo {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user1: User = new userInfo("vishal", "vishal@gmail.com");

console.log(user1.email);

// function signature

//example 1
let greeting: (a: string, b: string) => void; //in bracket you defining number of argument that function will take,there data type
// and function return type. here is void means nothing
greeting = (name: string, message: string): void => {
  console.log(`${message},${name}`);
};

greeting("ashish", "Halo");

//example 2
let car: (name: string, year: number) => string; // here i specified return type should be string

car = (name: string, year: number): string => {
  return `Your name is ${name} and model year is ${year}`;
};

console.log(car("BMW", 2023));

//Querying the Document

const atag = document.querySelector("a")!; //! it means that you saying it never will be null or undefined "!" this knows as definite assignment operator

console.log(atag);

const input1 = document.querySelector("#form1"); // type Assertions

console.log(input1);

// Generic

const addPlace = (obj: Object) => {
  let place = "Ahmadabad";
  return { ...obj, place };
};

let person1 = addPlace({ name: "raj", age: 12 });

// console.log(person1.name);    This will give an error because we not specified return type and it does not know what properties object has.

// TO upgrade that we use generic

// METHOD 1
const pincode = <T extends Object>(obj: T): T => {
  let pincode = "312020";
  return { ...obj, pincode };
};

let newAddress = pincode({ stree: 14, landMark: "ramnagar" });

console.log(newAddress);
console.log("Land Mark:", newAddress.landMark);

// METHOD 2 USING INTERFACE

interface DocStore<T> {
  DocId: number;
  DocName: string;
  DocDate: T;
}

const doc: DocStore<object> = {
  // Hear i can specified what should be the type of property
  DocId: 1,
  DocName: "Bill Record",
  DocDate: { day: 12, month: 2, year: 2013 },
};

const isObj = <T>(a: T): boolean => {
  return typeof a == "object" && !Array.isArray(a) && a !== null;
};

console.log(isObj(true));
console.log(isObj([1, 2, 3]));
console.log(isObj({ a: 12 }));

//never
let outNever: number & string; // number and string cannot be come together

// utility Type

/*
  1) partial:- partial allows us to make all properties on an object optional.
  2)pick:- pick allows us to select one or more properties from an object
*/

//partial

interface Starship {
  name: string;
  enableHyperJump: boolean;
}

// let FalconShip: (id: number, shipInfo: Starship) => void;

let FalconShip = (id: number, shipInfo: Partial<Starship>) => {
  return { id, ...shipInfo };
};

FalconShip(1, { name: "falconShip" });
