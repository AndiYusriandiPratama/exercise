// 1
const compare = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
const obj1 = { name: "Jhon", age: 30 };
const obj2 = { name: "Jhon", age: 30 };

console.log(compare(obj1, obj2));

// 2
const intersection = (obj1, obj2) => {
  let res = {};
  for (let o in obj1) {
    if (Object.hasOwn(obj2, o) && obj1[o] === obj2[o]) {
      res = { ...res, [o]: obj2[o] };
    }
  }

  return res;
};

console.log(intersection({ a: 1, b: 3, c: 5 }, { a: 1, c: 5, d: 2 }));
console.log(intersection({ a: 1, b: 3 }, { a: 1, c: 3 }));

// 3
const joinAndRemove = (arr1, arr2) => {
  const combine = [...arr1, ...arr2];
  const keys = new Set();

  const result = [];
  combine.forEach((item) => {
    const key = item.name;
    if (!keys.has(key)) {
      keys.add(key);
      result.push(item);
    }
  });
  return result;
};

joinAndRemove(
  [
    { name: "student 1", email: "student1@gmail.com" },
    { name: "student 2", email: "student2@gmail.com" },
  ],
  [
    { name: "student 1", email: "student1@gmail.com" },
    { name: "student 3", email: "student3@gmail.com" },
  ]
);

//4
const switchValToKey = (arr) => {
  let res = {};
  arr.forEach((obj) => {
    for (let key in obj) {
      res = { ...res, [obj[key]]: key };
    }
  });

  return res;
};

console.log(switchValToKey([{ name: "Nagi", age: `2 Bulan` }]));

//   5
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
