import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signUp } from "aws-amplify/auth";
import { Link, router } from "expo-router";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSignUpPressed = async () => {
        setError("");
        try {
            await signUp({
                username: email,
                password,
                options: {
                    userAttributes: {},
                    autoSignIn: true,
                },
            });
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
                placeholder="Enter your mail"
                style={styles.input}
            />
            <Text style={styles.title}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your Password"
                style={styles.input}
                secureTextEntry
            />
            <Text style={styles.title}>Confirm your Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Please confirm your Password"
                style={styles.input}
                secureTextEntry
            />

            <Button title="Create Account" onPress={onSignUpPressed} />
            {error && (
                <Text style={{ color: "red", paddingTop: 10 }}>{error}</Text>
            )}
            <Link style={{ paddingTop: 10 }} href={"/days/day9/auth/sign-in"}>
                {" "}
                Have an account? <Text style={{ color: "red" }}>SIGN IN</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 10, justifyContent: "center", flex: 1 },
    title: { fontFamily: "InterSemi", fontSize: 20, color: "black" },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },
});

export default SignUp;
