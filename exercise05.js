// 1
function findValue(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(
    `nilai max dari arr adalah ${max} dan nilai terendah dari arr adalah ${min}`
  );
  return sum / arr.length;
}

console.log(findValue([3, 4, 5, 8]));

// 2
function concatStrArr(arr) {
  let comma = arr.slice(0, 2);
  let addComma = comma.join(", ");
  let and = arr.slice(1, 3);
  let addAnd = and.join(" and ");
  let joinAll = addAnd.slice(4);
  let all = addComma + joinAll;
  console.log(all);
}
concatStrArr(["hey", "rian", "manda"]);

// 3
function stringSplit(array) {
  let arr = [""];
  let str = 0;
  for (let i = 0; i < array.length; i++) {
    if (array.charAt(i) == " ") {
      arr.push(" ");
      str++;
    } else {
      arr[str] += array.charAt(i);
    }
  }
  return arr;
}

console.log(stringSplit("apakah saya sudah terbagi"));

// 4
function calculateArr(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }
  return result;
}

let a = [4, 3, 2, 1, 0];
let b = [16, 17, 18, 19, 20];
console.log(calculateArr(a, b));

//5
let BeforeAdd = [9, 8, 7, 6];
let afterAdd = (arr, num) => {
  if (arr.includes(num)) {
    return afterAdd;
  } else {
    return [...arr, num];
  }
};

console.log(afterAdd(BeforeAdd, 2));

// 6
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
