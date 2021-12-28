import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('')
	const [courseGoals, setCourseGoals] = useState([])

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	}

	const addGoalHandler = () => {
		setCourseGoals( currentGoals => [...currentGoals, enteredGoal])
	}

  return (
    <View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput placeholder='Course Goal' value={enteredGoal} onChangeText={goalInputHandler} style={styles.input} />
				<Button title='ADD' onPress={addGoalHandler} />
			</View>
			<View>
				{courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
		padding: 50
  },
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10
	}
});
