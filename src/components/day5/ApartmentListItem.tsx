import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";
import apartments from "@assets/data/day5/apartments.json";

type ApartmentListItem = {
    apartment: (typeof apartments)[0];
    containerStyle?: ViewStyle;
};

const ApartmentListItem = ({
    apartment,
    containerStyle = {},
}: ApartmentListItem) => {
    return (
        <View style={[styles.card, containerStyle]}>
            <Image style={styles.image} source={{ uri: apartment.image }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{apartment.title}</Text>
                <Text style={styles.description}>{apartment.description}</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>$ {apartment.price} day</Text>
                    <Text style={styles.price}>
                        ★ {apartment.rating} ({apartment.numberOfStars})
                    </Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        // position: "absolute",
        // bottom: 70,
        // left: 10,
        // right: 10,

        flexDirection: "row",
        borderRadius: 20,
        overflow: "hidden",
    },
    image: {
        width: 150,
        aspectRatio: 1,
    },

    rightContainer: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontFamily: "InterBold",
        marginBottom: 10,
    },
    description: {
        color: "gray",
    },
    price: {
        fontFamily: "InterBold",
    },

    footer: {
        flexDirection: "row",
        marginTop: "auto",
        justifyContent: "space-between",
    },
});

export default ApartmentListItem;
