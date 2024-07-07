import React from "react";
import { StyleSheet, View, Text } from "react-native";

function goalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goatTex}>{props.text}</Text>
    </View>
  );
}
export default goalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    padding: 12,
    margin: 8,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goatTex: {
    color: "white",
  },
});
