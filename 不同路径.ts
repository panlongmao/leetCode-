/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下 或者 向右 移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
*/

//  m 横 n 列
function uniquePaths(m: number, n: number) {
    // dp[m][n] = dp[m-1][n]  + dp[m][n-1] 
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(0));
    // dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    // dp[0][n] = 1
    // dp[m][0] = 1

    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let j = 0; j < m; j++) {
        dp[j][0] = 1;   
    }

    for (let i = 1; i < m; i++) {
       for (let j = 1; j < n; j++) {
            dp[i][j] =  dp[i - 1][j] + dp[i][j - 1];
       } 
    }

    console.log(dp);
    // return 0;
}
uniquePaths(3, 7);