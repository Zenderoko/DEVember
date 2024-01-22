import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Pressable,
} from "react-native";
import React, { useState } from "react";

import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import Markdown from "react-native-markdown-display";

const template = ` # Markdown Editor

    Hello **World**!

`;

const EditorScreen = () => {
    const [content, setContent] = useState(template);
    const [tab, setTab] = useState("preview");

    return (
        <View style={styles.page}>
            <View style={styles.tabsContainer}>
                <Pressable
                    onPress={() => setTab("edit")}
                    style={[
                        styles.tab,
                        {
                            backgroundColor:
                                tab === "edit" ? "pink" : "whitesmoke",
                        },
                    ]}
                >
                    <Text style={styles.tabText}>Edit</Text>
                </Pressable>
                <Pressable
                    onPress={() => setTab("preview")}
                    style={[
                        styles.tab,
                        {
                            backgroundColor:
                                tab === "preview" ? "pink" : "whitesmoke",
                        },
                    ]}
                >
                    <Text style={styles.tabText}>Preview</Text>
                </Pressable>
            </View>

            {tab === "edit" ? (
                <TextInput
                    value={content}
                    onChangeText={setContent}
                    multiline
                    numberOfLines={50}
                    style={styles.input}
                />
            ) : (
                <MarkDownDisplay>{content}</MarkDownDisplay>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: "whitesmoke",
        flex: 1,
        padding: 10,
    },

    input: {
        backgroundColor: "white",
        flex: 1,
        padding: 20,
        borderRadius: 10,
        paddingTop: 20,
        fontSize: 14,
    },
    tabsContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
    },
    tab: {
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        flex: 1,
        borderRadius: 10,
        alignItems: "center",
    },
    tabText: {
        fontFamily: "InterBold",
    },
});

export default EditorScreen;
