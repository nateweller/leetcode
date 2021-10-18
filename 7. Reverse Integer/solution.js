/**
 * Reverse Integer
 * 
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let result = parseInt(x.toString().split('').reverse().join(''));

    if (x < 0) {
        result *= -1;
    }

    if (! result || result < -2147483647 || result > 2147483647) {
        return 0;
    }

    return result;
};