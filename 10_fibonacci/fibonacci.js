const fibonacci = function(sequence) {
    Number(sequence);
    let first = 0;
    let second = 1;
    if (sequence > 0) {
        for (let i = 1; i <= sequence; i++) {
            if (i % 2 != 0) {
                second += first;
            } else if (i % 2 == 0) {
                first += second;
            }
        }
        if (sequence % 2 != 0) {
            return second;
        } else if (sequence % 2 == 0) {
            return first;
        }
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
