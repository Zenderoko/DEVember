import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, Link, router } from "expo-router";
import Animated, {
    FadeIn,
    FadeOut,
    BounceInLeft,
    BounceInRight,
    SlideOutLeft,
    SlideInRight,
} from "react-native-reanimated";

import {
    GestureDetector,
    Gesture,
    Directions,
} from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const onboardingSteps = [
    {
        icon: "snowflake",
        title: "Welcome Page",
        description: "Description Welcome Page oa",
    },

    {
        icon: "people-arrows",
        title: "Track every transactions",
        description:
            "Monitor your spending contribution, ensuring every penny aligns with your familiy aspirations",
    },

    {
        icon: "book-reader",
        title: "Track every transactions",
        description:
            "Monitor your spending contribution, ensuring every penny aligns with your familiy aspirations",
    },
];

const OnboardingScreen = () => {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />

            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View
                        style={[
                            styles.stepIndicator,
                            {
                                backgroundColor:
                                    index === screenIndex ? "white" : "grey",
                            },
                        ]}
                        key={index}
                    />
                ))}
            </View>

            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent} key={screenIndex}>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5
                            style={styles.image}
                            name={data.icon}
                            size={100}
                            color="#CEF202"
                        />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={styles.title}
                        >
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft}
                            style={styles.description}
                        >
                            {data.description}
                        </Animated.Text>

                        <View style={styles.buttonsRow}>
                            <Text
                                onPress={endOnboarding}
                                style={styles.buttonText}
                            >
                                Skip
                            </Text>

                            <Pressable
                                onPress={onContinue}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        // alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#15141A",
        paddingTop: 40,
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },

    title: {
        color: "#FDFDFD",
        fontFamily: "InterBlack",
        fontSize: 50,
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    image: {
        alignSelf: "center",
        margin: 40,
        marginTop: 70,
    },
    description: {
        color: "gray",
        fontSize: 20,
        fontFamily: "Inter",
        lineHeight: 27,
    },
    footer: {
        marginTop: "auto",
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    button: {
        backgroundColor: "#202224",
        alignItems: "center",
        borderRadius: 50,
        flex: 1,
    },
    buttonText: {
        color: "#FDFDFD",
        fontSize: 20,
        fontFamily: "InterBold",
        padding: 15,
        paddingHorizontal: 20,
    },

    // steps

    stepIndicatorContainer: {
        flexDirection: "row",
        gap: 8,
        marginHorizontal: 15,
    },

    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: "gray",
        borderRadius: 10,
    },
});

export default OnboardingScreen;
