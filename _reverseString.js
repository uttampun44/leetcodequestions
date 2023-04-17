// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseFirst(){
    let alphabet = ["h","e","l","l","o"];
    let startLeft = 0;
    let endRight = alphabet.length - 1;
   let newarr
    while(startLeft <= endRight){
        newarr = alphabet[startLeft];
        alphabet[startLeft] = alphabet[endRight];
        alphabet[endRight] = newarr;
        startLeft++;
        endRight--;
    }
    return alphabet
}
let reverseResult = reverseFirst()
console.log(reverseResult);

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// (0)1 complexity

function reverseSecond(){

    let words = ["H","a","n","n","a","h"];
    let left = 0;
    let right = words.length - 1;
    let reverse;
     
    // console.log(right)
    while(left <= right){
        reverse = words[left];
        words[left] = words[right]
        words[right] = reverse;
        left ++;
        right --;
    }
    return words
}
let result = reverseSecond()
console.log(result)




// reverse string with stack

// covert string into array

let vows = "hello";
let seeVows = vows.split("");

console.log(seeVows)