import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GoalItem = ({item}) => {
	return (
		<View style={styles.listItem}><Text>{item.value}</Text></View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginTop: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
})
