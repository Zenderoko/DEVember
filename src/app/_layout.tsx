import { Stack } from "expo-router";

import { useEffect, useState } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";
import amplificonfig from "@/amplifyconfiguration.json";
Amplify.configure(amplificonfig);

const theme = {
    tokens: {
        colors: {
            font: {
                primary: "black",
            },
        },
    },
};

import {
    useFonts,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
    AmaticSC_400Regular,
    AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";

import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] =
        useState(false);

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || !fontError) {
            // SplashScreen.hideAsync();
            setAppReady(true);
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    const showAnimatedSplash = !appReady || !splashAnimationFinished;

    return (
        <Authenticator.Provider>
            <ThemeProvider theme={theme}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    {showAnimatedSplash ? (
                        <AnimatedSplashScreen
                            onAnimationFinish={(isCancelled) => {
                                if (!isCancelled)
                                    setSplashAnimationFinished(true);
                            }}
                        />
                    ) : (
                        <Animated.View style={{ flex: 1 }} entering={FadeIn}>
                            <Stack screenOptions={{}}>
                                <Stack.Screen
                                    name="index"
                                    options={{ title: "DEVember" }}
                                />
                            </Stack>
                        </Animated.View>
                    )}
                </GestureHandlerRootView>
            </ThemeProvider>
        </Authenticator.Provider>
    );
}
