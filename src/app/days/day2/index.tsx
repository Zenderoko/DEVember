import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
            <Text>Day 2 detail screen</Text>

            <Link href="/days/day2/onboarding" asChild>
                <Button title="Go to Onboarding" />
            </Link>
        </View>
    );
};

export default DayDetailScreen;
