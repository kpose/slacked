import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  const paperTheme = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 5}}>
            <Icon name="access-point" size={20} color="green" />
            <Text style={styles.title}>Kpose Richard</Text>
          </View>

          <Caption style={styles.caption}>@kpoose</Caption>
        </View>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="android-messages" color={color} size={size} />
            )}
            label="Threads"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="at" color={color} size={size} />
            )}
            label="Mentions & Reactions"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="archive" color={color} size={size} />
            )}
            label="Saved Items"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="table-search" color={color} size={size} />
            )}
            label="Channel browser"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-multiple-check" color={color} size={size} />
            )}
            label="People & user groups"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="apps" color={color} size={size} />
            )}
            label="Apps"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="file-upload" color={color} size={size} />
            )}
            label="File Browser"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Channels">
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#3F0F3F', fontWeight: 'bold', fontSize: 15}}>
              Add Channel
            </Text>
          </TouchableOpacity>
        </Drawer.Section>

        <Drawer.Section title="Settings">
          <TouchableRipple onPress={props.toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch /* value={theme.dark} */ />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  /* drawerSection: {
    marginTop: 2,
  }, */
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 30,
  },
});
