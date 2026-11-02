import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";

type CenterMessageProps = {
  message: string;
  loading?: boolean;
  tryAgain?: () => void;
};

export function CenterMessage({ message, loading, tryAgain }: CenterMessageProps) {
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" /> : null}
      <Text style={styles.message}>{message}</Text>
      {tryAgain ? <PrimaryButton label="Try again" onPress={tryAgain} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 20,
  },
  message: {
    fontSize: 17,
    textAlign: "center",
  },
});
