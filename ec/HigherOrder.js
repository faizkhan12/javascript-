const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = 
              realNumberArray.filter((item)=>(item===Math.floor(item))).map((item)=>item*item)
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
