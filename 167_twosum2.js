var twoSum = function(numbers, target) {
    
    var output = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (target === numbers[i] + numbers[j]){

                output.push(i + 1, j + 1);
            }
        }
    }

    return output;
};

console.log(twoSum([2,7,11,15], 9));