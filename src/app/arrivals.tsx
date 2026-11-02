import { useLocalSearchParams } from "expo-router";

import { getArrivals } from "@/api/aviationstack";
import { CenterMessage } from "@/components/CenterMessage";
import { FlightBoard } from "@/components/FlightBoard";

function threeLetters(code: string) {
  return /^[A-Z]{3}$/.test(code);
}

export default function ArrivalsScreen() {
  const { airport } = useLocalSearchParams<{ airport?: string }>();
  const code = String(airport ?? "").toUpperCase();

  if (!threeLetters(code)) {
    return <CenterMessage message="Enter a 3-letter airport code from the home screen." />;
  }

  return (
    <FlightBoard
      airport={code}
      load={getArrivals}
      emptyMessage={`No arrivals found for ${code}.`}
    />
  );
}
