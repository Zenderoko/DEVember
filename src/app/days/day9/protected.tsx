import { View, Text } from "react-native";
import React from "react";

const ProtectedScreen = () => {
    return (
        <View>
            <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello</Text>
            <Text
                style={{ fontFamily: "InterSemi", fontSize: 20, color: "gray" }}
            >
                You should see this page only if you are authenticated{" "}
            </Text>
        </View>
    );
};

export default ProtectedScreen;
