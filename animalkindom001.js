// Define the base class Animal
class Animal {
  constructor(name, species, Characteristics) {
    this.name = name;
    this.species = species;
    this.Characteristics = Characteristics;
  }

  // Encapsulation: Use getters and setters for private properties
  getName() {
    return this.name;
  }

  getSpecies() {
    return this.species;
  }

  getCharacteristics() {
      return this.Characteristics
  }

  // Abstraction: Abstract method for making a sound
  makeSound() {
    throw new Error("Abstract method 'makeSound' must be implemented");
  }
}

// Inheritance: Create subclasses for specific types of animals
class Arthropoda extends Animal {
  constructor(name, species, Characteristics) {  //  1
    super(name, species, Characteristics)
  }

  // Polymorphism: Override the makeSound method
  makeSound() {
    return "I honestly have no idea";
  }
}

class Fish extends Animal {
  constructor(name, species, Characteristics) { //  2
    super(name, species, Characteristics);
    
  }

  // Polymorphism: Override the makeSound method
  makeSound() {
    return "maybe they 'bloop', lol";
  }
}

class Amphibia extends Animal {
  constructor(name, species, Characteristics) {  //  3
    super(name, species, Characteristics);
  }

  // Polymorphism: Override the makeSound method
  makeSound() {
    return "i'll use a frog, RIBBIT!!!";
  }
}

class Reptile extends Animal {
  constructor(name, species, Characteristics) {  //  4
    super(name, species, Characteristics);
  }

  // Polymorphism: Override the makeSound method
  makeSound() {
    return "don't like snakes but i'll use it. HISSS!!!";
  }
}

class Aves extends Animal {
  constructor(name, species, Characteristics) {  //  5
    super(name, species, Characteristics);
  }

  // Polymorphism: Override the makeSound method
  makeSound() {
    return "Some generic bird sound";
  }
}

class Mammal extends Animal {
  constructor(name, species, Characteristics) {  //  6
    super(name, species, Characteristics);
  }

  // Polymorphism: Override the makeSound method
  makeSound() {
    return "would love to use goat, but MEOW!!!";
  }
}

// Usage
const butterfly = new Arthropoda("Hank", "Arthropoda", "Cold Blooded & Without Backbone");
const fish = new Fish("Nemo", "Fish", "With Backbone");
const frog = new Amphibia("Chuck", "Amphibian", "With Backbone");
const tortoise = new Reptile("Speed", "Reptile", "Cold Blooded & With Backbone");
const falcon = new Aves("Swim", "Ave", "Warm-Blooded & With Backbone");
const mammal = new Mammal("Lee", "Mammal", "Warm-Blooded & With Backbone");


console.log(`Meet ${butterfly.getName()}, a/an ${butterfly.getSpecies()} while being ${butterfly.getCharacteristics()}`);
console.log(`Meet ${fish.getName()}, a/an ${fish.getSpecies()} while being ${fish.getCharacteristics()}`);
console.log(`Meet ${frog.getName()}, a/an ${frog.getSpecies()} while being ${frog.getCharacteristics()}`);
console.log(`Meet ${tortoise.getName()}, a/an ${tortoise.getSpecies()} while being ${tortoise.getCharacteristics()}`);
console.log(`Meet ${falcon.getName()}, a/an ${falcon.getSpecies()} while being ${falcon.getCharacteristics()}`);
console.log(`Meet ${mammal.getName()}, a/an ${mammal.getSpecies()} while being ${mammal.getCharacteristics()}`);

