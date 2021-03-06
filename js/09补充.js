// 声明文件
// 当使用第三方库的时候 需要引用它的声明文件 才能获得对应的代码不全、接口提示
// 声明语句：如果需要ts对新的语法进行检查 需要加载了对应的类型说明代码
//         declare var JQuery:(selector:string) =>any;
// 声明文件： 把声明语句放到一个单独的文件（JQuery.d.ts）中， ts会自动解析到项目中
//          所有声明文件
// 下载声明文件: npm install @types/jquery --save-dev
// jQuery('#foor'); // ERROR: Cannot find name 'jQuery'.错
// 需要用declare var 来定义类型
// declare var jQuery:(selector:string) => any
// jQuery('#foo')
// declare var 没有真正定义一个变量 只是定义了全局变量jquery的类型 仅仅用于编译时的检查
// 在编译结果中会被删除
// 一般声明文件都会单独写个xxx.d.ts
//====================================
// 内置对象
// js中的内置对象 可以直接在typescript中当作定义好了的类型
let b = new Boolean(1);
let n = new Number(true);
let s = new String('333');
let d = new Date();
let r = /^1/;
let e = new Error('error message');
b = true;
// let b2:boolean = new Boolean(1);//不能将类型“Boolean”分配给类型“boolean”。
// “boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。
// tips: ts中变量一开始是什么类型
// 那么后面赋值的时候 只能用这个类型的数据 是不允许用其他类型的数据赋值给当前的变量
console.log("===========");
// undefined 和 null 都可以作为其他类型的子类型
// 把 undefined 和null 赋值给其他类型的变量 如number
let und = undefined;
let nll = null;
console.log(und);
console.log(nll);
let num2 = undefined; // 严格模式下不行 非严格模式下可以
console.log(num2);
