import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { FlatList, StyleSheet, View } from 'react-native';

export default function App() {
	
	const [courseGoals, setCourseGoals] = useState([])

	const addGoalHandler = goalTitle => {
		setCourseGoals( currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle}])
	}

  return (
    <View style={styles.screen}>
			<GoalInput addGoalHandler={addGoalHandler} />
			<FlatList data={courseGoals} keyExtractor={(item, index) => index} renderItem={({item}) => (<GoalItem onDelete={() => console.log('Deleting')} item={item} />)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
		padding: 50
  }
});
