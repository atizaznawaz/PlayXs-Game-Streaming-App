import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
//icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
//importing Screens
import HOME from './Screens/Home'
import CATEGORIES from './Screens/Categories'
import VIDEOS from './Screens/Videos'
import NEWS from './Screens/News'
import HISTORY from './Screens/History'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
                        screenOptions={{  
                         swipeEnabled:true,
                         animationEnabled:true,
                         gestureEnabled:true,
                       }}
                      
                      tabBarOptions={{
                        activeTintColor: '#9a00ff',
                        inactiveTintColor: '#0c0121',
                        keyboardHidesTabBar: true,
                        activeBackgroundColor:'White', 
                        //inactiveBackgroundColor:'blue',
                        
                        labelStyle: {
                         fontSize: 0,
                         fontWeight:'bold',
                         //marginBottom:'1%',
                       },
     
                        style: {
                         borderTopWidth:1,
                         borderTopColor:'#9a00ff',
                         backgroundColor: '#240046',
                         //marginBottom:'0.1%',
                         marginHorizontal:'17%',
                         paddingLeft:5,
                         borderRadius:30,
                         position: 'absolute',
                         left: 0,
                         right: 0,
                         bottom:15,
                         height:60,
                         shadowColor: '#000',
                         shadowOffset: { width: 1, height: 1 },
                         shadowOpacity:  0.4,
                         shadowRadius: 3,
                         elevation: 5,
                         overflow:'hidden',
                         borderColor:'#9a00ff',
                         borderWidth:1,
                         
                       },
                       }}>
        <Tab.Screen name="Home" component={HOME} options={{tabBarIcon: ({ focused, color, size }) => (<FontAwesome name="gamepad" size={30} color={color} />)}}/>
        <Tab.Screen name="Categories" component={CATEGORIES} options={{tabBarIcon: ({ focused, color, size }) => (<Ionicons name="grid" size={24} color={color} />)}} />
        <Tab.Screen name="Videos" component={VIDEOS} options={{tabBarIcon: ({ focused, color, size }) => (<Entypo name="video" size={25} color={color} />)}} />
        <Tab.Screen name="News" component={NEWS} options={{tabBarIcon: ({ focused, color, size }) => (<Ionicons name="newspaper" size={25} color={color} />)}} />
        <Tab.Screen name="History" component={HISTORY} options={{tabBarIcon: ({ focused, color, size }) => (<FontAwesome5 name="history" size={23} color={color} />)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}