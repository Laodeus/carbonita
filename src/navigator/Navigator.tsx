
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../page/Home"
import Settings from '../page/Settings';
import DashBoard from '../page/DashBoard';

import Routes from "./Routes"

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name={Routes.DASHBOARD}
          component={DashBoard}
          options={{
            headerShown: false,
          }} /><Stack.Screen
          name={Routes.SETTINGS}
          component={Settings}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
