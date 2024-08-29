// Exercise 1

const foods = [];

console.log("Exercise 1:", foods);

// Exercise 2

foods.push("Pizza", "Cheeseburger");

console.log("Exercise 2:", foods);

// Exercise 3

foods.unshift("Taco");

console.log("Exercise 3:", foods);

// //Exercise 4

let favFood = foods[1];

console.log("Exercise 4:", favFood);

// Exercise 5

foods.splice(2, 0, "Tofu");

console.log("Exercise 5:", foods);

// Exercise 6

foods.splice(1, 1, "sushi", "cupcake");

console.log("Exercise 6:", foods);

// Exercise 7

let yummy = foods.slice(1, 3);

console.log("Exercise 7:", yummy);

// Exercise 8

let soyIdx = foods.indexOf("Tofu");

console.log("Exercise 8:", soyIdx);

// Exercise 9

let allFoods = foods.join(" -> ");

console.log("Exercise 9:", allFoods);

// Exercise 10

let hasSoup = foods.includes("soup");

console.log("Exercise 10:", hasSoup);

// Exercise 11

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

nums.forEach((oddNums) => {
  if (oddNums % 2) {
    odds.push(oddNums);
  }
});

console.log("Exercise 11:", odds);

// Exercise 12

const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach((arrNums) => {
  if (arrNums % 3 === 0) fizz.push(arrNums);
});
nums.forEach((arrNums) => {
  if (arrNums % 5 === 0) {
    buzz.push(arrNums);
  }
});
nums.forEach((arrNums) => {
  if (arrNums % 5 === 0 && arrNums % 3 === 0) fizzbuzz.push(arrNums);
});

console.log("Exercise 12:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);
