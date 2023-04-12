// const button = document.querySelector("button")! as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// let age:number;
// age = 50;
// let name: string;
// name = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty:null;
// empty = null;
// let notInitialize:undefined;
// notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => { return 100 + a };


// --any--
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// --unknown--
let some: unknown;
some = 'Text';
let str: string;
if (typeof some === "string") {
  str = some;
}
  
// --Tuple--
let person: [string, number]
person = ['Max', 21];

// --Enum--
enum Load {LOADING, READY};
const page = {
  load: Load.READY
}
if (page.load === Load.LOADING) {
  console.log('Page is loading');
}
if (page.load === Load.READY) {
  console.log('Page loaded');
}

// --Union Type--

let union: string | number;
union = 2;
union = "Julia";

// --Literal Type--

let literal: 'enable' | 'disable';
literal = 'enable';
literal = 'disable';

// Types for a function 
function showMessage(message:string) {
  console.log(message);
}
function calc(num1:number, num2:number) {
  return num1 + num2;
}
function customError():never {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}
