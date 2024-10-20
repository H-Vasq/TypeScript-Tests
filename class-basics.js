var Human = /** @class */ (function () {
    function Human(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    Human.prototype.getIntroduction = function () {
        return "My name is ".concat(this.name, ". Hi there.");
    };
    Human.prototype.getIntroductionTo = function (name) {
        return "Hello, ".concat(name, ", my name is ").concat(this.name);
    };
    return Human;
}());
var someone = new Human('Bill', 45, 'Black');
console.log(someone.getIntroduction());
