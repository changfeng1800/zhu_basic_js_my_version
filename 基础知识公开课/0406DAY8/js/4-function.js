//ES6版本
//ES6提供了很多方法，可以快速开发

let sum = (...arg) => eval(arg.filter(item => !isNaN(item)).join('+')); ////形参变成数组了（这简直可以叫合并运算符）
console.log(sum(10, '20', 'AA', 50));   