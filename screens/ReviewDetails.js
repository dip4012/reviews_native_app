import { Image, StyleSheet, Text, View } from "react-native"
import { globalStyles, images } from "../styles/global"
import Card from "../shared/Card"

export default function ReviewDetails({ route }) {
	const item = route.params
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{item.title}</Text>
				<Image source={images.ratings[item.rating]} />
				<Text style={globalStyles.titleText}>{item.body}</Text>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({})
