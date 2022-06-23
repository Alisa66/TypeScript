(() => {
    // 接口：一种能力 一种约束而已
    let user = {
        firstName: 'Linda',
        lastName: 'jike'
    };
    function greeter(person) {
        return 'hello ' + person.firstName + " " + person.lastName;
    }
    greeter(user);
    console.log(greeter(user));
})();
