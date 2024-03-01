import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
    # Weather App testing
    `;

const DayDetailScreen = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Day 8: Weather App" }} />
            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/days/day8/weather" asChild>
                <Button title="Go to the Weather" />
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailScreen;
