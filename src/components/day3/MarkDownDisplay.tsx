import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";

import Markdown from "react-native-markdown-display";

const MarkDownDisplay = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView
            style={styles.page}
            contentInsetAdjustmentBehavior="automatic"
        >
            <Markdown style={markdownStyles}>{children}</Markdown>
        </ScrollView>
    );
};

const markdownStyles = StyleSheet.create({
    heading1: {
        color: "#212020",
        marginBottom: 10,
        marginTop: 15,
        fontFamily: "InterBlack",
        lineHeight: 40,
    },
    heading2: {
        fontFamily: "InterBold",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 30,
        color: "#404040",
    },
    body: {
        fontSize: 16,
        // fontFamily: "Inter",
        lineHeight: 24,
    },
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
});

export default MarkDownDisplay;
