export type FlightStop = {
  airport: string | null;
  timezone: string | null;
  iata: string | null;
  gate: string | null;
  scheduled: string | null;
};

export type Flight = {
  flight_status: string;
  departure: FlightStop;
  arrival: FlightStop;
  airline: {
    name: string | null;
  };
  flight: {
    number: string | null;
    iata: string | null;
  };
};
