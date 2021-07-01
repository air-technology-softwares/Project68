import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs";

import HomeScreen from './Screen/HomeScreen';
import InstaScreen from './Screen/in';
import FaceScreen from './Screen/fb';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator (
  {
    Home: {screen: HomeScreen},
    Insta: {screen: InstaScreen},
    Face: {screen: FaceScreen},
  }
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
