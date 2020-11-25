import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import db from '../config/Firebase';

export default function Chat({navigation, route}) {
  const {channel} = route.params;
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState(null);

  useEffect(() => {
    if (channel.id) {
      db.collection('channels')
        .doc(channel.id)
        .onSnapshot((snapshot) => setChannelDetails(snapshot));
    }
    db.collection('channels')
      .doc(channel.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setChannelMessages(snapshot.docs.map((doc) => doc.data())),
      );
  }, [channel.id]);
  console.log(channelDetails);
  console.log(channelMessages);
  return (
    <View style={styles.container}>
      <Text>This is chat Screen</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#3F0F3F', fontWeight: 'bold', fontSize: 15}}>
            pop: {channel.name} {channel.id}
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
