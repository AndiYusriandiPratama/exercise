// 1
let nowDay = new Date();
let today = nowDay.getDay();

function checkWhether(today) {
  if (today == 0 || today == 6) {
    console.log(`Today is a Weekend`);
  } else {
    console.log(`Today is a Weekday`);
  }
}

console.log(checkWhether());

// 2
function checkGCD(num1, num2) {
  while (typeof num1 !== "number" || typeof num2 !== "number") return false;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num2) {
    let gcd = num2;
    num2 = num1 % num2;
    num1 = gcd;
    console.log(gcd);
  }
  return num1;
}

let cek = checkGCD(12, 30);
console.log(cek);

// 3
function checkLCM(num1, num2) {
  let fpb = checkGCD(num1, num2);
  do {
    return Math.abs(num1 * num2) / fpb;
  } while (true);
}

console.log(checkLCM(12, 30));

// 4
function mostChar(str) {
  let counter = {};
  let strLow = str.toLowerCase();
  //  melooping strlow
  for (let char of strLow) {
    //  mencari jumlah tiap angka dengan memasukkan value char ke dalam counter
    counter[char] = counter[char] + 1 || 1;
    console.log(counter[char]);
  }

  let mostCount = 0;
  // membuat variabel penampung
  let mostChar = null;
  // looping nilai dari counter
  for (let key in counter) {
    if (counter[key] > mostCount) {
      mostCount = counter[key];
      mostChar = key;
    }
  }

  return mostChar;
}

console.log(mostChar("muhammad"));

// 5
function sort(str) {
  var sorted = str;
  //Selection sort
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length - 1; j++) {
      if (str[i] < str[j]) {
        str = swap(str, i, j);
      }
    }
  }
  return str;
}

console.log(sort("zaasfweqrouoicxzvjlmmknkniqwerpopzxcvdfaa"));

// 6
function sort(arr) {
  arr = arr.split("");
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join("");
}
console.log(sort("dcna", "rian", "manda"));

// 7
function multiDimension(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
    let row = 0;
    for (let j = 0; j < arr[i].length; j++) {
      row += arr[i][j];
    }
    result += row;
  }
  return result;
}

console.log(multiDimension([[1, 2, 3], [3, 4], [1], [4, 3, 5], [5, 6, 2, 6]]));

// 8

// 9

// 10
function getDays(month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(getDays(1, 2022));

// 11
function days_passed(dt) {
  var current = new Date(dt.getTime());
  var previous = new Date(dt.getFullYear(), 0, 1);

  return Math.ceil((current - previous + 1) / 86400000);
}

console.log(days_passed(new Date(2023, 7, 16)));

//  12
function age(birthdate) {
  const today = new Date();
  const age =
    today.getFullYear() -
    birthdate.getFullYear() -
    (today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate()));
  return age;
}

const birthdate = new Date(1996, 6, 1);
const ageValue = age(birthdate);
console.log(ageValue);
