import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Settings from '../screens/Settings';
import Mentions from '../screens/Mentions';
import HomeStack from './HomeStack';

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      shifting={true}
      sceneAnimationEnabled={false}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Mentions"
        component={Mentions}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: 'message-text-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
