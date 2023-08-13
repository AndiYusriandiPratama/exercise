// 1
const dataStudent = [
  {
    name: "tanjiro",
    email: "tanjiro@email.com",
    age: new Date("2016-02-04"),
    score: 86,
  },
  {
    name: "naruto",
    email: "naruto@email.com",
    age: new Date("2016-09-05"),
    score: 60,
  },
  {
    name: "luffy",
    gemail: "luffy@email.com",
    age: new Date("2016-08-02"),
    score: 55,
  },
  {
    name: "ichigo",
    email: "ichigo@email.com",
    age: new Date("2016-04-02"),
    score: 70,
  },
  {
    name: "conan",
    email: "conan@email.com",
    age: new Date("2016-03-06"),
    score: 90,
  },
];

function studentCekScore(students) {
  let sumData = dataStudent.length;
  let maxScore;
  let minScore;
  let averages;
  let total = 0;
  students.forEach((student, index) => {
    if (index === 0) {
      maxScore = student.score;
      minScore = student.score;
    }
    if (student.score > maxScore) {
      maxScore = student.score;
    }
    if (student.score < minScore) {
      minScore = student.score;
    }
    total += student.score;
  });
  averages = total / sumData;
  return {
    score: {
      height: maxScore,
      lowest: minScore,
      average: averages,
    },
  };
}

function cekAge(students) {
  let sumData = dataStudent.length;
  let maxAge;
  let minAge;
  let averages;
  let total = 0;
  students.forEach((student, index) => {
    if (index === 0) {
      maxAge = student.age;
      minAge = student.age;
    }
    if (student.age > maxAge) {
      maxAge = student.age;
    }
    if (student.age < minAge) {
      minAge = student.age;
    }
    total += student.age;
    console.log(total);
  });
  averages = (new Date() - total) / 31536000000 / sumData;
  console.log(averages);
  return {
    score: {
      height: (new Date() - maxAge) / 31536000000,
      lowest: (new Date() - minAge) / 31536000000,
      average: averages,
    },
  };
}
const resultScore = studentCekScore(dataStudent);
const resultAge = cekAge(dataStudent);
console.log(resultAge);

//2
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #total;
  #products;
  constructor() {
    this.#total = 0;
    this.#products = {
      data: [],
      qty: 0,
    };
  }

  add(product) {
    this.#products.data.push(product);
    this.#products.qty += 1;
    this.#total += 1;
  }

  showTotal() {
    return this.#total;
  }

  checkout() {
    return this.#products;
  }
}

const gitar = new Product("Gitar", 1000000);
const drum = new Product("Drum", 5000000);

const t = new Transaction();
t.add(gitar);
t.add(drum);
const totalTransaction = t.showTotal();
const checkout = t.checkout();

console.log({ totalTransaction, checkout });
