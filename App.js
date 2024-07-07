import React, { cloneElement, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGolas, setCourseGoals] = useState([]);

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random.toString },
    ]);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course Goal"
        ></TextInput>

        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>

      <View style={styles.detailsContainer}>
        <FlatList
          data={courseGolas}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goatTex}>{itemData.item.text}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  textInputContainer: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
  },

  detailsContainer: {
    flex: 5,
  },

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
