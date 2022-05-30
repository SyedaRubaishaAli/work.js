class Animal {
  constructor(name1, type123) {
    this.animalName = name1;
    this.type = type123;
  }

  getAnimal() {
    console.log("Call Animal");
    console.log(this.animalName);
    console.log(this.type);
  }
}

class Cat extends Animal{
  constructor(name1, id1, animalNAME, animalType) {
    super(animalNAME, animalType)
    this.name2 = name1;
    this.id2 = id1;
  }

  getCat() {
    console.log("Call getName");
    console.log(this.name2);
    console.log(this.id2);
    console.log(this.animalName);
    console.log(this.type);

  }
}

// const myAnimal = new Animal("Cat", 2)
// myAnimal.getAnimal()
const myCat = new Cat("Cat 123", 20000, "Animal", "u98cudu")
myCat.getCat()
myCat.getAnimal()