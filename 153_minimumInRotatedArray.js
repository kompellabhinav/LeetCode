var findMin = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        
        if (nums[i] > nums[i+1]) {
            return i + 1;
        }
    }
};

console.log(findMin([3, 4, 5, 1, 2]));