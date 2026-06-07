// services/Estimator.js

import { electricalRules }
from "./ElectricalRules";

import { solarRules }
from "./SolarRules";

export function estimateProject(data){

  switch(data.service){

    case "Electrical Wiring":
      return estimateElectrical(data);

    case "Solar Installation":
      return estimateSolar(data);

    default:
      return null;
  }

}
function estimateElectrical(data){

  const property =
    electricalRules[data.propertyType];

  return {

    service: "Electrical Wiring",

    cableMeters:
      property.cableMeters,

    sockets:
      property.sockets,

    switches:
      property.switches,

    breakers:
      property.breakers,

    labourDays:
      property.labourDays

  };

}

function estimateSolar(data){

  const setup =
    solarRules[data.size];

  return {

    service: "Solar Installation",

    battery:
      setup.batteryCapacity,

    inverter:
      setup.inverter,

    panels:
      setup.panels

  };

}
