import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useMemo, useRef, useState } from "react";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";

import apartments from "@assets/data/day5/apartments.json";
import CustomMarker from "@components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const AirBnbScreen = () => {
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: -42.3769503,
        longitude: -73.65508,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    // variables
    const snapPoints = useMemo(() => [75, "50%", "90%"], []);

    const [zoom, setZoom] = useState(14);

    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                // initialRegion={mapRegion}
                region={mapRegion}
            >
                {apartments.map((apartment: any) => (
                    <CustomMarker
                        key={apartment.id}
                        apartment={apartment}
                        onPress={() => setSelectedApartment(apartment)}
                    />
                ))}
            </MapView>

            {/* Display selected Apartment Card */}
            {selectedApartment && (
                <View style={{}}>
                    <ApartmentListItem
                        apartment={selectedApartment}
                        containerStyle={{
                            position: "absolute",
                            bottom:
                                typeof snapPoints[0] === "number"
                                    ? snapPoints[0] + 10
                                    : 100,
                            right: 10,
                            left: 10,
                        }}
                    />
                </View>
            )}

            <BottomSheet
                // ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                // enablePanDownToClose
                // onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.listTitle}>
                        Over {apartments.length} places
                    </Text>
                    <BottomSheetFlatList
                        data={apartments}
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        renderItem={({ item }) => (
                            <ApartmentListItem apartment={item} />
                        )}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

export default AirBnbScreen;

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },

    listTitle: {
        textAlign: "center",
        fontFamily: "InterBold",
        fontSize: 16,
        marginVertical: 5,
        marginBottom: 20,
    },
    contentContainer: {
        flex: 1,
    },
});
