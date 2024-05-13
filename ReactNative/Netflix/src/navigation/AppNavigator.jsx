import {StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from '../app/screens/HomeScreen';
import SplashScreen from '../app/screens/SplashScreen';
import OnboardingScreen from '../app/screens/OnboardingScreen';
import LoginScreen from '../app/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPasswordScreen from '../app/screens/ForgotPasswordScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
