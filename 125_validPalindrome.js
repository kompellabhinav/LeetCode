var fixedString = (str) => {
    var newstring = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return newstring;
}

isPalin = fixedString("A man, a plan, a canal: Panama");

function palin(isPalin){
    for (let i = 0; i < isPalin.length / 2; i++) {

        lP = i;
        rP = isPalin.length - i - 1
        if (isPalin[lP] !=  isPalin[rP]) {
            return false;
        }
    }

    return true;
}

console.log(palin(isPalin));