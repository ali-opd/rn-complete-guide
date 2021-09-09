import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalTitle) {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View>
        <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={(itemData) => <GoalItem title={itemData.item.value} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

{
  /*  */
}

{
  /* <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>1</Text>
      </View>
      <View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', flex: 2 }}>
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
        <Text>3</Text>
      </View> */
}
