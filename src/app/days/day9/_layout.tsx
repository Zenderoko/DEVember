import { Slot } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

function Day9Layout() {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    // console.log(authStatus);
    return <Slot />;
}

export default Day9Layout;
