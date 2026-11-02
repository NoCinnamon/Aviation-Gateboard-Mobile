import { Pressable, StyleSheet, Text } from "react-native";

import { formatWhen, text } from "@/format";
import { Flight } from "@/types";

type FlightRowProps = {
  flight: Flight;
  onPress: (flight: Flight) => void;
};

export function FlightRow({ flight, onPress }: FlightRowProps) {
  const number = text(flight.flight.iata) || text(flight.flight.number) || "Flight";
  const from = text(flight.departure.iata) || "—";
  const to = text(flight.arrival.iata) || "—";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress(flight)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Text style={styles.number}>{number}</Text>
      <Text>{text(flight.airline.name) || "Unknown airline"}</Text>
      <Text>
        {from} → {to}
      </Text>
      <Text>{formatWhen(flight.departure.scheduled, flight.departure.timezone)}</Text>
      <Text>{text(flight.flight_status) || "Unknown"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f7fb",
    borderWidth: 1,
    borderColor: "#d5dee8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  number: {
    fontSize: 18,
    fontWeight: "700",
  },
});
