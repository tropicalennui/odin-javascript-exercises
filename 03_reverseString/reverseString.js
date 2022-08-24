const reverseString = function(strIn) {
    let strArray = strIn.split('');
    let strOut = strArray.reverse()
    return strOut.join('').toString();
};

// Do not edit below this line
module.exports = reverseString;
