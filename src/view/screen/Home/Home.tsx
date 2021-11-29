import React from "react";

import { Text, View } from "react-native";
import { TEST } from "../../../constants/constants";

function HomeScreen() {
    return (
        <View>
            <Text>{String(TEST)}</Text>
        </View>
    );
}

export default HomeScreen;
