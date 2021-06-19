import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component{
    goToColdScreen = () => {
        this.props.navigation.navigate('ColdScreen');
      };
    
      goToFeverScreen = () => {
        this.props.navigation.navigate('FeverScreen');
      };
    
     goToBailey = () => {
        this.props.navigation.navigate('Bailey');
      };
    
    goToMind = () => {
        this.props.navigation.navigate('Mind');
      };
    gotoYoga = () => {
      this.props.navigation.navigate('Yoga');
    }

    render(){
        return(
            <View>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        )
    }
}