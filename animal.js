class Animal {
    constructor(name) {

        this.name = name;
    }

    makeSound() {
        console.log("Generic Animal sound!!")
    }
}

const a1 = new Animal("Dom")
a1.makeSound()

class Dog extends Animal {
    constructor(name) {
        super(name)

    }

    makeSound() {
        console.log("Woof! Woof!")
    }
}

const dogo = new Dog("Morzsa")

dogo.makeSound()