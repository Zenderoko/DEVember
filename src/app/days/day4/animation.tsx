import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.animationContainer}>
            <Stack.Screen options={{ headerShown: false }} />
            <LottieView
                ref={animation}
                autoPlay
                style={{
                    width: "80%",
                    maxWidth: 400,
                    // backgroundColor: "#eee",
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("@assets/lottie/netflix")}
            />
        </View>
    );
};

export default AnimationScreen;

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});
