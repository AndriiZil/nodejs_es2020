function addNumbers(a, ...rest) {
    return rest.reduce((acc, val) => {
        return acc + val;
    }, a || 0);
}

module.exports = { addNumbers };
