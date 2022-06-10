(() => {
    // 接口：一种能力 一种约束而已


    // 在typescript里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的
    // 我们在实现接口时候只要保证 包含了接口要求的结构就可以了
    interface Person {
        firstName: string,
        lastName: string
    }
    let user = {
        firstName: 'Linda',
        lastName: 'jike'
    }

    function greeter(person: Person) {

        return 'hello ' + person.firstName + " " + person.lastName;

    }

    greeter(user)
    console.log(greeter(user))
})()