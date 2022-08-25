const leapYears = function(year) {

    let tests = [];
    
    tests.push(year%4, year%100, year%400);

    if ((tests[0] == 0 && tests[1] != 0) || (tests[0] == 0 && tests[1] == 0 && tests[2] == 0)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
