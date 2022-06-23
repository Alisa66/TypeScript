// 类的基本使用

class Greeter {
    //声明属性
    message: string

    // 构造方法: 为了将来实例化的对象的时候， 可以直接对属性的值进行初始化
    constructor(message: string) {
        this.message = message // 更新对象中的属性数据
    }

    // 一般方法 实例方法
    greet(): string {
        return 'hello' + this.message
    }
}

// 创建类的实例 可以直接进行初始化操作
const greeter = new Greeter('world typescript')

greeter.message = 'test'

// 调用实例的方法
console.log(greeter.greet());


// -----类的继承
// 继承后类与类之间的叫法

// A类继承了B这个类， 那么此时A类叫字类 B叫基类
// 字类---派生类
// 基类-- 超类 （父类）

// 一旦发生了继承的关系 就出现了父子类的叫法




class Animal {
    run(distance: number) {
        console.log(`Animal run ${distance}m`);
    }
}

class Dog extends Animal {
    cry() {
        console.log('dog is crying');
    }
}

const dog = new Dog();
dog.cry()
dog.run(100)

console.log("=======================");



// 总结： 类和类之间如果要有继承关系 需要使用extends关键字

// 子类可以调用父类中的构造函数， 使用的是super关键字 包括调用父类中的实例方法，也可以使用super

// 子类中可以重写父类的方法


// ----类的继承 复杂一点的
class Animal1 {
    name: string
    constructor(name: string) {
        this.name = name
    }
    run(distance: number = 0) {
        console.log(`${this.name} run ${distance}`);
    }
}

class Snake extends Animal1 {
    constructor(name: string) {
        super(name) // 调用父类中的构造方法
    }
    // 重写父类型的方法
    run(distance: number = 5) {
        console.log('sliding.....');
        super.run(distance)
    }

}
class Horse extends Animal1 {
    constructor(name: string) {
        //调用父类型构造方法
        super(name)
    }
    run(distance: number = 100): void {
        console.log('dashing.....');
        super.run(distance)
    }

    xxx() {
        console.log('xxxx');

    }
}

const snake = new Snake('sn')
snake.run() //sn run 5

const horese = new Horse('hores1')
horese.run() // hores1 run 100


console.log("======================")
// 父类型引用指向子类型的实例
// 不同类型的对象针对相同的方法 产生了不同的行为 ===> 多态


const tom: Animal1 = new Horse('ho2222')
tom.run()


// 如果子类型没有扩展的方法 可以让子类型引用父类型的实例

const tom1: Animal1 = new Animal1('tom3')
tom1.run()

// 派生类包含了构造函数 就必须要用super来继承


// ----访问修饰符  用来描述类内部的属性/方法 是否可以访问
// public 默认为公认的  公开的外部也可以访问
// private  只能类内部可以访问---- 子类中也是无法访问该成员数据

// protected 类中的成员如果使用protected， 外部无法访问这个成员数据的，当然子类是可以访问该成员

class Animal2 {
    public name: string

    public constructor(name: string) {
        this.name = name
    }

    public run(distance: number = 0) {
        console.log(`${this.name} run ${distance}`);
    }
}

class Person1 extends Animal2 {
    private age: number = 18
    protected sex: string = '男'

    run(distance: number = 5) {
        console.log('person is running...');
        super.run(distance)
    }
}

class student extends Person1 {
    run(distance: number = 6) {
        console.log('student is running....');
        console.log(this.sex);

        // console.log(this.age);属性“age”为私有属性，只能在类“Person1”中访问。ts(2341)
        super.run(distance)
    }
}
console.log(new Person1('abc').name);
// console.log(new Person1('abc').sex);// 无法访问
// console.log(new Person1('abc').age); // 无法访问



// ----参数属性
// 将声明和赋值合并至一处
//  构造函数中能够对只读属性进行修改

class Person2 {
    // 该name参数可以叫参数属性

    // 构造函数中的name参数 一旦使用了readonly进行修饰后 那么person2中就有了一个name的属性成员
    // 构造函数中的name参数 一旦使用了readonly进行修饰后 外部也无法修改类中的name属性成员值的


    // 构造函数中的name参数 一旦使用了public进行修饰后 那么Person类中就有了一个公共的name属性成员了

    constructor(readonly name: string) {
        // constructor(public name: string) {
        this.name = name
    }
}

const p = new Person2('Ben')

console.log(p.name); //Ben 




// ---存取器 typescript支持通过getters/setters来截取对对象成员的访问

class Person {
    firstName: string = 'A'
    lastName: string = 'B'
    get fullName() {
        return this.firstName + '-' + this.lastName
    }
    set fullName(value) {
        const names = value.split('-')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const person = new Person()
console.log(person.fullName); // A-B


person.firstName = 'C'
person.lastName = 'D'

console.log(person.fullName); //C-D

person.fullName = 'E-F'
console.log(person.firstName, person.lastName);




// 报错：Accessors are only available when targeting ECMAScript 5 and higher
// 解决： tsc 项目名称 -t es5



// // ----抽象类(抽象方法一般没有任何的具体内容的实现)
// 为了子类进行实例化以及实现内部的抽象方法
//     不能创建实例对象 只有实现类才能创建实例
//     可以包含未实现的抽象方法

// 抽象类的作用是 为子类服务的

abstract class Animals {
    // 抽象类
    // abstract name:string
    // 抽象方法 ---不能有具体的实现
    abstract cry()
    // 实例方法
    run() {
        console.log('run()');
    }
}
// 定义一个子类 派生类
class Dogs extends Animals {
    // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法
    cry() {
        console.log('Dogs cry()');
    }
}

const dogs = new Dogs()
dogs.run()
dogs.cry()
