let w2 = [2, 1, 4];
let val2 = [30, 30, 50];
let bagWeight2 = 4;

var bagValues2 = (weight: number[], values: number[], bagWeight: number) => {
    let dp = new Array(weight.length).fill(null).map(() => new Array(bagWeight+1).fill(0));
    // 对下标为0的物品进行初始化
    for (let j = 0; j <= bagWeight; j++) {
        dp[0][j] = weight[0] <= bagWeight ? dp[0][j] = values[0] : dp[0][j] = 0;
    }
    // 当背包容量为0的时候，都装不下，所以，dp[i][0] 为0 => 下标都从1开始
    for (let i = 1; i < weight.length; i++) {
        for (let j = 1; j <= bagWeight; j++) {
            if (j-weight[i]>=0) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + values[i]); 
            } else{
                dp[i][j] = dp[i-1][j];
            }  
        }   
    }
    console.log(dp);
    console.log("@mao dp[i][j]:", dp[weight.length-1][bagWeight]);
}
bagValues2(w2, val2, bagWeight2);


