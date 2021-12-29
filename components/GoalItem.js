import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const GoalItem = ({item, onDelete}) => {
	return (
		<TouchableOpacity onPress={() => onDelete(item.id)}><View style={styles.listItem}><Text>{item.value}</Text></View></TouchableOpacity>
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
