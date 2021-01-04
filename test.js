//sum(1, 2, [3, 4])
// sum(1, '2', [3, 4])
// sum(1, '2', '2')

// bài tập arguments 
function sum() {
    const number = Array.from(arguments);
    let flattened = number.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    }, []);

    let result = flattened.reduce((sum, num) => {
        if (typeof num == 'number') {
            return sum + num;
        } else {
            // console.log(sum);
            return sum;
        }
    }, 0);
    return result;
}



// console.log(sum(1, true, '2', '2'));

const exchangeRate = {
    usd: {
        vnd: 23371,
        jpy: 107
    },
    vnd: {
        baht: 0.0014
    }
};

function exchange(amount) {
    // your code here
    return {
        from: function(unitX) {
            return {
                to: function(unitY) {
                    return exchangeRate[unitX][unitY] * amount;
                }
            }
        }
    }
}

const usdToVndAmount = exchange(100).from('usd').to('vnd');
console.log(usdToVndAmount);
const vndToBahtAmount = exchange(10000).from('vnd').to('baht');