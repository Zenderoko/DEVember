import { View, StyleSheet } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const AnimatedSplashScreen = ({
    onAnimationFinish = () => {},
}: {
    onAnimationFinish: () => void;
}) => {
    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                ref={animation}
                onAnimationFinish={onAnimationFinish}
                loop={false}
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

export default AnimatedSplashScreen;

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});
