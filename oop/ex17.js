function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

var duck=Object.create(Animal.prototype); // Change this line
var beagle=Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 
