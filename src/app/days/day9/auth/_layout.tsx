import { Redirect, Slot } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function AuthLayout() {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    if (authStatus !== "unauthenticated") {
        return <Redirect href={"/days/day9/protected"} />;
    }
    return <Slot />;
}
