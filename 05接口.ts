// 使用接口interface来定义对象的类型
// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
// 接口类型的对象
//      多了或者少了属性是不允许的

//      可选属性:?
//      只读属性：readonly
interface IPerson {
    id: number
    name: string
    age: number
    sex: string

    className?: string // 可选属性
    readonly schools: string
}

const p1: IPerson = {
    id: 1,
    name: 'tom',
    age: 10,
    sex: 'man',
    schools: 'man'
}
// p1.schools = 'qinghua '无法分配到 "schools" ，因为它是只读属性。ts(2540)
// readonly 与const 区分 看是变量还是属性


// ------------函数类型

// 为了使用接口表示的函数类型，我们需要给接口定义一个调用签名
// 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型

// 可以描述函数的参数类型和返回类型 每个参数和函数都需要类型
// 函数类型：通过接口的方式作为函数的类型来使用
interface SearchFunc {
    // 定义一个调用签名
    (source: string, substring1: string): boolean
}

// 定义了一个函数， 该类型就是上面定义的接口
const mySearch: SearchFunc = function (source: string, sub: string): boolean {
//    在sourch字符串中查找sub字符串
    return source.search(sub) > -1
}
console.log(mySearch('abcd', 'bc'));


//----类实现接口

// typescript 能用来明确强制一个类去符合某种契约

// 类类型: 实现接口

// 一个类可以实现多个接口
// 一个接口可以继承多

interface Alarm{
    alert():any
}

interface Light{
    lightOn():void;
    lightOff():void

}


class Car implements Alarm{ //这个类的类型就是上面定义的接口 实际上也可以理解为 Alarm约束了当前的这个person类
    alert() { // implements --- 实现接口中的方法
        console.log('car implements alert');
    }
}
// 一个类实现多个接口 类里面就要--继承-- 接口里面的东西 重写一遍
class Car1 implements Alarm,Light{
    alert() {
        console.log('car1 alert');
        
    }
    lightOn(): void {
        console.log('car light on');
        
    }
    lightOff(): void {
        console.log('car light off');
    }
}

// 总结： 类可以实现通过接口的方式 来定义当前这个类的类型
// 类可以实现一个接口 类也可以实现多个接口 需要注意的时候 接口中的内容都要真正的实现

//---接口继承接口

interface lightTableAlarm extends Alarm,Light{
    
}




// 总结： 接口与接口之间叫继承 extends
//       类和接口之间叫实现 implements
        
        
      