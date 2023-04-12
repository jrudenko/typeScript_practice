var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
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
var anything;
anything = -20;
anything = 'Text';
anything = {};
// --unknown--
var some;
some = 'Text';
var str;
if (typeof some === "string") {
    str = some;
}
// --Tuple--
var person;
person = ['Max', 21];
// --Enum--
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Page is loading');
}
if (page.load === Load.READY) {
    console.log('Page loaded');
}
// --Union Type--
var union;
union = 2;
union = "Julia";
// --Literal Type--
var literal;
literal = 'enable';
literal = 'disable';
//
// function showMessage(message) {
//   console.log(message);
// }
// function calc(num1, num2) {
//   return num1 + num2;
// }
// function customError() {
//   throw new Error('Error');
// }
