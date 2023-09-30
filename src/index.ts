console.log("Hi, mazen ** from TypeScript");

console.log("==========================");

// ============Type Annotation===============
let username: string = "mazen"
let email: string = "mazenmostafa047@gmail.com"
let age: string | number = 22 || "22"

// email = 10 Error type number is not assignable to string

age = "22"

console.log({
    username,
    email,
    age
});
console.log("==========================");

// ============Type Annotation With Arrays============

let stringArray: string[] = ["Word1", "Word2", "Word3"]


let numberArray: number[] = [+false, +true, 2, 3]


let combinedArray: (string | number | boolean)[] = ["Word1", "Word2", 20, false, 5, true]


let mixedArr: (string | number | boolean | (string | number)[])[] = ["mazen", 22, true, ["male", 170]]

for (const item of stringArray) {
    console.log(item);

}
console.log("==========================");

for (const item of numberArray) {
    console.log(item);

}
console.log("==========================");
for (const item of combinedArray) {
    console.log(item);

}

console.log("==========================");
for (const item of mixedArr) {
    console.log(item);

}