// 先遍历物品，再遍历背包容量
var completePack = () => {
    const weight: number[] = [1, 3, 4];
    const value: number[] = [15, 20, 30];
    const bagSize: number = 4;
    let dp = new Array(bagSize+1).fill(0);
    for (let i = 0; i < weight.length; i++) {
        for (let j = weight[i]; j <= bagSize; j++) {
            dp[j] = Math.max(dp[j], dp[j-weight[i]]+value[i]);  
        }
    }
    console.log(dp);
}
completePack()