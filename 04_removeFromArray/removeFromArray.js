//removes a single value
let output = '';

const removeFromArray = function(input, remove) {

    remove = remove.toString();

    output = input.filter(content => content != remove);
    return output;

};

// Do not edit below this line
module.exports = removeFromArray;
