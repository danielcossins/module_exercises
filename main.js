var SolarSystem = function() {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var numHumanPlanets = 4;
  var currentSpaceShips = ["a", "b", "c"];

  return {
    modifiedDate: new Date(),
    getPlanets: function(){
      return planets;
    },
    getHumanPlanets: function(){
      return numHumanPlanets;
    },
    setHumanPlanets: function(num){
      numHumanPlanets = num;
      return numHumanPlanets;
    },
    getCurrentSpaceShips: function(){
      return currentSpaceShips;
    },
    setCurrentSpaceShips: function(arr){
      if(arr!=null){
        return currentSpaceShips = arr;
      }
    }
  };
}();

// console.log(SolarSystem);
// console.log(SolarSystem.getCurrentSpaceShips());
// SolarSystem.setCurrentSpaceShips();
// console.log(SolarSystem.getCurrentSpaceShips());