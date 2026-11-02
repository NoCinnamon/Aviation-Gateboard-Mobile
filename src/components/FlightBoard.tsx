import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { router } from "expo-router";

import { CenterMessage } from "@/components/CenterMessage";
import { FlightRow } from "@/components/FlightRow";
import { rememberFlight } from "@/selectedFlight";
import { Flight } from "@/types";

type FlightBoardProps = {
  airport: string;
  load: (airportCode: string) => Promise<Flight[]>;
  emptyMessage: string;
};

export function FlightBoard({ airport, load, emptyMessage }: FlightBoardProps) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadFlights() {
    setLoading(true);
    setError(null);
    try {
      const [nextFlights] = await Promise.all([
        load(airport),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);
      setFlights(nextFlights);
    } catch (loadError) {
      setFlights([]);
      setError(loadError instanceof Error ? loadError.message : "Could not load flights.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFlights();
  }, [airport, load]);

  function openFlight(flight: Flight) {
    rememberFlight(flight);
    router.push("/flight");
  }

  if (loading) {
    return <CenterMessage message="Loading flights..." loading />;
  }

  if (error) {
    return <CenterMessage message={error} tryAgain={loadFlights} />;
  }

  return (
    <FlatList
      data={flights}
      keyExtractor={(flight, index) => `${flight.flight.iata ?? "flight"}-${index}`}
      contentContainerStyle={{ padding: 20 }}
      ListEmptyComponent={<CenterMessage message={emptyMessage} />}
      renderItem={({ item }) => <FlightRow flight={item} onPress={openFlight} />}
    />
  );
}
