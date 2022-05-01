const repeatString = function(string, num) {
    let multiplierString = ''
    if (num < 0) {
        return 'ERROR'
    }
    else {
        for (let i = 0; i < num; i++) {
        multiplierString = multiplierString + string;
        }
    }
return multiplierString
};

// Do not edit below this line
module.exports = repeatString;
