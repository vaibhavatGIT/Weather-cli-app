const getSum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('please provide number as input');
            }
        }, 2000)
    })
}

getSum(5,   10).then((res) => {
    console.log("Result:", res)
}, (err) => {
    console.log(err);
});