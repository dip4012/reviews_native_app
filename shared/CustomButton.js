import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function ({ text, onPressHandler }) {
	return (
		<TouchableOpacity onPress={onPressHandler}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 180,
		
		borderRadius: 10,
		padding: 14,
		backgroundColor: "darkred",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		textTransform: "uppercase",
		fontFamily: "Ysabeau",
		fontSize: 13,
		fontWeight: 100,
	},
})
