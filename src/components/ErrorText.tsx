import { StyleSheet, Text } from "react-native";

type ErrorTextProps = {
  message: string;
};

export function ErrorText({ message }: ErrorTextProps) {
  if (!message) {
    return null;
  }

  return <Text style={styles.message}>{message}</Text>;
}

const styles = StyleSheet.create({
  message: {
    color: "red",
  },
});
