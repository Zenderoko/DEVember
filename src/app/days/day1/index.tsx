import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AirbnbApi from "@/components/day5/AirbnbApi";

const DayDetailScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 1" }} />

            <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
                Day detail screen
            </Text>
        </View>
    );
};

export default DayDetailScreen;
