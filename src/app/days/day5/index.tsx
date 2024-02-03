import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
    # AirBNB Maps
    `;

const DayDetailScreen = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Day 5: AirBNB Maps" }} />
            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/days/day5/airbnb" asChild>
                <Button title="Go to the AirBNB maps" />
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailScreen;
