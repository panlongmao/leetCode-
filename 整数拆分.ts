/**
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 * 返回 你可以获得的最大乘积 。
*/
/*
    示例 1:
        输入: n = 2
        输出: 1
        解释: 2 = 1 + 1, 1 × 1 = 1。
    示例 2:
        输入: n = 10
        输出: 36
        解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
*/

// 将 i 拆分成 j 和 (i - j)，分两种情况：
// 1. 不继续拆分 (i - j)，此时乘积为 j * (i - j)
// 2. 继续拆分 (i - j)，此时乘积为 j * dp[i - j]
// dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]));

function integerBreak(n: number): number {
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;  // 数字1只能为1，只有一种可能 
    for (let i = 2; i <= n; i++) {    // i表示正整数
        for (let j = 1; j <= i; j++) {
            // i 分成了j 跟 i-j
            // 如果不分  j * (i-j) 
            // 如果还要再分  j * dp[i-j]
            dp[i] = Math.max(dp[i], Math.max(j * (i-j), j * dp[i-j]));
        }
    }
    console.log(dp);
    return dp[n];
};
console.log(integerBreak(2));