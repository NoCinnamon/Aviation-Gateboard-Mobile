import { Pressable, StyleSheet, Text } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

export function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: "#0B3A5B",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
});
