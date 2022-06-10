// 类的基本使用

class Greeter {
    //声明属性
    message: string

    // 构造方法
    constructor(message: string) {
        this.message = message
    }

    // 一般方法
    greet(): string {
        return 'hello' + this.message
    }
}

// 创建类的实例
const greeter = new Greeter('world typescript')

// 调用实例的方法
console.log(greeter.greet());


// -----类的继承

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


// ----类的继承 复杂一点都
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
        super(name) // 调用父类构造方法
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



// 父类型引用指向子类型的实例===》 多态

const tom: Animal1 = new Horse('ho2222')
tom.run()


// 如果子类型没有扩展的方法 可以让子类型引用父类型的实例

const tom1: Animal1 = new Animal1('tom3')
tom1.run()

// 派生类包含了构造函数 就必须要用super来继承


// ----访问修饰符  用来描述类内部的属性/方法 是否可以访问
// public 默认为公认的  公开的外部也可以访问
// private  只能类内部可以访问

// protected 类内部和自雷访问

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
class Person2 {
    constructor(readonly name: string) { }
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



// // ----抽象类
//     不能创建实例对象 只有实现类才能创建实例
//     可以包含未实现的抽象方法

abstract class Animals {
    abstract cry()
    run() {
        console.log('run()');
    }
}

class Dogs extends Animals {
    cry() {
        console.log('Dogs cry()');

    }
}

const dogs = new Dogs()
dogs.run()
dogs.cry()
