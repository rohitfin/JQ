console.log("JAI SIYA RAM");
// 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
const name = "Mike"
const ask = "how are you?, micheal"
const num = [2, 4, -6, 8, 5, 9, 11, 0, 13, 1, 7, 8, 1, 0, -13, 2];
const digit = 12321;
const even = [2, 4, 6, 10, 12]


// Find duplicate number
function findDuplicate(arr){
    let output = [];
    let dup = [];

    for(let i = 0; i < arr.length; i++){
        if(output.includes(arr[i])){
            dup.push(arr[i]);
        }else {
            output.push(arr[i]);
        }
    }
    return dup;
}
// console.log(findDuplicate(num));

// Find longest word in string
function longestWord(str){
    let arr = str.split(" ");
    let word = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= word.length){
            word = arr[i];
        }
    }
    return word;
}
// console.log(longestWord(ask));

// Reverse words in sentence
function reverseWord(str){
    let output = [];
    let arr = str.split(" ");

    for(let i = arr.length - 1; i >= 0; i--){
        let txt = arr[i];
        if(txt.length > 1){
            let chunk = [];
            for(let j = txt.length - 1; j >= 0; j--){
                chunk += txt[j]
            }
            output += ' '+ chunk;
        }else {
            output += arr[i];
        }
    }
    return output;
}
// console.log(reverseWord(ask));

// Move all zeros to end
function zerosEnd(arr){
    let output = [];
    let zeros = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zeros.push(arr[i]);
        }else {
            output.push(arr[i]);
        }
    }
    return [...output, ...zeros]
}
// console.log(zerosEnd(num));

// Count frequency of elements
function frequency(arr){
    let output = {}
    for(let i = 0; i < arr.length; i++){
        output[arr[i]] = output[arr[i]] ? output[arr[i]] + 1 : 1;
    }
    return output;
}
// console.log(frequency(num));

// Find union of arrays
function union(arr1, arr2){
    let output = [];
    let singleArr = [...arr1, ...arr2];
    for(let i = 0; i < singleArr.length; i++){
        if(!output.includes(singleArr[i])){
            output.push(singleArr[i])
        }
    }
    return output;
}
// console.log(union(num, even));

// Find intersection of arrays
function intersection(arr1, arr2){
    let output = [];

    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            output.push(arr1[i])
        }
    }
    return output;
}
// console.log(intersection(num, even));

// Find all pairs with sum = X
function pair(arr, val){
    let n = arr.length;
    let val1 = arr[0];
    let val2 = 0;
    let isResolved = false;

    for(let i = 0; i < n; i++){
        let a = arr[i];
        for(let j = 0; j < n - 1; j++){
            let b = arr[j] + a;
            if(b === val){
                val1 = a;
                val2 = arr[j];
                isResolved = true;
                break;
            }

        }
        if(isResolved){
            break;
        }
        
    }
    return { val1, val2}
}
// console.log(pair(num, 12));

// Find missing number in array
function findMissingNumber(arr, n) {
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
}
function findMissing(arr){
    let diff = arr[1] - arr[0]; // expected difference

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i+1] - arr[i] !== diff){
            return arr[i] + diff;
        }
    }
}

// console.log(findMissing(even, 6));

// Rotate array by K steps






