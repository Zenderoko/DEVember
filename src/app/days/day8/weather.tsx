import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { FlatList } from "react-native-gesture-handler";
import ForecastItem from "@/components/day8/ForecastItem";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";

const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
const bgImage =
    "https://s2.wklcdn.com/image_9/277267/2910249/1195058Master.jpg";

type MainWeather = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
};

type Weather = {
    name: string;
    main: MainWeather;
    weather: [
        {
            id: string;
            main: string;
            description: string;
            icon: string;
        },
    ];
};

// dt : timestap
export type WeatherForecast = {
    main: MainWeather;
    dt: number;
};

const WeatherScreen = () => {
    const [location, setLocation] = useState<Location.LocationObject>();
    const [errorMsg, setErrorMsg] = useState("");
    const [weather, setWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<WeatherForecast[]>();

    useEffect(() => {
        if (location) {
            fetchWeather();
            fetchForecast();
        }
    }, [location]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log("Location: ", location);
            setLocation(location);
        })();
    }, []);

    const fetchWeather = async () => {
        if (!location) {
            return;
        }

        const results = await fetch(
            `${BASE_URL}/weather?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric&lang=sp`
        );

        const data = await results.json();
        // console.log(JSON.stringify(data, null, 2));
        setWeather(data);
    };

    const fetchForecast = async () => {
        if (!location) {
            return;
        }
        const results = await fetch(
            `${BASE_URL}/forecast?lat=${location?.coords
                .latitude}&lon=${location?.coords
                .longitude}&cnt=${8}&appid=${OPEN_WEATHER_KEY}&units=metric`
        );
        const data = await results.json();
        console.log(JSON.stringify(data, null, 2));
        setForecast(data.list);
    };

    if (!weather) {
        return <ActivityIndicator />;
    }

    return (
        <ImageBackground
            source={{
                uri: bgImage,
            }}
            style={styles.container}
        >
            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: "rgba(0, 0, 0 , 0.2)",
                }}
            />
            <Stack.Screen options={{ headerShown: false }} />
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <LottieView
                    source={
                        weather.main.temp > 20 ||
                        weather.weather[0].main !== "Rain"
                            ? require("@assets/lottie/sun3.json")
                            : require("@assets/lottie/Rain.json")
                    }
                    style={{
                        width: 200,
                        aspectRatio: 1,
                    }}
                    autoPlay
                    loop
                />
                <Text style={styles.location}>{weather.name}</Text>
                <Text style={styles.temp}>{weather.main.temp} ° </Text>
                <Text style={styles.location}>{weather.weather[0].main}</Text>
            </View>

            <FlatList
                data={forecast}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    flexGrow: 0,
                    height: 150,
                    marginBottom: 40,
                }}
                contentContainerStyle={{
                    gap: 10,
                    paddingHorizontal: 10,
                }}
                renderItem={({ item }) => <ForecastItem forecast={item} />}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    location: {
        fontFamily: "InterBlack",
        fontSize: 30,
        color: "white",
    },
    temp: {
        fontFamily: "InterBlack",
        fontSize: 70,
        color: "snow",
    },
});

export default WeatherScreen;
