var lastStoneWeight = function(stones) {
    let res;

    
    while (stones.length > 1) {
        stones.sort((a, b) => b-a);

        res = Math.abs(stones[0]-stones[1]);
        stones.splice(0, 2);
        stones.push(res)

        
    }
    
    
    if (stones.length = 1) {
        return stones[0];
    } else {
        return res;
    }
};


lastStoneWeight([1]);