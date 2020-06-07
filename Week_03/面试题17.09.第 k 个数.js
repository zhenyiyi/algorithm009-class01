/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
    let output = Array(k);
    output[0] = 1;
    let a = 0, b = 0, c = 0;
    for (let i = 1; i < k; i++) {
        let n3 = output[a] * 3, n5 = output[b] * 5, n7 = output[c] * 7;
        console.log(n3, n5, n7);
        let min = Math.min(n3, n5, n7);
        output[i] = min;
        if (n3 === min) a++;
        if (n5 === min) b++;
        if (n7 === min) c++;
    }
    return output[output.length - 1];
};

getKthMagicNumber(5);