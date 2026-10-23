class Animal {
    public name: string;
    public sound: string;
    public legs: number;

    constructor(name: string, sound: string, legs: number) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
    }
    public makeSound() {
        console.log(this.sound);
    }
    public numberOfLegs() {
        console.log('I have ' + this.legs + ' legs');
    }
    public getName() {
        console.log('My name is ' + this.name);
    }
}
    console.log('1 Animal')
    class Dog extends Animal {
        constructor(name: string) {
            super(name, "Woof!", 4);
        }
        
        public getName() {
            return ('My name is ' + this.name + ' and I am a dog!');
        }
        public makeSound() {
            return (this.sound + ' ' + this.sound);
        }
        public numberOfLegs() {
            return ('I have ' + this.legs + ' legs');
        }   
    }
      const myDog = new Dog('Rex');
        console.log(myDog.getName())
        console.log(myDog.makeSound())
        console.log(myDog.numberOfLegs())
        console.log ('2 Animal')
    class Cat extends Animal {
        constructor(name: string) {
            super(name, "Meow!", 4);
        }
        public getName() {
            return ('My name is ' + this.name + ' and I am a cat!');
        }
        public makeSound() {
            return (this.sound + ' ' + this.sound);
        }
        public numberOfLegs() {
            return ('I have ' + this.legs + ' legs');
        }
    }


        const myCat = new Cat('Jessie');
         console.log(myCat.makeSound())
        console.log(myCat.getName())
        console.log(myCat.numberOfLegs())
