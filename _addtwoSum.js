// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function addtwoSum(nums, target){
 
     let newArr;
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                newArr = [i, j];
                console.log(newArr)
            }
        }
    }
    return newArr;

  }
addtwoSum([2, 7, 11, 15], 9)


function second(number, tar){

    let newarr;

    for(let i = 1; i<number.length; i++){
        for(let j = i+1; j<number.length; j++){
            if(number[i] + number[j] === tar){
                newarr = [i, j];
                console.log(newarr);
            }
        }
    }
    return newarr
}
second([3,2,4], 6)