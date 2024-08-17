function fib(n: number): number {
    if(n <= 1) return n;
    let a = fib(n-1)+fib(n-2);
    return a; 
};

console.log(fib(4));

var fib1 = (n: number): number => {
    if (n <= 1) return n; 
    let dp = new Array(n+1).fill(0);
    console.log(dp);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    console.log(dp);
    return dp[n];
}

console.log(fib1(4))

var fib2 = (n: number): number => {
    if (n <= 1) return n;

    let sum = 0;
    let dp: number[] = []; 
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++){
        sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum; 
    }
    return sum;
}

console.log(fib2(4))