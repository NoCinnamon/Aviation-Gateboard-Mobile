import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: false,
        headerStyle: { backgroundColor: "#fff" },
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Aviation Gateboard" }} />
      <Stack.Screen name="departures" options={{ title: "Departures" }} />
      <Stack.Screen name="arrivals" options={{ title: "Arrivals" }} />
      <Stack.Screen name="flight" options={{ title: "Flight" }} />
    </Stack>
  );
}
