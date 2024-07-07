import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalsHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course Goal"
        value={enteredGoalText}
      ></TextInput>

      <Button title="Add Goal" onPress={addGoalsHandler}></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
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

  detailsContainer: {
    flex: 5,
  },
});
