import { StyleSheet, View } from "react-native"

export default function (props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#fff",
		shadowColor: "#333",
		shadowOffset: {
			width: 1,
			height: -1,
		},
		shadowOpacity: 0.3,
		shadowRadius: 6,
		marginVertical: 10,
		marginHorizontal: 8,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 10,
	},
})
