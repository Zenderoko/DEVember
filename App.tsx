import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    // console.log("hello");
    // console.warn("oa");
    // console.error("chanchan");

    return (
        <View style={styles.container}>
            <Text>Test!</Text>
            <Text>#DEVemberTest!</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
