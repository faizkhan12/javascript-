function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype=Object.create(Animal.prototype);

var beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
