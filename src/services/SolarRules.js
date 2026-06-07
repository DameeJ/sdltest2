// services/SolarRules.js

export const solarRules = {

  smallHome: {
    batteryCapacity: "5kWh",
    inverter: "3.5kVA",
    panels: 4
  },

  mediumHome: {
    batteryCapacity: "10kWh",
    inverter: "5kVA",
    panels: 8
  },

  largeHome: {
    batteryCapacity: "15kWh",
    inverter: "10kVA",
    panels: 12
  },

  commercial: {
    batteryCapacity: "30kWh",
    inverter: "20kVA",
    panels: 24
  }

};
