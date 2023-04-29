import "react-native-gesture-handler"
import {
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import About from "./screens/About"
import { useFonts } from "expo-font"
import { useCallback } from "react"
import * as SplashScreen from "expo-splash-screen"
import { globalStyles } from "./styles/global"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeStack from "./screens/HomeStack"
import AboutStack from "./screens/AboutStack"

SplashScreen.preventAutoHideAsync()

const RootDrawer = createDrawerNavigator()

export default function App() {
	const [fontsLoaded] = useFonts({
		YsabeauItalic: require("./assets/fonts/Ysabeau-Italic-VariableFont_wght.ttf"),
		Ysabeau: require("./assets/fonts/Ysabeau-VariableFont_wght.ttf"),
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) return null

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.rootContainer} onLayout={onLayoutRootView}>
				<NavigationContainer>
					<RootDrawer.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<RootDrawer.Screen
							name="HomeStack"
							component={HomeStack}
							options={{ title: "Home" }}
						/>
						<RootDrawer.Screen
							name="AboutStack"
							component={AboutStack}
							options={{ title: "About" }}
						/>
					</RootDrawer.Navigator>
				</NavigationContainer>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
})
