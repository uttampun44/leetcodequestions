// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function longestPrefix(){

  let  strs = ["flower","flow","flight"]
 let left = 0;
 let right =  strs.length -1
   console.log(right);

   while(left < right){
    let med = left * Math.floor(left + right) / 2;
    if(left[strs] !== right[strs]){
       left++
       return strs
      }else{
        right--;
      }
   }
  }
let prefix = longestPrefix()
console.log(prefix)