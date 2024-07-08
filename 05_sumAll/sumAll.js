const sumAll = function(numb1, numb2) {
    let sum = 0;
    let mayor = 0;
    let menor = 0;

    if (numb1 < 0 || numb2 < 0) {
        return "ERROR"
    } else if (!Number.isInteger(numb1) || !Number.isInteger(numb2)) {
        return "ERROR"
    }


    if (numb1 < numb2) {
        mayor = numb2;
        menor = numb1;
    } else {
        mayor = numb1;
        menor = numb2;
    }
    for (let i = menor; i <= mayor; i++) {
        sum += i;        
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
