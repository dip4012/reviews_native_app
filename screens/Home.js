import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { globalStyles } from "../styles/global"
import { useState } from "react"
import Card from "../shared/Card"

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{
			title: "The phsycology of money",
			rating: 4,
			body: "lorem ipsum dolor",
			id: 1,
		},
		{
			title: "Atomic Habbits",
			rating: 5,
			body: "lorem ipsum dolor",
			id: 2,
		},
		{
			title: "Get epic shit done",
			rating: 4,
			body: "lorem ipsum dolor",
			id: 3,
		},
	])
	return (
		<View style={globalStyles.container}>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
