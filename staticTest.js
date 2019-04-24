class Person {
    constructor (_name, _age) {
        this.name = _name
        this.age = _age
    }

    describe () {
        return `I am ${this.name} and I am ${this.age} years old`
    }

    static count(text) {
        return "I am a static method " + text
    }
}

console.log(Person.count("from Person.count()"))

const mirko = new Person("Mirkó Feleky", 32)
const balazs = new Person("Balázs", 36)
console.log(mirko.describe())
console.log(balazs.describe())

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age)

        this.yearsOfExperience = _yearsOfExperience;
    }
}
const programozoBalage = new Programmer("Balage", 36, 10)
console.log(programozoBalage)
console.log(programozoBalage.describe())