const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    } else {
    
        const args = Array.from(arguments);
        args.sort((a,b) => a - b);

        let buildValues = [args[0]];
        let count = args[0];

        for (i=1; i <= args[1]-args[0]; i++) {
            count++;
            buildValues.push(count);
        }

        let output = buildValues.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);


        return output;
    
    }
};

// Do not edit below this line
module.exports = sumAll;
