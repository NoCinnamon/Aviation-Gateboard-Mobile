import { Flight } from "@/types";

let current: Flight | null = null;

export function rememberFlight(flight: Flight) {
  current = flight;
}

export function rememberedFlight() {
  return current;
}
