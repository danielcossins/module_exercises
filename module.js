var SolarSystem = function(solarSystem) {
  var closest5 = ["alpha 34", "beta boy", "large star 2", "asdf", "qwerty's star"];
  var ageInEarthYears = 4600000000;
  var knownDwarfPlanets = ["Pluto","little planet", "pathetic planet", "not a planet"];

  
  solarSystem.getClosest5 = function(){
    return closest5;
  };
  solarSystem.getAge = function(){
    return ageInEarthYears;
  };
  solarSystem.setAge = function(num){
    ageInEarthYears = num;
    return ageInEarthYears;
  };
  solarSystem.getDwarfs = function(){
    return knownDwarfPlanets;
  }
  solarSystem.setDwarfs = function(arr){
    knownDwarfPlanets = arr;
    return knownDwarfPlanets;
  }

  return solarSystem;
}(SolarSystem);

console.log(SolarSystem);
console.log(SolarSystem.getClosest5());
console.log(SolarSystem.getAge());
SolarSystem.setAge(123456789);
console.log(SolarSystem.getAge());
console.log(SolarSystem.getDwarfs());
SolarSystem.setDwarfs(["asdf", "gea", "ewr"]);
console.log(SolarSystem.getDwarfs());