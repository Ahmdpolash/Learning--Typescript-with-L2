// OOP --- CLASS METHODS

class Animal {
  name: string;
  color: string;
  species: string;

  constructor(name: string, color: string, species: string) {
    this.name = name;
    this.color = color;
    this.species = species;
  }

  speak() {
    console.log(`I am ${this.name} and I am a ${this.species}`);
  }
}

const cat = new Animal("tommy", "white", "cat");
const dog = new Animal("summy", "white", "dog");

cat.speak();
