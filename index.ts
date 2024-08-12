// export const testFunction = () => {
//   console.log("Hello world from typescript");
// };

// testFunction();

// variable with any
// var parent:any = 123

// variables with types
var x: number = 123;
var y: any = "test";
var z: boolean = false;

// example of function
function add(x: number, y: number): number {
  return x + y;
}

// const let var
// let total: number = add(5, 7);
// total = 5
// console.log(add(5,7));

// type assertions
// x = (y as string).length;
// console.log("x is: " + x);

// Array
// const stringArray: string[] = [];
// var myArray = new Array(10);

// stringArray.push("Jake");
// stringArray.push("Mike");

// myArray.push("Jose")

// console.log(stringArray);

// enum
// enum Direction {
//   Up = 255,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Right);

// interface
interface DogInterface {
  name: string;
  breed: string;
  eat?: (food: string) => void;
}

class Dog implements DogInterface {
  name: string;
  breed: string;
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
  eat = (food: string) => {
    console.log(`${this.name} the ${this.breed} is eating ${food}`);
  };
}

const dog = new Dog("Buddy", "Labrador");
// dog.eat("kibble");

const dog2: DogInterface = {
  name: "Scooby Doo",
  breed: "Great Dane",
};
// console.log(dog2);

const dog3 = new Dog("Snoopy", "Beagle");

let dogArray: DogInterface[] = [];

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

export const addDog = (data: DogInterface) => {
  dogArray.push(data);
};

addDog({
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
var tuple: (string | number)[] = [123, "abc"];

var names: string[] = [];
const addName = (inputName: string) => {
  names.push(inputName);
  displayNames();
};

export const displayNames = () => {
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
