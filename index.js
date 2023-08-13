// function staicase(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       process.stdout.write(" ")
//     }
//     for (let k = 0; k < i; k++) {
//         process.stdout.write("#")
//     }
//     process.stdout.write("\n");
//   }
// }

// console.log(staicase());

// function compareTriples(a, b) {
//   let nilaiA = 0;
//   let nilaiB = 0;
//   for (let i = 0; i < 3; i++) {
//     if (a[i] > b[i]) [nilaiA++];
//     if (a[i] < b[i]) {
//       nilaiB++;
//     }
//   }
//   return [nilaiA, nilaiB];
// }

// function gradingStudents(grades) {
//     for ( let i = 0; i < grades.length; i++) {
//         if ((grades[i] >= 38) && ((((grades[i] % 5) == 3) || ((grades[i] % 5) == 4)))) {
//             grades[i] = grades[i] + (5 - grades[i] % 5)
//         }
//     }
//     return grades;

// }

let arr = [
  "so**me %$of $y(o)u m%$ay% @d#@ie*",
  "bu&t% its o^nly s0ac#rifice i@am wil(ling) t$o ma*&ke",
];
for (let i = 0; i < arr.length; i++) {
  let newArr = arr[i].split("");
  for (let j = 0; j = newArr.length; j++) {
    let replace = newArr[j];
    console.log(replace);
  }
  console.log(newArr);
  break;
}
console.log(arr);


function clear_sentence(arr) {
  let strToarr = arr?.toString()
 let replace = strToarr?.replace(/[@#$%^&*()_+"';/.`~/.;'{}><:-]/g, "")
 let result = replace?.split(",")
 return result
}

console.log(clear_sentence(['so**me %$of $y(o)u m%$ay% @d#@ie*',"bu&t% its o^nly sac#rifice i@am wil(ling) t$o ma*&ke"]
))
