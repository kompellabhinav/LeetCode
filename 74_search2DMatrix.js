var searchMatrix = function(matrix, target) {

    for (var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if (target > matrix[i][matrix[i].length - 1]) break;
            if (target === matrix[i][j]) return true;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));