console.log("JAI SIYA RAM JI");
const name = "Mike";
const ask = "how are you?, micheal";
const num = [2, 4, -6, 8, 5, 9, 11, 0, 13, 1, 7, 8, 1, 0, -13, 2];
const nums = [2, 4, 2, 2, 2, 3];
const digit = 12321;
const even = [2, 4, 6, 10, 12];

// Find duplicate number
function findDuplicate(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  let seen = new Set();
  let duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return [...duplicates];
}

// console.log(findDuplicate(num));

// Find longest word in string
function longestWord(str) {
  if (typeof str !== "string" || str.trim() === "") {
    throw new Error("Input must be a non-empty string");
  }

  const words = str.match(/\b\w+\b/g);

  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// console.log(longestWord("how are you??, chatGPT!"));

// Reverse words in sentence
function reverseWords(str) {
  if (typeof str !== "string" || !str.trim()) {
    throw new Error("Input must be a non-empty string");
  }

  return str
    .trim()
    .split(/\s+/) // handles multiple spaces, tabs, newlines
    .reverse()
    .join(" ");
}
// console.log(reverseWord(ask));

// Move all zeros to end
function moveZerosToEnd(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const nonZeros = [];
  const zeros = [];

  for (const item of arr) {
    if (item === 0) {
      zeros.push(item);
    } else {
      nonZeros.push(item);
    }
  }

  return [...nonZeros, ...zeros];
}

// Count frequency of elements
function frequency(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const frequencyMap = Object.create(null);

  for (const item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  }

  return frequencyMap;
}

// console.log(frequency(num));

// Find union of arrays
function union(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Input must be an array");
  }

  let uniSet = new Set(arr1);

  for (let item of arr2) {
    uniSet.add(item);
  }

  return [...uniSet];

  // return [...new Set([...arr1, ...arr2])];
}

// console.log(union(num, even));

// Find intersection of arrays
function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Input must be an array");
  }
  const set2 = new Set(arr2);
  const result = [];

  for (const item of arr1) {
    if (set2.has(item)) {
      result.push(item);
      set2.delete(item); // ensures uniqueness
    }
  }

  return result;
}

// console.log(intersection(num, even));

// Find all pairs with sum = X
function pair(arr, target) {
  if (!Array.isArray(arr) || typeof target !== "number") {
    throw new Error("Input must be an array and target must be a number");
  }

  const result = [];

  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[j] + arr[i] === target) {
        result.push([arr[j], arr[i]]);
      }
    }
  }

  return result;
}

// console.log(pair(num, 12));

// Find missing number in array

// Rotate array by K steps
