import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function goalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goatTex}>{props.text}</Text>
      </View>
    </Pressable>
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
