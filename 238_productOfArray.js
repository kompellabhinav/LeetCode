var arr = [1, 2, 3, 4];
var newarr = [];
var product = 1;

for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {

        if(arr[i] === arr[j]) {
            continue;
        }

        product = product * arr[j];
    }
    newarr[i] = product;
    product = 1;
}

console.log(newarr);