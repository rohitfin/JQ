console.log(name);
var name = "Jai Ram Ji";


/*
How many types of time complexity?
O(n) time complexity
*/

var containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) {
    throw new Error("Input must be an array");
  }

  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
};

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let first = s.split("").sort().join("");
  let sec = t.split("").sort().join("");

  return first === sec;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let f = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let s = nums[j];
      if (f + s === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// console.log(
//     twoSum([2,7,11,15], 9)
// );
// console.log(
//     twoSum([3,2,4], 6)
// );
// console.log(
//     twoSum([3,3], 6)
// );

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
var groupAnagrams = function (strs) {
  const obj = new Map();

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");

    if (!obj.has(key)) {
      obj.set(key, []);
    }

    obj.get(key).push(key);
  }

  return [...obj.values()];
};
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]
 
Real-Life Example
    Imagine a classroom attendance list:
        A, A, A, B, B, C
    Count:
        A → 3
        B → 2
        C → 1
    "Who are the top 2 students with the highest attendance?"
        Answer: A, B
    This problem is exactly the same.
*/
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let item of nums) {
    let key = item;

    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      map.set(key, map.get(key) + 1);
    }
  }

  let arr = [...map];
  let srt = arr.sort((a, b) => b[1] - a[1]);
  let slc = srt.slice(0, k);
  let result = slc.map((item) => item[0]);

  return result;
};
// console.log(topKFrequent([4, 4, 1, 5, 5], 2));
// console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([1], 1));

const encode = function (strs) {
  let result = "";

  for (const word of strs) {
    result += word.length + "#" + word;
  }

  return result;
};
// console.log(
//     encode(["hello", "world"])
// );

const decode = function (str) {
  let output = [];
  let getWord = (txt) => {
    let hashPosition = txt.indexOf("#");
    let digit = txt.slice(0, parseInt(hashPosition));

    let word = txt
      .split("")
      .splice(hashPosition + 1, digit)
      .join("");
    if (word.length != digit) throw new Error("Not proper");
    output.push(word);
    let leftWord = txt.split(digit + "#" + word).join("");
    if (leftWord && leftWord.indexOf("#")) {
      getWord(leftWord);
    }
  };
  getWord(str);

  return output;
};
const decode2 = function (str) {
  const result = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const len = parseInt(str.slice(i, j));
    const word = str.slice(j + 1, j + 1 + len);
    result.push(word);
    i = j + 1 + len;
  }
  return result;
};
const decode3 = function (str) {
  const output = [];
  const helper = (txt) => {
    if (!txt) return;
    const hashIndex = txt.indexOf("#");
    const len = parseInt(txt.slice(0, hashIndex));
    const word = txt.slice(hashIndex + 1, hashIndex + 1 + len);
    output.push(word);
    const remaining = txt.slice(hashIndex + 1 + len);
    helper(remaining);
  };
  helper(str);
  return output;
};
// console.log(decode2("10#worldsssss6#hellow5#world"));

/*
Given an array of integers, return a new array where each element at index i is the product of all elements in the array except nums[i].
Example:
Input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]
*/

var productExceptSelf2 = function (nums) {
  let output = [];
  for (let j = 0; j < nums.length; j++) {
    let val = 1;
    for (let i = 0; i < nums.length; i++) {
      if (j !== i) {
        val *= nums[i];
      }
    }
    output.push(val);
    val = 1;
  }
  return output;
};

var productExceptSelf = function(nums) {
    const output = new Array(nums.length);

    output[0] = 1;

    // Prefix products
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }

    // Suffix products
    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;
};
// console.log(productExceptSelf([1, 2, 3, 4, 2]));
