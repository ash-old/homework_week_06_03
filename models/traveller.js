const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(journeys) {
  const result = this.journeys.map(journey => journey.startLocation);
  return result;
};

Traveller.prototype.getJourneyEndLocations = function (journeys) {
  const result = this.journeys.map(journey => journey.endLocation);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  // let listOfJourneys = [];
  //   const result = this.journeys.filter((journey)=>{
  //   if(journey.transport === transport);
  //   listOfJourneys.push(journey);
  // });
  // return listOfJourneys;

  let listOfJourneysByTransport = [];
   const result = this.journeys.filter((journey)=>{
     if (journey.transport === transport)
       listOfJourneysByTransport.push(journey)
   });
   return listOfJourneysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let distance = [];
  const result = this.journeys.filter((journey)=>{
    if(journey.distance > 1000)
    distance.push(journey)
  });
  return distance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0;
  this.journeys.forEach((journey)=>{
    total += journey.distance;
  })
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = [];
  const result = this.journeys.map((journey)=>{
    return journey.transport;
    modesOfTransport.push(result)
  })
  return modesOfTransport;
};


module.exports = Traveller;
