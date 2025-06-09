function maxSubArraySumSizeThree(arr){
    let maxSum = -Infinity;
    //edge cases should be written
    //note this arr.length-3 because you don't wanna go all the way to the end of the array
    for(let i=0; i<arr.length - 3; i++){
        let sum = 0;
        for(let j=i; j<i+3; j++){
            sum += arr[j];
            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
}
console.log(maxSubArraySumSizeThree([1,2,-3,4,-1,-2]))