// 1
let number = 9;
let loopNumber;
for (let i = 1; i <= number; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// 2
let str = "sara";

let len = str.length;
for (let i = 0; i < len / 2; i++) {
  if (str[i] !== str[len - 1 - i]) {
    console.log("bukan polindrome");
  } else {
    console.log("ini polindrome");
    break;
  }
}

// 3
var cm, km;
cm = 1000;
km = c / 100000;
console.log(`${cm} cm adalah ${km} km`);

// 4
let angka = 1000;

let convertString = angka.toString();

let rupiah = "RP." + convertString + ",00";

console.log(rupiah);

// 5
const wrd = "Hello World";
let srcstr = "ell";
const splitwrd = wrd.split(srcstr).join("");
console.log(splitwrd);

// 6
const word = "belajar fullstack web development";
const split = word.split(" ");
let result = "";
for (let i = 0; i < split.length; i++) {
  splitwrd = split[i].split("");
  let pushWrd = "";
  for (let j = 0; j < splitwrd.length; j++) {
    if (j !== 0) pushWrd += splitwrd[j];
    else pushWrd += splitwrd[j].toUpperCase();
  }
  result += `${pushWrd} `;
}

console.log(result);

// 7
let sentence = "inI tUgAS kE kelAS fuLlStaCk";
let splitSentence = sentence.split("");

let reverse = "";
for (let i = 0; i < splitSentence.length; i++) {
  if (splitSentence[i] === splitSentence[i].toUpperCase()) {
    reverse += splitSentence[i].toLowerCase();
  } else {
    reverse += splitSentence[i].toUpperCase();
  }
}

console.log(reverse);

// 8
// dengan kondisional
let number2 = 13;
let newNumber2 = 99;

if (number > newNumber) {
  console.log(`${number} lebih besar dari ${newNumber}`);
} else {
  console.log(`${number} lebih kecil dari ${newNumber}`);
}

// dengan method Math
let number3 = 19;
let newNumber3 = 1;
let largest = Math.max(number3, newNumber3);

console.log(
  `diantara ${number3} dan ${newNumber3} yang lebih besar adalah ${largest}`
);

// 9
var x = 5;
var y = -1;
var z = 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}

// 9
const inputAny = [];
console.log(`result of number 4 is`);
switch (typeof inputAny) {
  case "string":
    console.log("1");
    break;
  case "number":
    console.log("2");
    break;
  default:
    console.log("3");
    break;
}

// 10
let input = "Hari ini adalah hari kamis terakhir di bulan Juli";
let changeInput = input.replace(/i/gi, "🥶");

console.log(`from ${input} => ${changeInput}`);
