/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
*/
// 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：2
// 解释：3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length;     
    let n = obstacleGrid[0].length;  
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // obstacleGrid[i][j]

    for (let i = 0; i < m; i++) {
        if (!obstacleGrid[i][0]) {
            dp[i][0] = 1;
        }   
    }
    for (let j = 0; j < n; j++) {
        if (!obstacleGrid[0][j]) {
            dp[0][j] = 1;
        }   
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i-1][j]) dp[i-1][j] = 0;
            if (obstacleGrid[i][j-1]) dp[i][j-1] = 0;
            if(obstacleGrid[i][j]) continue;
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    console.log(dp);
    return dp[m-1][n-1];
}

uniquePathsWithObstacles( [[0,0,0],[0,0,1],[0,0,0]]);