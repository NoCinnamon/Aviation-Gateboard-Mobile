import { StyleSheet, TextInput } from "react-native";

type AirportCodeInputProps = {
  value: string;
  onChangeText: (value: string) => void;
};

export function AirportCodeInput({ value, onChangeText }: AirportCodeInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={(nextValue) => onChangeText(nextValue.toUpperCase())}
      autoCapitalize="characters"
      autoCorrect={false}
      maxLength={3}
      placeholder="SLC"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 22,
  },
});
