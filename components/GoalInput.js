import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ visible, addGoalHandler }) => {
	const [enteredGoal, setEnteredGoal] = useState('')
	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	}
	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput placeholder='Course Goal' value={enteredGoal} onChangeText={goalInputHandler} style={styles.input} />
				<Button title='ADD' onPress={() => addGoalHandler(enteredGoal)} />
			</View>
		</Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10
	},
})
