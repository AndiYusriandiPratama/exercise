// 1
const number = 5;
let value = 1;

for (let i = 0; i < number; i++) {
  let s = "";
  for (let j = 0; j <= i; j++) {
    s += value++ + " ";
  }
  console.log(s);
}

// 2
function fizzBuzz(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) answer.push("FizzBuzz");
    else if (i % 3 == 0) answer.push("Fizz");
    else if (i % 5 == 0) answer.push("Buzz");
    else answer.push(i.toString());
  }

  return answer;
}

console.log(fizzBuzz(25));

// 3
const calculateBMI = (w, h) => {
  let BMI = w / (h / 100) ** 2;
  if (BMI < 18.5) {
    return `less weight`;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25.0 && 29.9) {
    return `overweight`;
  } else if (BMI >= 30.0 && BMI <= 39.9) {
    return ` very overweight`;
  } else {
    return `obesity`;
  }
};

// 4
function checkArr() {
  let Arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
  let it = Arr.length;
  for (let i = 0; i < it; i++) {
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[j] % 2 === 1) {
        Arr.splice(j, 1);
        break;
      }
    }
  }
  return Arr;
}
console.log(checkArr());
