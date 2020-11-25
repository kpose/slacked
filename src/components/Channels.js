import React from 'react';
import {Surface, Text} from 'react-native-paper';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Channels(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {channel: props})}>
        <Surface style={styles.surface}>
          <Text style={styles.name}> # {props.name}</Text>
        </Surface>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  surface: {
    padding: 10,
    height: 50,
    //width: 350,
    backgroundColor: 'grey',
    justifyContent: 'center',
    elevation: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
});
