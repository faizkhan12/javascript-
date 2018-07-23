function makeClass() {
  "use strict";
class Thermostat
{
  constructor(value)
  {
    this._fahrenheit=value;
  }
  //getter
  get writer()
  {
    return (this._fahrenheit -32.0)* 5.0/9.0;
  }
  //setter
  set writer(value)
  {
    this._fahrenheit -(value * 9.0)/5.0 +32;
  }
}

  return Thermostat;
}
"use strict";
const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 
