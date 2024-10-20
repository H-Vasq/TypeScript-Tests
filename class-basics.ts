class Human {
    private name: string;
    private age: number;
    private hairColor: string;

    constructor(name: string, age: number, hairColor: string) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor
    }

    public getIntroduction(): string {
        return `My name is ${this.name}. Hi there.`;
    }

    public getIntroductionTo(name: string): string {
        return `Hello, ${name}, my name is ${this.name}`;
    }
}

let someone = new Human('Bill', 45, 'Black');

console.log(someone.getIntroduction());