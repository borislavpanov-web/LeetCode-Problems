function fc(nums) {
    let foundN = [];
    nums.forEach(e => {
        if (!foundN.includes(e)) {
            foundN.push(e)
        } else if (foundN.includes(e)) {
            let i = foundN.indexOf(e);
            foundN.splice(i, 1)
        }
    })
    return Number(foundN);
}

console.log(fc([4,1,2,1,2]));