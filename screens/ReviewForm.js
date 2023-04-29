import { Formik } from "formik"
import { globalStyles } from "../styles/global"
import { Button, Keyboard, TouchableWithoutFeedback, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export default function ReviewForm({ addReview }) {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={globalStyles.container}>
				<Formik
					initialValues={{ title: "", body: "", rating: "" }}
					onSubmit={(values, actions) => {
						addReview(values)
						actions.resetForm()
					}}
				>
					{(props) => (
						<View>
							<TextInput
								style={globalStyles.input}
								placeholder="Review Title..."
								onChangeText={props.handleChange("title")}
								value={props.values.title}
							/>
							<TextInput
								multiline
								style={globalStyles.input}
								placeholder="Review Body..."
								onChangeText={props.handleChange("body")}
								value={props.values.body}
							/>
							<TextInput
								style={globalStyles.input}
								placeholder="Review Rating (1 - 5)..."
								onChangeText={props.handleChange("rating")}
								value={props.values.rating}
								keyboardType="numeric"
							/>
							<Button title="Submit" color={"darkred"} onPress={props.handleSubmit} />
						</View>
					)}
				</Formik>
			</View>
		</TouchableWithoutFeedback>
	)
}
