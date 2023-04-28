import { StyleSheet, Text, View } from "react-native"

export default function ReviewDetails() {
	return (
		<View style={styles.container}>
			<Text>Review Details Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
	},
})
