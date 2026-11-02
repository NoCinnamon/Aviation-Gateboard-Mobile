import { useState } from "react";
import { router } from "expo-router";

import { AirportCodeInput } from "@/components/AirportCodeInput";
import { ErrorText } from "@/components/ErrorText";
import { HomePrompt } from "@/components/HomePrompt";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";

export default function HomeScreen() {
  const [airport, setAirport] = useState("SLC");
  const [message, setMessage] = useState("");

  function openBoard(pathname: "/departures" | "/arrivals") {
    const code = airport.trim().toUpperCase();
    if (code.length !== 3) {
      setMessage("Enter a 3-letter airport code, such as SLC.");
      return;
    }

    setMessage("");
    router.push({ pathname, params: { airport: code } });
  }

  return (
    <Screen>
      <HomePrompt />
      <AirportCodeInput
        value={airport}
        onChangeText={(value) => {
          setAirport(value);
          setMessage("");
        }}
      />
      <ErrorText message={message} />
      <PrimaryButton label="Departures" onPress={() => openBoard("/departures")} />
      <PrimaryButton label="Arrivals" onPress={() => openBoard("/arrivals")} />
    </Screen>
  );
}
