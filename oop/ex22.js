var bird = {
  name: "Donald",
  numLegs: 2
};
var boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
var glideMixin=function(obj)
{
    obj.glide=function() 
    {
        console.log("Gliding");
    }
};
glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();





