import { View, Text, Button } from "react-native";
import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const ProtectedScreen = () => {
    const { signOut } = useAuthenticator();

    return (
        <View>
            <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello</Text>
            <Text
                style={{ fontFamily: "InterSemi", fontSize: 20, color: "gray" }}
            >
                You should see this page only if you are authenticated{" "}
            </Text>

            <Button color="purple" onPress={() => signOut()} title="Sign Out" />
        </View>
    );
};

export default ProtectedScreen;
