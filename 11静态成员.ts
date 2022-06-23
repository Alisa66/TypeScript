
// 静态成员：在类中通过static修饰的属性或者方法
// 那么就是静态的属性及静态的方法 也称之为 静态成员

// 静态成员在使用的时候 是通过类型.的这种语法开调用的


class Test{
    // 类中默认有一个内置的name属性，所以会出现错误的提示信息
    // 静态属性“name”与构造函数“Test”的内置属性函数“name”冲突。ts(2699)

    static name2: string = "星期一"
    constructor(name:string){
        // 此时this是实例对象，name2 是静态属性，不能通过实例对象直接调用静态属性来使用
        // this.name2 = name
        // 属性“name2”在类型“Test”上不存在。你的意思是改为访问静态成员“Test.name2”吗?ts(2576)
    }

   static sayHi(){
        console.log('你好吗');
        
    }
}

// 实例化对象
// const test1:Test = new Test("test");

console.log(Test.name2); // 不用实例化 直接用类名.的方法访问静态属性

console.log(Test.sayHi()); //不用实例化 直接用类名.的方法访问静态方法


