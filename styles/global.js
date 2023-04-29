import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	titleText: {
		fontFamily: "Ysabeau",
		fontSize: 16,
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
	},
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "darkred",
		borderRadius: 15,
		padding: 10,
		marginBottom: 5,
	},
	errorText: {
		marginLeft: 10,
		marginBottom: 12,
		color: "red",
	},
})

export const images = {
	ratings: {
		1: require("../assets/rating-1.png"),
		2: require("../assets/rating-2.png"),
		3: require("../assets/rating-3.png"),
		4: require("../assets/rating-4.png"),
		5: require("../assets/rating-5.png"),
	},
}
