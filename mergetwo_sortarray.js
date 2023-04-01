// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6]
let m =3;
let n = 3;
let k;


function mergetwosortArray(){
    let i =  m-1;
    let j = n -1;
     k = nums1.length -1;
     
     while(j >= 0){
        if(i >= 0 && nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            k--;
            i--
        }else{
            nums1[k] = nums1[j];
            k--
            j--
        }
        console.log(nums1)
     }

}
mergetwosortArray()

// output [1,2,2,3,5,6]

function second(){
    
let nums1 = [1,2,3];
let nums2 = [2,5,6,0,0,0];
let m =3;
let n = 3;
let k;

 let i = m-1;
 let j = m-1;
 k  = nums2.length-1;

 while(i > 0){

    if(j > 0 && nums1[i] < nums2[j]){
         nums2[k] = nums2[j];
         k--;
         j--;
    }else{
        nums2[k] = nums2[i];
        k--;
        i--;
    }
   console.log(nums2)
 }

}
second()
