(() => {
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + ' ' + lastName;
        }
    }
    function greeter(person) {
        return 'hello,' + person.firstName + ' ' + person.lastName;
    }
    let user = new User('test ', 'constructer');
    console.log(greeter(user));
})();
