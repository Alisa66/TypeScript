// 使用接口interface来定义对象的类型
// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
// 接口类型的对象
//      多了或者少了属性是不允许的
const p1 = {
    id: 1,
    name: 'tom',
    age: 10,
    sex: 'man',
    schools: 'man'
};
const mySearch = function (source, sub) {
    return source.search(sub) > -1;
};
console.log(mySearch('abcd', 'bc'));
class Car {
    alert() {
        console.log('car implements alert');
    }
}
// 一个类实现多个接口 类里面就要--继承-- 接口里面的东西 重写一遍
class Car1 {
    alert() {
        console.log('car1 alert');
    }
    lightOn() {
        console.log('car light on');
    }
    lightOff() {
        console.log('car light off');
    }
}
