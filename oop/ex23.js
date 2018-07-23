function Bird() {
  var weight = 15;
  this.getWeight=function()
  {
    return weight;
  };
}
var duck=new Bird();
console.log(duck.getWeight());

