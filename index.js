"use strict";
// export const testFunction = () => {
//   console.log("Hello world from typescript");
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayNames = exports.addDog = void 0;
// testFunction();
// variable with any
// var parent:any = 123
// variables with types
var x = 123;
var y = "test";
var z = false;
// example of function
function add(x, y) {
    return x + y;
}
class Dog {
    constructor(name, breed) {
        this.eat = (food) => {
            console.log(`${this.name} the ${this.breed} is eating ${food}`);
        };
        this.name = name;
        this.breed = breed;
    }
}
const dog = new Dog("Buddy", "Labrador");
// dog.eat("kibble");
const dog2 = {
    name: "Scooby Doo",
    breed: "Great Dane",
};
// console.log(dog2);
const dog3 = new Dog("Snoopy", "Beagle");
let dogArray = [];
// export const exampleIf = () => {
//     var cond = true;
//     if(cond === true) {
//     } else { // else if()
//     }
// }
// export const exampleCase = (value:string) => {
//     switch(value) {
//         case "firstCase":
//             break
//         case "secondCase":
//             break;
//         default:
//     }
// }
const addDog = (data) => {
    dogArray.push(data);
};
exports.addDog = addDog;
(0, exports.addDog)({
    name: "Barney",
    breed: "Sheepdog",
});
dogArray.push(dog);
dogArray.push(dog3);
// loops
// for loop
// for (let i = 0; i < dogArray.length; i++) {
//   console.log(dogArray[i]);
// }
// for(short hand)
// for (let d of dogArray) {
//   console.log(d);
// }
// for (index)
// for (let d in dogArray) {
//   console.log(dogArray[d]);
// }
// let i = 0;
// while (i < dogArray.length) {
//   console.log(dogArray[i]);
//   i++;
// }
// forEach
// dogArray.forEach((data:DogInterface) => {
//   console.log(data);
// });
// let dogName = dogArray.map((data: DogInterface) => data.name);
// console.log(dogName);
// const dogArray2 = dogArray.map((data: DogInterface) => {
//   if (data.name === "Buddy") {
//     return {
//       name: data.name,
//       breed: "askal",
//     };
//   }
//   return data;
// });
// console.log(dogArray);
// console.log(dogArray2);
// tuple
var tuple = [123, "abc"];
var names = [];
const addName = (inputName) => {
    names.push(inputName);
    (0, exports.displayNames)();
};
const displayNames = () => {
    let list = document.getElementById("myList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    names.forEach((element) => {
        let li = document.createElement("li");
        li.innerText = element;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayNames = displayNames;
//
