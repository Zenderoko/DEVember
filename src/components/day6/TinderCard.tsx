import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const TinderCardWidth = Dimensions.get("screen").width * 0.8;

type TinderCard = {
    user: {
        image: string;
        name: string;
    };
    numOfCards: number;
    curIndex: number;
};

const TinderCard = ({ user, numOfCards, curIndex }: TinderCard) => {
    return (
        <View
            style={[
                styles.card,
                {
                    zIndex: numOfCards - curIndex,
                    // opacity: 0.3,
                    transform: [{ scale: 1 - curIndex * 0.1 }],
                },
            ]}
        >
            <Image
                style={[StyleSheet.absoluteFillObject, styles.image]}
                source={{ uri: user.image }}
            />

            <LinearGradient
                // Background Linear Gradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={[StyleSheet.absoluteFillObject, styles.overlay]}
            />

            <View style={styles.footer} />
            <Text style={styles.name}>{user.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: TinderCardWidth,
        height: TinderCardWidth * 1.67,
        aspectRatio: 1.67,
        // marginTop: 50,

        borderRadius: 15,
        justifyContent: "flex-end",

        position: "absolute",

        // shadow,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    image: { borderRadius: 15 },
    footer: { padding: 10 },
    name: { fontSize: 24, color: "white" },
    overlay: {
        top: "50%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
});

export default TinderCard;
