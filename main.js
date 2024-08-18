// assignment 1
let myNumbers = [1, 2, 3, 4, 5];

const [a, , , , e] = myNumbers;

console.log(a * e); // 5

//assignmnet 2
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

const [a2, b2, c2, [d2, e2, [f2, g2]]] = mySkills;

console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//assignment 3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let allArry = [arr1, arr2, arr3];
// const [[c3, ,], [b3, ,], [, a3]] = allArry;

let [, a3, , b3, , , c3, ,] = [...arr3, ...arr2, ...arr1]; // another solution

// the spread operator is a powerful tool for working with arrays and objects,
//  making it easier to handle multiple values and combine or manipulate them efficiently.

console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//assignment 4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {
  age: a4,
  working: w,
  country: c4,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// assignment 5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {
  title: t5,
  developer: d5,
  releases: {
    "Oath In Felghana": [u5, j5],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;

let o5 = Object.keys(game.releases)[0];
let a5 = Object.keys(game.releases)[1];

console.log(`My Favourite Games Style Is ${t5} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d5} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o5} It Released in ${u5} & ${j5}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim

console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// assignment 6
let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let friend = myFriends[chosen - 1];

const {
  title,
  age,
  available,
  skills: [, skill],
} = friend;
const availablity = available ? "Available" : "Not Available";
console.log(title);
console.log(age);
console.log(availablity);
console.log(skill);

// If chosen === 1
// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"
