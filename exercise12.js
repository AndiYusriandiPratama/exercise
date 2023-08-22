function titleToNumber(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}

console.log(titleToNumber(""));

// 2
function singleNumber(nums) {
  const set1 = new Set();
  for (i = 0; i < nums.length; i++) {
    if (set1.has(nums[i])) set1.delete(nums[i]);
    else set1.add(nums[i]);
  }
  for (let item of set1) {
    return item;
  }
}

let nums = [2, 2, 1, 1, 3];
console.log(singleNumber(nums));

// 3
function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    ++cnt[s.charCodeAt(i) - "a".charCodeAt(0)];
    --cnt[t.charCodeAt(i) - "a".charCodeAt(0)];
  }
  return cnt.every((x) => x === 0);
}

console.log(anagram("anagram", "nagaram"));

// 4
var climbStairs = function (n) {
  if (n == 1 || n == 0) return;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(1));

function stairway(n) {
  if (n < 4) {
    return n;
  } else {
    return stairway(n - 1) + stairway(n - 2);
  }
}

console.log(stairway(2));
console.log(stairway(3));
console.log(stairway(4));
console.log(stairway(5));
