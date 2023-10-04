/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function(nums, k) {
    const hashMap = new Map();
    var ans = [];
    
    nums.forEach(i => {
        if (hashMap.has(i)) {
            hashMap.set(i, hashMap.get(i) + 1);
        } else {
            hashMap.set(i, 1);
        }
    });
    const arr = new Array(nums.length);
    [...hashMap.keys()].forEach(key => {
        let index = hashMap.get(key) - 1;       // This is the index

        if(arr[index]) arr[index].push(key);
        else  arr[index] = [key];

    });
    for (var i = k - 1; i < arr.length; i++) {
        if(arr[i]) ans.push(...arr[i]);
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        if(arr[i]) ans.push(...arr[i]);
        if(ans.length === k) break;
    }
    return ans;
};

topKFrequent([1,2], 2);