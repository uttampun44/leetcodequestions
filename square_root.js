// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

function squareRoot(x){
   
     let r = x;
     while(r*r > x){
        r = ((r + x / r) / 2) | 0;
        console.log(r)
     }
     return r
}
squareRoot(4)
