import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type ScreenProps = {
  children: ReactNode;
};

export function Screen({ children }: ScreenProps) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
});
