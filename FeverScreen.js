import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class FeverScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                Fever is an infection caused due to various factors which could be change in climatic condition, 
                unhealthy food, physical exertion, place change, extreme heat etc. It is recognised when there is 
                rise in body temperature which is the body’s response to fight the infection.
                When any virus attacks our body, it raises the temperature and we fill feverish 
                and uncomfortable. The duration for this may be for 2 -7 days and needs an immediate 
                call to the doctor.You can try out the following herbs before taking any medicinal drug.

                </Text>
                <Text>
                Crushed Garlic
                It is one of the widely used remedy for fever, cough and cold. 
                Garlic has antibacterial properties and hence it has great healing power for fever, 
                cough and cold. 
                You can take 4-6 crushed garlic cloves and consume it directly. 
                If you are not very comfortable with the strong flavour and smell then you can 
                also take it with curd.

               Ginger
             In Ayurveda, ginger has been used for centuries to cure various ailments. 
             It can easily fight infections, bacteria and any inflammation in your body. 
             If you are prone to infections easily, then you should consume ginger tea often. You make lemon tea and add few slice of ginger in it. 
             Try to substitute sugar with Jiva Honey and you will get benefit.
                </Text>
            </View>
        )
    }
}