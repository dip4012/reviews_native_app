import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../styles/global"
import Card from "../shared/Card"

export default function ReviewDetails({ route }) {
	const item = route.params
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{item.title}</Text>
				<Text style={globalStyles.titleText}>{item.rating}</Text>
				<Text style={globalStyles.titleText}>{item.body}</Text>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({})
