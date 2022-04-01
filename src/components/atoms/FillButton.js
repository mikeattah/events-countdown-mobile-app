import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function FillButton({ ...props }) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Cancel and go to EventsScreen");
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "45%",
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "coral",
  },
});

export default FillButton;