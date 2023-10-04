var maxArea = function(height) {
    
    let area = 0;
    var maxArea = 0;
    var lp = 0;
    var rp = height.length - 1;
    while(lp < rp) {

        area = height[lp] < height[rp] ? height[lp] * (rp - lp) : height[rp] * (rp-lp)
        maxArea = area > maxArea ? area : maxArea;
        height[lp] < height[rp] ? lp++ : rp--;
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));