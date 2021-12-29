import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ addGoalHandler }) => {
	const [enteredGoal, setEnteredGoal] = useState('')
	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	}
	return (
		<View style={styles.inputContainer}>
			<TextInput placeholder='Course Goal' value={enteredGoal} onChangeText={goalInputHandler} style={styles.input} />
			<Button title='ADD' onPress={() => addGoalHandler(enteredGoal)} />
		</View>
	)
}

export default GoalInput

const styles = StyleSheet.create({
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
	},
})
