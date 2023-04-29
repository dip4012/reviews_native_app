import { StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function Header({ title, navigation }) {
	const openDrawerHandler = () => {
		navigation.openDrawer()
	}

	return (
		<View style={styles.header}>
			<MaterialIcons
				name="menu"
				size={24}
				onPress={openDrawerHandler}
				style={styles.icon}
			/>
			<View>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		padding: 20,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		backgroundColor: "darkred",
		shadowColor: "#000",
	},
	headerText: {
		fontFamily: "Ysabeau",
		fontWeight: 500,
		fontSize: 20,
		color: "white",
	},
	icon: {
		position: "absolute",
		left: 16,
		top: 34,
		color: "white",
	},
})
