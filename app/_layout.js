import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
 
import * as splashScreen from "expo-splash-screen";

splashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsloaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    })

    const onLayoutRootView = useCallback(async()=> {
        if(fontsloaded) await splashScreen.hideAsync();
    }, [fontsloaded])
    if(!fontsloaded) return null
    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;