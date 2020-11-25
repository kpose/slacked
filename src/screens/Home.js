import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import Channels from '../components/Channels';
import db from '../config/Firebase';

export default function Home({navigation}) {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        })),
      ),
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Button
          icon="camera"
          mode="contained"
          /* onPress={() => navigation.navigate('Chat')} */
        >
          Add Channel
        </Button>
      </View>

      <ScrollView style={styles.channels}>
        {channels.map((channel) => (
          <Channels key={channel.id} {...channel} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: 'center',
    marginTop: 10,
  },
  channels: {
    flex: 0.9,
    padding: 10,
  },
});
