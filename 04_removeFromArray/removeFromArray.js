const removeFromArray = function(array) {
    let count = arguments.length
    for (let i = 1; i <= count; i++) {
        for (let item of array) {
            if (array[item] === arguments[i]) {
                array.splice(item, 1)
            }
        }
    }
    if (array[0] === arguments[1] || array[0] === arguments[2] || array[0] === arguments[3] || array[0] === arguments[4]){
        array.splice(0, 1)
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
