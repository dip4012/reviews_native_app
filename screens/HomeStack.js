import Header from "../shared/Header"
import Home from "./Home"
import ReviewDetails from "./ReviewDetails"
import { createStackNavigator } from "@react-navigation/stack"
import { getHeaderTitle } from "@react-navigation/elements"
import { Button } from "react-native"

const Stack = createStackNavigator()

export default function HomeStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#444",
				},
				headerTintColor: "white",
				headerTitleStyle: {
					fontFamily: "Ysabeau",
					fontWeight: 300,
					fontSize: 16,
				},
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					header: ({ navigation, route, options }) => {
						const title = getHeaderTitle(options, route.name)

						return <Header title={"BookWom"} navigation={navigation} />
					},
				}}
			/>
			<Stack.Screen
				name="Details"
				component={ReviewDetails}
				options={({ route }) => ({
					title: route.params.title,
				})}
			/>
		</Stack.Navigator>
	)
}
