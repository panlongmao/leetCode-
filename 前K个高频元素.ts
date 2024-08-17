/**
 * 给你一个整数数组 nums 和一个整数 k 
 * 请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
*/

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
function topKFrequent(nums: number[], k: number): number[] {
    // 排序下
    let arr: number[] = [];
    nums.forEach(item => {
        if (arr[item]) {
            arr[item]++;
        }else{
            arr[item] = 1;
        }
    });

    let result: number[] = [];
    let tmpArr: number[][] = [];

    // 将key 跟 value 倒过来
    // arr idx = item vaule =  times;
    for (let idx in arr) {
        let times: number = arr[idx];  // 出现的次数
        if (!tmpArr[times]) {
            tmpArr[times] = [];
        }
        tmpArr[times].push(+idx);
    }

    for (let idx = tmpArr.length; idx >= 0;  idx--) {
        if(tmpArr[idx] && result.length < k) result.push(...tmpArr[idx]);     
    }


    console.log(result);
    return result;
};

let nums = [1,1,1,2,2,3], k = 3;
topKFrequent(nums, k)