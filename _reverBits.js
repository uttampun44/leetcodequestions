// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596,
//  so return 964176192 which its binary representation is 00111001011110000010100101000000.
function reverseBits(){

    let n ='0000001010010100000111101001110087'
    let newN = n.toString();
    console.log(newN)
    let start = 0;
    let end = newN.length-1;
    console.log(end)

    while(start <= end){
         if(start[n] == end[n]){
            start++;
            end--; 
         }
         return true

    }
    return false
}
let result = reverseBits()
console.log(result)

