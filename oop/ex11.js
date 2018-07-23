function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

var beagle = new Dog("Snoopy");

var ownProps = [];
var prototypeProps = [];

// Add your code below this line 
for(var property in beagle)
{
  if(beagle.hasOwnProperty(property))
  {
    ownProps.push(property);
  }
  else
  {
    prototypeProps.push(property);
  }
}
console.log(ownProps);
console.log(prototypeProps);


