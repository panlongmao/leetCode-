/**
 * 爬楼梯
 * 假设你正在爬楼梯。需要n阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。有多少种不同的方法可以爬到楼顶。
 * 注意：给定 n 是一个正整数。
*/


// dp[i] = dp[i-1] + dp[i-2];  i 表示个阶梯
var climbStairs = (n: number) =>{
    let dp: number[] = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    if (n <= 2) return dp[n];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    console.log(dp[n]);
}
climbStairs(3);  // 111 12 21


var climbStairs1 = (n: number) => {
    let dp: number[] = [];
    for (let i = 0; i <= 2; i++) {
        dp[i] = i;  
    }
    if (n <= 2) return dp[n];
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = dp[2] + dp[1];
        dp[1] = dp[2];
        dp[2] = sum; 
    }   
    console.log(sum);
}
climbStairs1(3);


