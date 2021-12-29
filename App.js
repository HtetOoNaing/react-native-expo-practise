import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { Button, FlatList, StyleSheet, View } from 'react-native';

export default function App() {
	
	const [courseGoals, setCourseGoals] = useState([])
	const [isAddMode, setIsAddMode] = useState(false)

	const addGoalHandler = goalTitle => {
		setCourseGoals( currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}])
	}

	const removeGoalHandler = goalId => {
		setCourseGoals( currentGoals => currentGoals.filter(goal => goal.id !== goalId))
	}

  return (
    <View style={styles.screen}>
			<Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
			<GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} />
			<FlatList data={courseGoals} keyExtractor={(item, index) => index} renderItem={({item}) => (<GoalItem onDelete={removeGoalHandler} item={item} />)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
		padding: 50
  }
});
