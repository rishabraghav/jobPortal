import { Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import ScreenHeaderBtn from "/Users/rishabhraghav/Desktop/projects/reactNative/jobPortal/components/common/header/ScreenHeaderBtn.jsx";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";

import { COLORS, SIZES, icons, images } from "../constants";

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
        <ScrollView>
            <View style={{flex: 1, padding: SIZES.medium}}>
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;