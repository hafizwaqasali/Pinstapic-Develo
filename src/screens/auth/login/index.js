import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import ScreenWrapper from "../../../components/screenWrapper"
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Text style={styles.title}>LOGIN SCREEN</Text>
        <Button
          title={"Login"}
          onPress={() => {
            dispatch(setAppLoader(true));
            setTimeout(() => {
              dispatch(setIsLoggedIn(true));
              dispatch(
                setUserMeta({
                  name: "John",
                  email: "John Doe",
                })
              );
              dispatch(setAppLoader(false));
            }, 600);
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
