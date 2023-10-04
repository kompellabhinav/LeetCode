var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    if (nums.length === 1) {
        if(nums[0] === target) return 0;
        else return -1;
    }

    if (nums.length === 2) {
        if(nums[0] === target) return 0;
        else if(nums[1] === target) return 1;
        else return -1;
    }

    while(low <= high) {
        let mid = Math.floor((high + low)/2);
        // If middle element is equal to the target, return mid index.
        
        if (nums[mid] === target) return mid;

        // If the middle element is greater than the low element, it means that left half is sorted.
        if (nums[low] < nums[mid]){
            // If the taget lies between low index and mid index, change high to mid - 1, else change low to mid + 1.
            if (nums[low] <= target && target <= nums[mid]) high = mid;
            else low = mid;
        }
        
        // If the left half is not sorted, then right half would automatically be sorted.
        else {
            if (nums[mid] <= target && target <= nums[high]) low = mid;
            else high = mid;
        }
    }
    return -1;
};

console.log(search([5,1,2,3,4], 1));