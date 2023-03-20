const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    return string.split("").reverse().join("") === string;
};

// Do not edit below this line
module.exports = palindromes;
