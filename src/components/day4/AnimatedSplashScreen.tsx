import { View, StyleSheet } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, {
    FadeIn,
    FadeOut,
    ZoomIn,
    ZoomOut,
} from "react-native-reanimated";
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
    onAnimationFinish = (isCancelled) => {},
}: {
    onAnimationFinish: (isCancelled: boolean) => void;
}) => {
    const animation = useRef<LottieView>(null);

    return (
        <Animated.View style={styles.animationContainer}>
            <AnimatedLottieView
                exiting={ZoomOut}
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
        </Animated.View>
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
