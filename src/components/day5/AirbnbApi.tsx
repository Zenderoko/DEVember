import { View, Text } from "react-native";
import React, { useEffect } from "react";

const AirbnbApi = () => {
    useEffect(() => {
        getAirbnbData();
    }, []);

    const getAirbnbData = () => {
        const URL =
            "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=20";

        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View>
            <Text>AirbnbApi</Text>
        </View>
    );
};

export default AirbnbApi;
