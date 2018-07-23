function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;
var duck = new Bird();
var beagle = new Dog();
duck.constructor;
beagle.constructor;
