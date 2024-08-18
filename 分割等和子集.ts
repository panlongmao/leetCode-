/**
 * 给你一个只包含正整数的非空数 nums.
 * 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
*/

/*
    示例 1：
    输入：nums = [1,5,11,5]
    输出：true
    解释：数组可以分割成 [1, 5, 5] 和 [11] 。

    示例 2：
    输入：nums = [1,2,3,5]
    输出：false
    解释：数组不能分割成两个元素和相等的子集。
*/

/**
 * 其实就是一个01背包问题
 * target 就是整个数组的一半
 * 背包的weight 跟 value 在这里是一样的
*/
function canPartition(nums: number[]): boolean {
    let sums = nums.reduce((sum, next)=> sum + next, 0);
    if (sums % 2 == 1) {
        return false;
    }
    let target = sums / 2;
    // 这里只要找出看有没有这个和的就可以
    let dp = new Array(target + 1).fill(0);
    for (let idx = 0; idx < nums.length; idx++) {
       for (let j = target; j >= 0; j--) {
            if (j - nums[idx] >= 0) {
                dp[j] = Math.max(dp[j], dp[j - nums[idx]] + nums[idx]);
            }
       }  
    }
    console.log(dp, dp[target] === target);
    return dp[target] === target;
};

let testNum = [1,5,11,5];
canPartition(testNum);