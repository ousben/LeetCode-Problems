let climbStairs = n => {
    let stairsArray = [0, 1, 2];
    
    for(let i = 3; i <= n; i++) {
        stairsArray[i] = stairsArray[i - 1] + stairsArray[i - 2];
    }
    return stairsArray[n];
}