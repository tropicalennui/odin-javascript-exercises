const repeatString = function(string, num) {
    
    if (num >= 0) {
    
        let output = '';

        for (i=0; i<num; i++) {
            output += string;
        }

        return output;

    } else {

        return 'ERROR';

    }

};

// Do not edit below this line
module.exports = repeatString;
