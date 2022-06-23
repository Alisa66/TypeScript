// 命名函数
function add(x, y) {
    return x + y;
}
// 匿名函数
let myAdd = function (x, y) {
    return x + y;
};
// 添加类型
function add1(x, y) {
    return x + y;
}
let myAdd1 = function (x, y) {
    return x + y; //typescript 能够根据返回语句自动推荐返回值的类型
};
// ------完整函数
let myAdd2 = function (x, y) {
    return x + y;
};
// 可选参数和默认参数
// 传递给函数的参数个数 必须与 函数期望的参数个数一致
function buildName(firstName = 'A', lastName) {
    if (lastName) {
        return firstName + '-' + lastName;
    }
    else {
        return firstName;
    }
}
console.log(buildName('c', 'd'));
// 剩余参数 必须是数组类型
function info(x, ...args) {
    console.log(x, args);
}
info('333', '1', '2', '3');
//定义函数实现
function addN(x, y) {
    if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
    else if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
}
console.log(addN(1, 2));
console.log(addN('3', '4'));
