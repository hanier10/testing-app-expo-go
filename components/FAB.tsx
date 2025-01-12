import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  label: string;

  //Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress }: Props) {
  return (
    <Pressable
      style={styles.floatingButton}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.textButton}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },

  textButton: {
    color: "white",
    fontSize: 20,
  },
});
