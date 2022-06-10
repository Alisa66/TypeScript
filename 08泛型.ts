// 1. 根据指定的数量count和数据value 创建一个包含count个value的数组

function creatArray(count: number, value: any): any[] {
    let result: any[] = [];
    for (let i = 0; i < count; i++) {
        result.push(value)
    }
    console.log(result)
    return result
}

creatArray(5, 3)
creatArray(3, 'aa')

// 使用函数泛型
// 函数泛型 在定义函数 接口或类的时候 不预先指定具体的类型
// 而是在使用的时候在指定具体类型的一种特性

function createArray1<T>(value: T, count: number) {
    const arr: Array<T> = [];
    for (let index = 0; index < count; index++) {
        arr.push(value)
    }
    return arr
}

const arr1 = createArray1<number>(11, 3);

console.log(arr1[0].toFixed());

const arr2 = createArray1<string>('22', 4)
console.log(arr2[0].split(""))


// 多个泛型参数的函数  一个函数可以定义多个泛型参数

function swap<K, V>(a: K, b: V): [K, V] {
    return [a, b]
}
const result1 = swap<string, number>('abc', 111);

console.log(result1[0].length, result1[1].toFixed());

// 泛型接口  定义接口时 为接口中的属性或方法定义泛型
// 使用接口时，在指定具体的泛型类型

interface Ibase<T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T
}

class User {
    id?: number;
    name: string;
    age: number
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class userCurd implements Ibase<User>{ // 类实现接口
    data: User[] = []
    add(user: User): void {

        user = { ...user, id: Date.now() }
        this.data.push(user)

        console.log("保存user", user.id);
    }
    getById(id: number): User {
        return this.data.find(item => item.id === id)
    }
}
const usercrud = new userCurd();
usercrud.add(new User('tom', 12))
usercrud.add(new User('tom1', 333))
console.log(usercrud.data);// ['tom',12，id]

console.log('==============================');

// 泛型类  定义类的时候 为类中的属性或方法定义泛型类型 
// 在创建实例的时候在指定特定的泛型类型

class createNumber<T>{
    zeroValue: T
    add:(x: T, y: T) => T
}

let myNumber = new createNumber<number>()

myNumber.zeroValue = 0;
myNumber.add = function(x,y){
    return x +y
}
let myNumberString = new createNumber<string>()

myNumberString.zeroValue = 'aaa'
myNumberString.add = function(x,y){
    return x+y
}

console.log(myNumber.add(myNumber.zeroValue,11)); // 11

console.log(myNumberString.add(myNumberString.zeroValue,'bbb')); //aaabbb

console.log('==============================');

// 泛型约束  

// 没有泛型约束
function fn<T>(x:T):void{
    // console.log(x.length);//类型“T”上不存在属性“length”。ts(2339)
}

// 泛型约束
interface lengthWis{
    length:number
}

// 指定泛型约束

function fn1<T extends lengthWis>(x:T):void{
    console.log(x.length);
}

fn1('333') ;//3
// fn1(3);//类型“number”的参数不能赋给类型“lengthWis”的参数。ts(2345)
