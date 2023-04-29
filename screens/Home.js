import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { globalStyles } from "../styles/global"
import { useState } from "react"
import Card from "../shared/Card"
import { MaterialIcons } from "@expo/vector-icons"
import ReviewForm from "./ReviewForm"

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false)
	const [reviews, setReviews] = useState([
		{
			title: "The phsycology of money",
			rating: 1,
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

	const addReview = (review) => {
		setReviews((prevReviews) => [
			...prevReviews,
			{ ...review, id: prevReviews.length + 1 },
		])
		setModalOpen(false)
	}

	return (
		<View style={globalStyles.container}>
			<Modal animationType="slide" transparent={false} visible={modalOpen} style>
				<View style={styles.modalContent}>
					<MaterialIcons
						name="close"
						size={24}
						onPress={() => {
							setModalOpen(false)
						}}
						style={styles.modalToggle}
					/>
					<ReviewForm addReview={addReview} />
				</View>
			</Modal>
			<MaterialIcons
				name="add"
				size={24}
				onPress={() => {
					setModalOpen(true)
				}}
				style={styles.modalToggle}
			/>
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

const styles = StyleSheet.create({
	modalToggle: {
		position: "absolute",
		bottom: 20,
		right: 20,
		zIndex: 100,
		backgroundColor: "darkred",
		padding: 16,
		color: "white",
		borderRadius: 50,
	},
	modalContent: {
		flex: 1,
	},
})
