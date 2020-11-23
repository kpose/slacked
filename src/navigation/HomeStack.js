import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';

import Home from '../screens/Home';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: '#3F0F3F'}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          //color={theme.colors.primary}
          color="red"
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <MaterialCommunityIcons
            name="format-align-justify"
            color="#40a37a"
            size={40}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        }
      />
    </Appbar.Header>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Slack'}}
      />
      {/* add other screens here */}
    </Stack.Navigator>
  );
};

export default HomeStack;
