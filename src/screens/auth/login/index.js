import { useDispatch } from "react-redux";
import React from "react";
import ScreenWrapper from "../../../components/screenWrapper";
import { Text, View } from "react-native";
import styles from "./styles";
import AppColors from "~utills/AppColors";
export default function Login({ navigation }) {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.blueBackground}
      barStyle="light-content"
    >
      <View style={styles.container}>
        <Text>Login Screen</Text>
      </View>
    </ScreenWrapper>
  );
}
