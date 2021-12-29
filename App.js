import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	
	const [courseGoals, setCourseGoals] = useState([])

	const addGoalHandler = goalTitle => {
		setCourseGoals( currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle}])
	}

  return (
    <View style={styles.screen}>
			<GoalInput addGoalHandler={addGoalHandler} />
			<FlatList data={courseGoals} keyExtractor={(item, index) => index} renderItem={({item}) => (<GoalItem item={item} />)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
		padding: 50
  }
});
