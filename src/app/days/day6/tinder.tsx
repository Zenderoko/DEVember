import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TinderCard from "@/components/day6/TinderCard";
import { Stack } from "expo-router";

const users = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/1171698091/es/foto/un-hombre-sosteniendo-su-diario.jpg?s=612x612&w=0&k=20&c=BSn6el4qk2O1NE9FOL0X5WVJUGgArS3NxRkiwbdqsnQ=",
        name: "Teicy",
    },
    {
        id: 2,
        image: "https://media.istockphoto.com/id/1209793467/es/foto/accidente-tesh-mu%C3%B1eco-en-el-coche.jpg?s=612x612&w=0&k=20&c=rBOhKaTO9PCLZJyIEbQCmiTNhCbp5nxF1enV8haD5hM=",
        name: "Poto",
    },
    {
        id: 3,
        image: "https://media.istockphoto.com/id/1140744468/es/foto/maniqu%C3%AD-femenino-de-longitud-completa.jpg?s=612x612&w=0&k=20&c=GiRjy-qz8fyqUpnLrjQKUXC_YJoq6uxagz_Y4BWigcg=",
        name: "Teta",
    },
    {
        id: 4,
        image: "https://media.istockphoto.com/id/1238050212/es/foto/maniqu%C3%AD-hembra-de-longitud-completa.jpg?s=612x612&w=0&k=20&c=LQoGzkOjz3XTnUv57y6rN-eQyIvXn_FYIWQkBw41EWk=",
        name: "Saske",
    },
    {
        id: 5,
        image: "https://media.istockphoto.com/id/1159704136/es/foto/retrato-de-una-mujer-madura-de-40-a%C3%B1os-mirando-c%C3%A1mara-con-sonrisa-suave-al-aire-libre-en-una.jpg?s=612x612&w=0&k=20&c=EkObQpZXiyzisxOGSa5mZwsHtQ7QiUj5MVc5unM_r9w=",
        name: "Sakura",
    },
];

export default function TinderScreen() {
    return (
        <View style={styles.screen}>
            <Stack.Screen options={{ headerShown: false }} />

            {users.map((user, index) => (
                <TinderCard
                    key={user.id}
                    user={user}
                    numOfCards={users.length}
                    curIndex={index}
                />
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
