// services/ElectricalRules.js

export const electricalRules = {

  oneBedroom: {
    cableMeters: 180,
    sockets: 12,
    switches: 10,
    breakers: 6,
    labourDays: 3
  },

  twoBedroom: {
    cableMeters: 280,
    sockets: 18,
    switches: 15,
    breakers: 8,
    labourDays: 5
  },

  threeBedroom: {
    cableMeters: 400,
    sockets: 25,
    switches: 20,
    breakers: 10,
    labourDays: 7
  },

  fourBedroom: {
    cableMeters: 550,
    sockets: 32,
    switches: 26,
    breakers: 12,
    labourDays: 10
  },

  duplex: {
    cableMeters: 800,
    sockets: 45,
    switches: 35,
    breakers: 16,
    labourDays: 14
  }

};
