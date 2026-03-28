
/*
=> Garbage Collector
=> OOps concept
=> Memory Management and Garbage Collection, 
=> Memory Optimization, Algorithm and Data Structure
=> How to stop api call, memory leakage

*/
/*
- Reverse String & Integers 
- Palindrome :- given string is a palindrome (reads the same backward).
- Max Character :- Return the character that is most commonly used in a string
- Array Chunking :- Split an array into chunks of a specific length.
- Title Case :- Capitalize the first letter of every word in a string.
- Anagrams
    Write a function are_anagrams(str1, str2) that determines whether two strings are anagrams of each other.
        Two strings are anagrams if they contain the same characters in a different order.
        Ignore case and assume the input strings only contain alphabetical characters.
- Count Vowels 
- Fizz Buzz
    Question: Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, 
    and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
- Steps String Pattern 
- Pyramid String Pattern 
- Bonus - Spiral Matrix


tree shaking and custom element

unit testing, ngrx, rxjs
DSA basic - array and string manipulation

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

*/

var num = [2,21,7,11,15, 4, 2];
var target = 6;

var l1 = [2,4,3]
var l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

var res = function solve(l1, l2){

    let res = 0;
    let val1 = parseInt(l1.reverse());

    return val1;
}
// console.log( res(l1, l2) );





// var twoSum = function(nums, target){
//     let a = 0;
//     let b = 0;
//     let position =  []
//     let isBreak = false;
//     for(var i = 0; i < nums.length; i++){
//         a = nums[i];
//         for(var j = 1; j < nums.length; j++){
//             b = nums[j];
//             if(a + b == target){
//                 position.push(i, j);
//                 isBreak = true;
//                 break;
//             }
//         }
//         if(isBreak){
//             break;
//         }
//     }

//     return `[${position}] => ${a} and ${b}`;
// }
// console.log(twoSum(num, target));









































/**
var obj = [{1:'a',2:'b'},{1:'c',2:'d'},{1:'a',2:'b'}]
//output: [{1:'a',2:'b'},{1:'c',2:'d'}]


let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;
 
obj1.key = "new value";
obj2 = { key: "another value" };
 
// console.log(obj1.key, obj2.key, obj3.key);

 */
/**
 Flat Array
let num = [[1, 2], [3, [4, 5]]]; // output = [1, 2,3, 4,5];
function flatArray(arr) {
    // return arr.flat(Infinity);
    // return arr.toString().split(",").map((e)=> parseInt(e) )

    return arr.reduce((acc, val, ind, arr)=>{
        return Array.isArray(val) ? acc.concat( flatArray(val) ) : acc.concat(val);
    }, [])

}
let flatting = flatArray(num)
console.log(flatting);


let num = [[1, 2], [3, [4, 5]]]; // output = [1, 2,3, 4,5];
function flatten(arr) {
    let res = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item))
        } else {
            res.push(item);
        }
    }
    return res;
}

let output = flatten(num);
console.log(output);

*/

/**
- Reverse String & Integers 

function reversed(input) {
    if (typeof input !== "string" && typeof input !== "number") {
        throw new TypeError("Input must be a number or string");
    }
    return [...String(input)].reverse().join("");
}

console.log(reversed(123));     // "321"
console.log(reversed("Hello")); // "olleH"

function reverseString(str){
    let res = [];
    let toArray = str.split("");
    for(var i = 0; i < toArray.length; i++){
        res.unshift(toArray[i]);
    }
    return str.split("").reverse().join("");
    // return res.join("");
}

// console.log(reverseString('hello')); // "olleh"


function reverseInteger(num){
    const reversed = parseInt(
         Math.abs(num).toString().split("").reverse().join("")
    );
    return num < 0 ? -reversed : reversed;
}
console.log(reverseInteger(152)); // 251
console.log(reverseInteger(-123)); // 251
console.log(reverseInteger(1000)); // 251
 */

/**
- Palindrome :- given string is a palindrome (reads the same backward).
function isPalindrome(str){
    //  let reversed = str.split("").reverse().join("");
    // return str === reversed;
    
    let res = true;
    let reversed = str.split("").reverse().join("");
    for(var i = 0; i < str.length; i++){
        if(str[i] !== reversed[i]){
            return false;
        }
    }
    return res;
}
console.log(isPalindrome("racecar"));
*/

/**
- Max Character :- Return the character that is most commonly used in a string

function maxChar(str){
    let charMap = {}
    let maxRepeatedChar = '';
    let count = 0;
    let arr = str.split("");
    for(let char of str){ //let i = 0; i < arr.length; i++
        var key = char; // arr[i]
        // charMap[key] = ( charMap[key] || 0 ) + 1;
        maxCharObj[key] = maxCharObj[key] != undefined ? (maxCharObj[key] + 1) : 1;
        if( charMap[key] > count ){
            count = charMap[key];
            maxRepeatedChar = key;
        }
    }
    return maxRepeatedChar;
}
console.log(maxChar("javascript")); 

function maxChar(str){
    let arr = str.split("");
    let count = 0;
    let maxRepeatedChar = arr[0];
    for(var i = 0; i < arr.length; i++){
       let wordCount = arr.filter((ele) => ele == arr[i]);
        if(wordCount.length >= count){
            count = wordCount.length;
            maxRepeatedChar = arr[i]
        }
    }
    return maxRepeatedChar;
}
console.log(maxChar("javascript"));

 */

/**
- Array Chunking :- Split an array into chunks of a specific length.

function chunkArray(arr, size) {
    let res = [];
    let group = [];
    for (let i = 0; i < arr.length; i++) {
        group.push(arr[i]);

        if (group.length === size) {
            res.push(group);
            group = [];
        }
    }
    if (group.length > 0) {
        res.push(group);
    }
    return res;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

 */

/**
- Title Case :- Capitalize the first letter of every word in a string.
function titleCase(str){
    let res = '';
    let arr = str.split(" ");

    for(var i = 0; i < arr.length; i++){
        res += (arr[i][0]).toUpperCase() + arr[i].slice(1) + " ";
    }

    return res.trim();
}
console.log(titleCase('i love india'));
 */

/**
- Anagrams
    Write a function are_anagrams(str1, str2) that determines whether two strings are anagrams of each other.
        Two strings are anagrams if they contain the same characters in a different order.
        Ignore case and assume the input strings only contain alphabetical characters.

function are_anagrams(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    let charCount = {};

    for (let char of str1) {
        charCount[char] = charCount[char] != undefined ? charCount[char] + 1 : 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}
console.log(are_anagrams("Listent", "silentt")); // → True 


function isAnagrams(str, str2){
    let isAnagrams = false;
    let first = str.toLowerCase().split('').sort((a, b)=> a.localeCompare(b) ).join('');
    let second = str2.toLowerCase().split('').sort((a, b)=> a.localeCompare(b) ).join('');
    if(first === second){
        isAnagrams = true;
    }
    return isAnagrams;
}

console.log(isAnagrams('a gentleman', 'elegant man'));


 */

/**
- Count Vowels 

function count_vowels(str){
    let arr = str.toLowerCase();
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < arr.length; i++){
        if(vowels.indexOf(arr[i]) != -1){
            count++;
        }
    }
    return count;
}
console.log(count_vowels("OpenAI"));
 */

/**
 Fizz Buzz
Question:
Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizz_Buzz(n){
    for(let i = 1; i <= n; i++){

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}
fizz_Buzz(20);

 */

/**

  1
 234
56789
 
function pyramid(num){
    let pattern = "";
    let count = 1;
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num-i; j++){
            pattern += " ";
        }
        for (let y = 1; y <= i*2 - 1; y++) {
            pattern += count++;
        }
        pattern += '\n';
    }
    return pattern;
}
console.log( pyramid(3) );


1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

function pattern() {
  const rows = 5;
  let res = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      res += j;
    }
    res += "\n";
  }
  return res;
}
  

1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

function pattern() {
  const rows = 5;
  let pattern = "";
  let count = 1;
  for (let num = 1; num <= rows; num++) {
    for (let n = 1; n <= num; n++) {
      pattern += count + " ";
      count++;
    }
    pattern += "\n";
  }

  return pattern;
}
console.log(pattern());

 */

/*
Promise 



function p1(params){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("One Resolved, " + params);
            } else {
                reject("One Rejected!");
            }
        }, 3000)
    })
}


function p2(){
    return new Promise((resolve, reject)=>{
        console.log(2);
    setTimeout(()=>{
        if(!true){
            resolve("Two Resolved");
        }else {
            reject("Two Rejected!");
        }
    }, 4000)
})
}

function p3() {
    return new Promise((resolve, reject) => {
        console.log(3);
        setTimeout(() => {
            if (true) {
                resolve("Three Resolved");
            } else {
                reject("Three Rejected!");
            }
        }, 1000)
    })
}

function p4() {
    return new Promise((resolve, reject) => {
        console.log(4);
        setTimeout(() => {
            if (true) {
                resolve("Four Resolved");
            } else {
                reject("Four Rejected!");
            }
        }, 10000)
    })
}

function allPromise(){

    Promise.any([p1("Promise One"), p2(), p3()]).then(function(res){
        console.log("All Promise is resolved.");
        console.log(res);

    }).catch(function(error){
        console.log("Error ", error);
    })

}
// allPromise();



async function asyncFunc(){
    try{
        let proOne = await p1("Hellow");
        console.log(proOne);
    }catch(e){
        console.log("Error => ", e);
    }
}

// asyncFunc();

*/


/*
Closure
function outer(){
    let a = 10;
    return function inner() {
        a++;
        console.log(" a ", a);
    }
}
const first = outer();
first();
first();
first();
first();
*/

/*
call, apply, bind 

let per1 = {
    name: "Mike",
    runs : 20,
    address: { country: 'India', state: 'Maharashtra' },
    greet: function(){
        console.log(`Hello ${this.name}, how are you?`);
    }
}
let per2 = {
    name: "Virat",
}
per1.greet.call(per2);

function greet(greeting, punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`);
};

greet.call(per1, "Kaho", "wa")
greet.apply(per2, ["Hello", "!"]);

let bindFn = greet.bind(per2, "Hi", ".");
bindFn();
*/

/* Currying

function multiples(a){
    return function b(b){
        return function c(c){
            // console.log(a * b * c);
            return a * b * c;
        }
    }
}
let multi = multiples(10)(3);
// console.log(multi);
console.log(multi(2));
// console.log(multi);
// console.log(multi(3));
// console.log(multi());


*/


/*
 Debouncing / Throttling

let inputEle = document.getElementById("searchInput");
inputEle.addEventListener('keyup', debounce(onSearch, 500))
function debounce(callBack, delay){
    let timeout;
    return function(event){
        clearTimeout(timeout);
        console.log(event.target.value);
        timeout = setTimeout(()=>{
            callBack(event);
        }, delay)
        console.log("TimeOut ", timeout);
    }
}
function onSearch(e){
    console.log("Search Text ", e.target.value);
}


const throttling = function (callBack, stop) {
    let canProceed = true;
    return (e) => {
        if (canProceed) {
            canProceed = false;
            callBack(e);
        }
    }
}

const throttle = throttling(onSearch, 10000);

function onSearch(e){
    console.log("Search Input ", e.target.value);
}

let inputEle = document.getElementById("searchInput");
inputEle.addEventListener('keyup', throttle)
*/

