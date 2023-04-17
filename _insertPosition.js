
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function insertPosition(){
   
    let nums = [1, 3, 5, 6];
    let start  = 0;
    let end = nums.length;
    // console.log(end)
    let target = 5
    while(start <=  end){
        let mid = Math.floor ((start + end ) /2)

        if(nums[mid] == target){
            return mid
        }else if(nums[mid] <= target){
            start++;
        }else{
            end --;
        }
        return mid-1
   }
}
 let result = insertPosition()
console.log(result)


function insert(){
   let numOne = [1,3,5,6];
   let tar = 2;
   let left = 0;
   let right = numOne.length;
    while(left <= right){
        let mid = Math.floor((left + right) /2);
        console.log(mid)

        if(numOne[mid] == tar){
            return mid
        }
        else if(numOne[mid] <= tar){
            left++;
        }else{
            right--;
        }
        return mid -1
    }
}
insert()

// function insertOne(){
  
//     let insertNum = [1,3,5,6];
//     let targetNumber = 7;

//     // output 4
//     let leftNum = 0;
//     let endNum = insertNum.length -1;

//     while(leftNum < endNum){
//          let mediumNum = Math.floor((leftNum + endNum) / 2);

//          if(!targetNumber){
             
//          }else{

//          }
//     }

// }
// let res = insertOne()
// console.log(res);