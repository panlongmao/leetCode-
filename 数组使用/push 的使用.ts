/**
 * array.push(element1, ..., elementN)
 * element1, ..., elementN: 要添加到数组末尾的元素。可以是一个或多个元素。
 * 返回操作后数组的新长度。
*/

// 添加单个元素
let arr: any[] = [];
console.log(arr.push("orange"));

// 添加多个元素
let arr1: any[] = [];
arr1.push("zhang", "li", "wang");
console.log(arr1);

// 使用返回值
let arr2: any[] = [];
let lenth = arr2.push("hello");
console.log(lenth);

// 将数组元素合并到另一个数组
let arr3: any[] = ["zhang", "li"];
let arr4: any[] = ["wang", "shao"];
arr3.push(...arr4);
console.log(arr3);