import { ScrollView } from "react-native";

import { CenterMessage } from "@/components/CenterMessage";
import { FlightSummary } from "@/components/FlightSummary";
import { Screen } from "@/components/Screen";
import { StopSection } from "@/components/StopSection";
import { rememberedFlight } from "@/selectedFlight";

export default function FlightScreen() {
  const flight = rememberedFlight();

  if (!flight) {
    return <CenterMessage message="Go back and choose a flight from the list." />;
  }

  return (
    <ScrollView>
      <Screen>
        <FlightSummary flight={flight} />
        <StopSection title="Departure" stop={flight.departure} />
        <StopSection title="Arrival" stop={flight.arrival} />
      </Screen>
    </ScrollView>
  );
}
