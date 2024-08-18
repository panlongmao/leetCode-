/**
 *  array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
        callback: 这是一个在数组每个元素上执行的函数，包含以下参数：
        accumulator: 累计器，累积结果的变量，初始值为 initialValue 或数组的第一个元素。
        currentValue: 当前正在处理的数组元素。
        currentIndex (可选): 当前元素的索引，从 0 开始。如果指定了 initialValue，索引从 0 开始；否则从 1 开始。
        array (可选): 当前正在遍历的数组。
        initialValue (可选): 作为首次调用 callback 时 accumulator 的初始值。如果未提供，则使用数组的第一个元素作为初始值，并从第二个元素开始迭代。
*/

// 1.数组求和：
let arr1 = [1, 2, 3, 4, 5, 6];
let sum1 = arr1.reduce((sum, next) => sum + next);
console.log(sum1);

// 2.数组中元素的乘积：
let arr2 = [3, 2, 8, 4, 5, 7];
let sum2 = arr2.reduce((sum, next) => sum * next);
console.log(sum2);

// 3.将数组中的对象按属性分组：
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 21 },
    { name: 'Charlie', age: 22 }
];
const result = people.reduce( (result1: {[key: number]: any[]}, item) => {
    let key = item.age;
    if (!result1[key]) result1[key] = [];
    result1[key].push(item);
    return result1;
}, {});
console.log(result);


// 4.计算数组中的最大值：
let arr3 = [5, 8, 9, 34, 17];
let maxNum = arr3.reduce((maxNum, value) => {
    maxNum = (maxNum > value)? maxNum: value;
    return maxNum;
});
console.log(maxNum);

