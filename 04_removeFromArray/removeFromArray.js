//removes multiple values

let output = '';

const removeFromArray = function() {

    const args = Array.from(arguments);
    const input = args[0];
    const remove = new Set(args.slice(1));
    
    output = input.filter(x => !remove.has(x));

    return output;

};

/*
//removes a single value
let output = '';

const removeFromArray = function(input, remove) {

    remove = remove.toString();

    output = input.filter(content => content != remove);

    return output;

};
*/

//removes multiple values

// Do not edit below this line
module.exports = removeFromArray;
