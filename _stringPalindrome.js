// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(){
   
      let x = 121;
      let newX = x.toString();
      let start = 0;
      let end  = newX.length-1;

    while(start < end){
        if(start[newX] !== end[newX]){
            start++;
            end--;
            return false
        }
        return true
    }
   
  }
let answer = isPalindrome()
console.log(answer);


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// function isPal(){
   
//     let s = "A man, a plan, a canal: Panama";
//     let regexPattern = /[^A-Za-z0-9]/g;
//     let newS = s.replace(regexPattern, '')
//     console.log(newS)
//     let wordLeft = 0;
//     let wordRight = newS.length-1;
    
//     console.log(wordRight);
//     while(wordLeft < wordRight){
//         if(wordLeft[newS] !== wordRight[newS]){
//            wordLeft++;
//            wordRight--;
//            return false;
//         }
//     }
//     return true;
   
// }
// let resultWord = isPal();
// console.log(resultWord)