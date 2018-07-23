function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
var canary = new Bird("Tweety");
var ownProps = [];
// Add your code below this line
for(var property in canary)
{
  if(canary.hasOwnProperty(property))
  {
    ownProps.push(property);
  }
}
console.log(ownProps);


