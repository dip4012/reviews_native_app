import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../styles/global"

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>About Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
