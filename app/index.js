import { Stack } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import ScreenHeaderBtn from "/Users/rishabhraghav/Desktop/projects/reactNative/jobPortal/components/common/header/ScreenHeaderBtn.jsx";

import { COLORS, icons, images } from "../constants";

const Home = () => {
    return (
    <SafeAreaView style={{backgroundColor: COLORS.lightWhite, flex: 1}}>
        <Stack.Screen 
        options={{
            headerStyle: {
                backgroundColor: COLORS.lightWhite,
                height: 80
            },
            headerShadowVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn iconURL={icons.menu} dimensions="60%"/>
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconURL={images.profile} dimensions="100%"/>
            ),
            headerTitle: ""
        }}/>
    </SafeAreaView>
    )
}

export default Home;