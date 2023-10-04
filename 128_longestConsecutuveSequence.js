/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

var longestConsecutive = function(nums) {

    let sequenceLength = 1;
    let presentSequence = 1;
    let sortedArr = nums.sort(function(a, b){return a - b});

    if(sortedArr.length === 0) return (sequenceLength - 1);
    console.log(sortedArr)
    for (let i = 0; i < sortedArr.length; i++) {

        if((sortedArr[i] + 1) === sortedArr[i + 1]) {
            presentSequence++;
            sequenceLength = Math.max(sequenceLength, presentSequence);
        }
        else if(sortedArr[i] === sortedArr[i+1]){
            continue;
        }
        else presentSequence = 1;
    }
    return sequenceLength;
};

console.log(longestConsecutive([1,2,0,1]));