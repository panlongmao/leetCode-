 /**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数
*/

var climbStairs3 = (n :number, m: number)=> {
    // dp[i]    m  i-m
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {              // 总共的楼梯
        for (let j = 1; j <= m ; j++) {         // 一次可以爬的楼梯
            if (i - j >= 0) dp[i] += dp[i - j];
        } 
    }
    console.log(dp);
}
climbStairs3(4, 3);