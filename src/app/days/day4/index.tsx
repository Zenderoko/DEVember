import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
    # Animated Splash Screen
    `;

const DayDetailScreen = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Day 4: Animation Screen" }} />
            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/days/day4/animation" asChild>
                <Button title="Go to the animation" />
            </Link>
            <Link href="/days/day4/splash" asChild>
                <Button title="splash screen animation" />
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailScreen;
