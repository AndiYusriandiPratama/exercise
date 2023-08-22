var sumIt = 1;
var subtractIt = 2;
var multiplyIt = 3;
var divideIt = 4;
var square = 5;
var squareRoot = 6;
var squareRoot3 = 7;

var operatorOpt = prompt(`Select operator : 
    1.Penjumlahan
    2.Pengurangan
    3.Pembagian
    4.Perkalian
    5.Pangkat 2
    6.Akar 2
    7.Akar 3
`);

function showResult(whatResult) {
  return alert(whatResult);
}

var doSomething = function (num1, num2) {
  if (operatorOpt == sumIt) {
    showResult("The Result is: "(num1 + num2));
  } else if (operatorOpt == subtractIt) {
    showResult("The result is: " + (num1 - num2));
  } else if (operatorOpt == multiplyIt) {
    showResult("The result is: " + num1 * num2);
  } else if (operatorOpt == divideIt) {
    showResult("The result is: " + num1 / num2);
  } else if (operatorOpt == square) {
    showResult("The result is: " + num1 ** 2);
  } else if (operatorOpt) {
    showResult("The result is: " + Math.sqrt(num1));
  } else if (operatorOpt == squareRoot3) {
    showResult("The result is: " + Math.cbrt(num1));
  } else {
    console.log("Tidak Menerima Input");
  }
};

// let kondisi = function () {
//   let twoNum = [1, 2, 3, 4];
//   for (let i = 0; i < twoNum; i++) {
//     if (operatorOpt === twoNum[i]) {
//       doSomething(
//         parseInt(prompt("Enter first number: ")),
//         parseInt(prompt("Enter second number: "))
//       );
//     } else {
//       doSomething(parseInt(prompt("Masukkan Nilai :")));
//     }
//   }
//   return twoNum;
// };

// kondisi();

doSomething(
  parseInt(prompt("Enter first number: ")),
  parseInt(prompt("Enter second number: "))
);
