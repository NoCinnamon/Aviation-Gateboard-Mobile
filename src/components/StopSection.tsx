import { StyleSheet, Text, View } from "react-native";

import { formatWhen, text } from "@/format";
import { FlightStop } from "@/types";

type StopSectionProps = {
  title: string;
  stop: FlightStop;
};

export function StopSection({ title, stop }: StopSectionProps) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <Text>{text(stop.airport) || "Unknown airport"}</Text>
      <Text>{formatWhen(stop.scheduled, stop.timezone)}</Text>
      <Text>Gate {text(stop.gate) || "—"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "700",
  },
});
