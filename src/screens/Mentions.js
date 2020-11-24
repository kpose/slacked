import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Mentions({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is Mentions Screen</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          /* onPress={() => navigation.navigate('Profile')} */
        >
          <Text style={{color: '#3F0F3F', fontWeight: 'bold', fontSize: 15}}>
            go to profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
