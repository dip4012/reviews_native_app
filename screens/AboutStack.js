import About from "./About"
import { getHeaderTitle } from "@react-navigation/elements"
import { createStackNavigator } from "@react-navigation/stack"
import Header from "../shared/Header"

const Stack = createStackNavigator()

export default function AboutStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				header: ({ navigation, route, options }) => {
					const title = getHeaderTitle(options, route.name)

					return <Header title={title} navigation={navigation} />
				},
			}}
		>
			<Stack.Screen name="About" component={About} />
		</Stack.Navigator>
	)
}
