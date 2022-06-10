(() => {
    // let 变量名：数据类型 = 值
    let isDone: boolean = false;
    isDone = true;
    // isDone = 2; //不能将类型“number”分配给类型“boolean”。?
    console.log(isDone);
    let name: string = 'time';

    let age: number = 12;

    let list1: number[] = [1, 2, 3];

    let list2: Array<number> = [1, 2, 4]

    // list1 和list2 都表示由数字组成的数组


    // 元祖 Tuple 元祖类型允许表示一个已知元素数量和类型的数组
    // 各元素的类型不必相同 

    let t1: [string, number]

    t1 = ['hello', 3];
    // t1=[3,'t'] error

    // 访问一个已知索引的元素 会得到正确的类型

    console.log(t1[0].substring(1))

    // console.log(t1[1].substring(1))
    //error:类型“number”上不存在属性“substring”。


    // 枚举

    enum Color {
        Red = 1,
        Green,
        Blue
    }

    // 枚举数值默认从0开始递增
    //  根据特定的名称得到对应的枚举数字

    let myColor: Color = Color.Green //  1
    console.log(myColor, Color.Red, Color.Blue); // 1 0 2
    // 手动赋值Red=1之后 就变成了 2 ，1 ，3


    let c: Color = Color.Green; // 2
    console.log(c, Color);  // 2 1,2,3

    let colorName: string = Color[1]
    console.log(colorName); // Red


    // any    为不清楚类型的变量指定一个类型
    // 希望检查器不进行检查二是直接通过编译阶段
    // 用any来标记这些变量  

    let notSure: any = 5;
    notSure = "test";
    notSure = [1, 23, 4];
    console.log(notSure);

    // 只知道一些数据的类型的时候 其他不知道 用any

    let list: any[] = [1, true, 'free']

    list[1] = 200

    console.log(list);

    // void

    function test(): void {
        console.log('test');
        // return 1; //不能将类型“number”分配给类型“void”

    }

    // object 标识非原始类型 返回除了number string boolean之外的类型

    function fn2(obj2: object): object {

        console.log('fn2', obj2);
        // return null
        return {}

        // return {}

    }

    // console.log(fn2('test'));类型“string”的参数不能赋给类型“object”的参数
    console.log(fn2(String));//[Function: String]

    // 联合类型 表示取值可以为多种类型中的一种
    function toString2(x: number | string): string {
        return x.toString()
    }

    function getLength(x: number | string) {
        // return x.length;//类型“string | number”上不存在属性“length”。
        // 类型“number”上不存在属性“length”。

        // if(x.length){
        //     return x.length
        // }else{
        //     return x.toString().length
        // }
        return x.toString().length
    }


    //-------- 类型断言
    //  通过类型断言告诉编译器 相信我，我知道自己再按什么
    //  就相当于其他语言里面的类型转换 不进行特殊的数据检查和结构
    //  没有运行时的影响  只在编译阶段起作用
    //  TypeScript会假设 代码编写者 已经进行了必须的检查

    // 有两种方法 手动指定一个值的类型

    // 方式1：<类型>值
    // 方式2： 值 as类型 tsx中只能用这种方式
    // 类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法


    // 定义一个函数得到一个字符串或者数据的长度
    function getLength1(x: number | string) {
        if ((<string>x).length) {
            // <string>x  或者x as string 也一样的
            return (x as string).length
        } else {
            return x.toString().length
        }
    }
    console.log(getLength1('acnd'), getLength1(112233));

    // ----类型推断
    // ts在没有明确的指定类型的时候推测出一个类型
    // 两种情况 1.定义变量时赋值了 推断为对应的类型
    //          2.定义变量时没有赋值 推断为any类型

    let b9 = 10; // number
    // b9 = '323'不能将类型“string”分配给类型“number”。ts(2322)

    let b10 // any 类型
    b10 = 123,
        b10 = '334' // right



})()


