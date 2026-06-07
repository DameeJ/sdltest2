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
