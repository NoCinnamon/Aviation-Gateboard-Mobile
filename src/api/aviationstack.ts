import { Flight } from "@/types";

const FLIGHTS_URL = "https://api.aviationstack.com/v1/flights";
const RESULT_LIMIT = "10";

type FlightFilter = {
  dep_iata?: string;
  arr_iata?: string;
};

async function requestFlights(filter: FlightFilter): Promise<Flight[]> {
  const key = process.env.EXPO_PUBLIC_AVIATIONSTACK_KEY;
  if (!key) {
    throw new Error("Add your Aviationstack key to the .env file, then restart Expo.");
  }

  const params = new URLSearchParams({
    access_key: key,
    limit: RESULT_LIMIT,
    ...filter,
  });

  const response = await fetch(`${FLIGHTS_URL}?${params.toString()}`);
  const body = await response.json();

  if (!response.ok || body.error) {
    throw new Error(body.error?.message || "Could not load flights.");
  }

  return Array.isArray(body.data) ? body.data : [];
}

export function getDepartures(airportCode: string) {
  return requestFlights({ dep_iata: airportCode });
}

export function getArrivals(airportCode: string) {
  return requestFlights({ arr_iata: airportCode });
}
