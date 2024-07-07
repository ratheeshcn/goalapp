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

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGolas, setCourseGoals] = useState([]);

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random.toString },
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
            return <GoalItem item={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
});
