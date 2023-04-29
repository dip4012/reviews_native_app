import { Formik } from "formik"
import { globalStyles } from "../styles/global"
import {
	Button,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import * as yup from "yup"
import CustomButton from "../shared/CustomButton"

const reviewSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test(
			"is_num_1 - 5",
			"Rating must be a number between 1 and 5",
			(val) => parseInt(val) > 0 && parseInt(val) < 6
		),
})

export default function ReviewForm({ addReview }) {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={globalStyles.container}>
				<Formik
					initialValues={{ title: "", body: "", rating: "" }}
					validationSchema={reviewSchema}
					onSubmit={(values, actions) => {
						addReview(values)
						actions.resetForm()
					}}
				>
					{(props) => (
						<View style={{ alignItems: "center" }}>
							<TextInput
								style={globalStyles.input}
								placeholder="Review Title..."
								onChangeText={props.handleChange("title")}
								value={props.values.title}
								onBlur={props.handleBlur("title")}
							/>
							<Text style={globalStyles.errorText}>
								{props.touched.title && props.errors.title}
							</Text>
							<TextInput
								multiline
								style={globalStyles.input}
								placeholder="Review Body..."
								onChangeText={props.handleChange("body")}
								value={props.values.body}
								onBlur={props.handleBlur("body")}
							/>
							<Text style={globalStyles.errorText}>
								{props.touched.body && props.errors.body}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder="Review Rating (1 - 5)..."
								onChangeText={props.handleChange("rating")}
								value={props.values.rating}
								keyboardType="numeric"
								onBlur={props.handleBlur("rating")}
							/>
							<Text style={globalStyles.errorText}>
								{props.touched.rating && props.errors.rating}
							</Text>
							{/* <Button title="Submit" color={"darkred"} onPress={props.handleSubmit} /> */}
							<CustomButton text={"Submit"} onPressHandler={props.handleSubmit} />
						</View>
					)}
				</Formik>
			</View>
		</TouchableWithoutFeedback>
	)
}
