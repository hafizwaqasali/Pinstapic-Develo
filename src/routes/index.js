import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { ChooseCategoryScreen, LoginScreen, PrivacyPolicyScreen, SignupScreen, TermsandConditionsScreen, WelcomeScreen, CategoryDescriptionScreen, WelcomeProfileScreen } from '~screens/auth';
import { AnimatedLoader, } from '~components';
import ScreenNames from './routes';
import { AddPhotosToLookbookScreen, CreateLookbookScreen, HomeScreen, MyAllLookbooksScreen, UserProfilePinstarScreen, ViewLookbookImageScreen, ViewLookbookScreen } from '~screens/app';
import { selectIsLoggedIn } from '~redux/slices/user';
import SplashScreen from 'react-native-splash-screen'
import { ImageGalleryScreen, ManageLocationScreen } from '~screens/common';
const Stack = createNativeStackNavigator();

export default function Routes() {


  const isLogin = useSelector(selectIsLoggedIn)
  SplashScreen.hide();


  return (
    <NavigationContainer>
      <AnimatedLoader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName={ScreenNames.CHOOSECATEGORY} screenOptions={{ header: () => false }}>
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
        <Stack.Navigator initialRouteName={ScreenNames.USERPROFILEPINSTAR} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.USERPROFILEPINSTAR} component={UserProfilePinstarScreen} />
          <Stack.Screen name={ScreenNames.CREATELOOKBOOK} component={CreateLookbookScreen} />
          <Stack.Screen name={ScreenNames.ADDPHOTOSTOLOOKBOOK} component={AddPhotosToLookbookScreen} />
          <Stack.Screen name={ScreenNames.VIEWLOOKBOOK} component={ViewLookbookScreen} />
          <Stack.Screen name={ScreenNames.VIEWLOOKBOOKIMAGE} component={ViewLookbookImageScreen} />
          <Stack.Screen name={ScreenNames.MYAllLOOKBOOKS} component={MyAllLookbooksScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}