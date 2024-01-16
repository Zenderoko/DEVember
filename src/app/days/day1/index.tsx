import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 1" }} />

            <Text>Day detail screen</Text>
        </View>
    );
};

export default DayDetailScreen;
