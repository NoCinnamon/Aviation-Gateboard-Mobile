import { StyleSheet, Text, View } from "react-native";

import { text } from "@/format";
import { Flight } from "@/types";

type FlightSummaryProps = {
  flight: Flight;
};

export function FlightSummary({ flight }: FlightSummaryProps) {
  const number = text(flight.flight.iata) || text(flight.flight.number) || "Flight";

  return (
    <View>
      <Text style={styles.number}>{number}</Text>
      <Text>{text(flight.airline.name) || "Unknown airline"}</Text>
      <Text>{text(flight.flight_status) || "Unknown"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    fontSize: 28,
    fontWeight: "700",
  },
});
