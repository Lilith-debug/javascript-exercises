const palindromes = function (str) {
    str = str.toLowerCase()
    const array = Array.from(str);
    const letters = Array.from("abcdefghijklmnopqrstuvwxyz");
    const filtered = array.filter(letter => letters.includes(letter));
    const reversed = [];
    for (let i = filtered.length - 1; i >= 0; i--) {
        reversed.push(filtered[i]);
    }
    return filtered.join('') === reversed.join('')
};

// Do not edit below this line
module.exports = palindromes;
