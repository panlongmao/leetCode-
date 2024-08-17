// 1. 声明一个数组变量
let testArr: [];
// 2. 初始化一个数组
let testArr1: number[] = [1, 2, 3, 4, 5];
// 3. 使用 Array 构造函数来声明和初始化数组
let testArr2 = new Array(5).fill(0);
let testArr3 = new Array("maomao1", "maomao2", "maomao3");
console.log(testArr2);
console.log(testArr3);



// map
let test4 = new Array(5).fill(0);
let test5 = test4.map(() => new Array(3).fill(0));
console.log(test4);
new Array(5).fill(0).map(() => new Array(3).fill(0));

let testArr4 = testArr3.map(vaule => vaule + "hello");
console.log(testArr3)
console.log(testArr4)

// filter
let testArr5: number[] = testArr1.filter(value => value > 3); 
console.log(testArr5);



