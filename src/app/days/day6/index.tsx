import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
    # Tinder Animation Testing
    `;

const DayDetailScreen = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen
                options={{ title: "Day 6: Tinder Swipe Animation" }}
            />
            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/days/day6/tinder" asChild>
                <Button title="Go to the Animation" />
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailScreen;
