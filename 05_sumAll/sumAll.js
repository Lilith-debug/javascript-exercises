const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || typeof int1 !== "number" || typeof int2 !== "number") {
        return "ERROR"
    }
    else {
        if (int1 < int2) {
            let sum = int1;
            for (let i = int1+1; i <= int2; i++){
                sum += i;
            }
            return sum
        }
        else if (int1 > int2) {
            let sum = int2;
            for (let i = int2+1; i <= int1; i++){
                sum += i;
            }
            return sum
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
