import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = ` # Authentication  
AWS Amplify v6 Authentication`;

const DayDetailScreen = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Day 9: Auth" }} />
            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/days/day9/protected" asChild>
                <Button title="Go to the Protected Page" />
            </Link>

            <Link href="/days/day9/auth/sign-in" asChild>
                <Button title="Go to SignIn" />
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailScreen;
