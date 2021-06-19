import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Bailey from './Screens/Bailey';
import ColdScreen from './Screens/ColdScreen';
import FeverScreen from './Screens/FeverScreen';
import Mind from './Screens/Mind';
import Yoga from './Screens/Yoga'

export default class App extends React.Component{
    render(){
     return(
         <View>
           <AppContainer/>
         </View>
     )
    }
}

var AppNavigator = createSwitchNavigator({
    ColdScreen: ColdScreen,
    FeverScreen: FeverScreen,
    Mind: Mind,
    Yoga: Yoga,
    Bailey : Bailey
  });
  
  const AppContainer = createAppContainer(AppNavigator);
  