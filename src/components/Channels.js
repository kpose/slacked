import React from 'react';
import {Surface, Text} from 'react-native-paper';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Channels({name}) {
  return (
    <View>
      <TouchableOpacity>
        <Surface style={styles.surface}>
          <Text style={styles.name}> # {name} </Text>
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
