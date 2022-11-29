import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { ScreenWrapper } from "~components";

export default function Welcome() {
    return (
        <ScreenWrapper>
            <View>
                <Text>Welcome</Text>
            </View>
        </ScreenWrapper>
    );
}
