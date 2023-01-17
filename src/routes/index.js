import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { ChooseCategoryScreen, LoginScreen, PrivacyPolicyScreen, SignupScreen, TermsandConditionsScreen, WelcomeScreen, CategoryDescriptionScreen, WelcomeProfileScreen } from '~screens/auth';
import { AnimatedLoader, } from '~components';
import ScreenNames from './routes';
import { AddPhotosToLookbookScreen, CreateLookbookScreen, HomeScreen, MyAllLookbooksScreen, PinstarDashboardScreen, UserProfilePinstarScreen, ViewLookbookImageScreen, ViewLookbookScreen } from '~screens/app';
import { selectIsLoggedIn } from '~redux/slices/user';
import SplashScreen from 'react-native-splash-screen'
import { ImageGalleryScreen, ManageLocationScreen } from '~screens/common';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Appdrawer from './drawer';
import Tabbar from './bottomTab';
const Drawer = createDrawerNavigator();
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
          <Stack.Screen name={ScreenNames.TERMSANDCONDITIONS} component={TermsandConditionsScreen} />
          <Stack.Screen name={ScreenNames.PRIVACYPOLICY} component={PrivacyPolicyScreen} />
          <Stack.Screen name={ScreenNames.CHOOSECATEGORY} component={ChooseCategoryScreen} />
          <Stack.Screen name={ScreenNames.CATEGORYDESCRIPTION} component={CategoryDescriptionScreen} />
          <Stack.Screen name={ScreenNames.WELCOMEPROFILE} component={WelcomeProfileScreen} />
          <Stack.Screen name={ScreenNames.MANAGELOCATION} component={ManageLocationScreen} />
          <Stack.Screen name={ScreenNames.IMAGEGALLERY} component={ImageGalleryScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator drawerContent={(props) => <Appdrawer {...props} />} screenOptions={{ header: () => false }}>
          <Drawer.Screen name="Tabbar" component={Tabbar} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}