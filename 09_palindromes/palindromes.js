const palindromes = function (string) {
    let reverseString = string.split("").reverse().join("")
    if (reverseString == string) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
