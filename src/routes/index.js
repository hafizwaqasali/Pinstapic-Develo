import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { LoginScreen, SignupScreen, WelcomeScreen } from '~screens/auth';
import { AnimatedLoader, Loader } from '~components';
import ScreenNames from './routes';
import { HomeScreen } from '~screens/app';
import { selectIsLoggedIn } from '~redux/slices/user';
import SplashScreen from 'react-native-splash-screen'
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn)
  SplashScreen.hide();


  return (
    <NavigationContainer>
      <AnimatedLoader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName={ScreenNames.WELCOME} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.WELCOME} component={WelcomeScreen} />
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenNames.SIGNUP} component={SignupScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}