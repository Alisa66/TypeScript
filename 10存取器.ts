
// 存取器：让我们可以有效地控制 对对象中的成员的访问
// 通过getters和setters来进行操作



// 外部传入姓氏和名字数据，同时使用set和get控制姓名的数据 外部也可以进行操作

class Persons {
    firstName: string // 姓氏
    lastName: string
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    get FullName() {
        console.log("====get=====");

        return this.firstName + "==" + this.lastName
    }
    set FullName(val) {
        console.log("======set=====");

        let names = val.split("_")
        this.firstName = names[0];
        this.firstName = names[1]
        // fullName = this.firstName + this.lastName

    }
}

const persons = new Persons("烤肉", "好吃")

console.log(persons.FullName);

persons.FullName = "一般_喝酒";
console.log(persons.firstName);
console.log(persons.lastName);




