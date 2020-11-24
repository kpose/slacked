import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Channels({name}) {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.name}> # {name} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
  },
});
