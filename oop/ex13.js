function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs:4,
  eat:function()
  {
    console.log("eat eat eat");
  },
  describe:function()
  {
    console.log("The name is "+this.name);
  }
};
