import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { Link, router } from "expo-router";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSignInPressed = async () => {
        setError("");
        try {
            const { isSignedIn } = await signIn({ username: email, password });
            if (!isSignedIn) {
                router.push("/days/day9/protected");
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Username</Text>

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Ingresa tu correo aqui"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />

            <Button title="Sign in" onPress={onSignInPressed} />
            {error && (
                <Text style={{ color: "red", paddingTop: 10 }}>{error}</Text>
            )}
            <Link style={{ paddingTop: 10 }} href={"/days/day9/auth/sign-up"}>
                New on this app ?{" "}
                <Text style={{ color: "red" }}>Register here</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 10, justifyContent: "center", flex: 1 },
    title: { fontFamily: "InterSemi", fontSize: 24, color: "black" },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },
});

export default SignIn;
