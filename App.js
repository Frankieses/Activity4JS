import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';

import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Appbar.Header style={styles.header}>
            <Appbar.Action icon="menu" onPress={_goBack} />
            <Appbar.Content title="Chat&Bike" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
          </Appbar.Header>

          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { backgroundColor: 'lightgray' },
            }}
          >
            <Tab.Screen name="Page 1" component={Screen1} />
            <Tab.Screen name="Page 2" component={Screen2} />
            <Tab.Screen name="Page 3" component={Screen3} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    backgroundColor: 'lightblue',
  },
});

export default App;
