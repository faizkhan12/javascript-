function makeClass() {
  "use strict";
class Vegetable{
  constructor(Vegetable){
    this.Vegetable=Vegetable;
  }
}
 
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log('carrot'); 
