(() => {
    function sayHi(str) {
        console.log(str);
    }
    let str = "hello TypeScript, this is xingqisan";
    sayHi(str);
})();
// ts里面写的是js代码 在html中能直接引入 
// 但是如果有ts，就需要编译 手动便也 tsc+文件路径
// 编译之后 let 变成var string那种类型会消失 变成普通的
