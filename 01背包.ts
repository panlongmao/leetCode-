console.log("hello world!!!");
var bagValues = (weight: number[], values: number[], bagWeight: number)=>{
    let dp = new Array(bagWeight + 1).fill(0);
    for (let i = 0; i < weight.length; i++) {
        for (let j = bagWeight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-weight[i]] + values[i]);      
        }
    }
    console.log("@mao dp", dp);
}

let w = [1, 3, 4];
let val = [15, 20, 30];
let bagWeight = 4
bagValues(w, val, bagWeight);  // 一维数组的




