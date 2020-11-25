import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

//import screens
//import Home from '../screens/Home';
//import HomeStack from './HomeStack';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  return (
    <Drawer.Navigator
      /* drawerStyle={{backgroundColor: '#3F0F3F'}} */
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
    </Drawer.Navigator>
  );
}
