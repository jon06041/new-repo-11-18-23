import React from 'react';
import {StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import { FontAwesome5 } from '@expo/vector-icons'

import HomeTab from '../screens/HomeScreen'
import TableOfContents from "../screens/TableOfContents";
import TestScreen from "../screens/TestScreen";
import TermsOfUse from "../screens/TermsOfUse";


const Tab = createBottomTabNavigator()




function  BottomTabNavigator () {
    return (
     <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'TestScreen') {
          iconName = focused ? 'disease' : 'disease';
        }else if (route.name === 'TableOfContents') {
          iconName = focused ? 'notes-medical' : 'notes-medical';
        }else if (route.name === 'TermsOfUse') {
          iconName = focused ? 'file' : 'file';
        }

        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={size} color={color} />;
        
      },
      tabBarStyle: { backgroundColor: 'skyblue' },
      tabBarActiveTintColor: '#0000b3',
      tabBarInactiveTintColor: 'gray',
      
    })}>
     
     
   

      
   <Tab.Screen style={styles.tabBarLabel} name="HomeTab" component={HomeTab} options={{ headerShown: false,tabBarLabel: 'Home' }}/>
   <Tab.Screen style={styles.tabBarLabel} name="TestScreen" component={TestScreen} options={{
     headerTitle: 'Tests',
     headerStyle: {
      backgroundColor: '#0080ff',
      height: 50,
    },
      tabBarLabel: 'Tests'
    }}/>
    
   <Tab.Screen style={styles.tabBarLabel} name="TableOfContents" component={TableOfContents}options={{headerTitle:'Notes',headerStyle: {
      backgroundColor: '#0080ff',
      height: 50,
    }, tabBarLabel: 'Notes'}}/>
   <Tab.Screen style={styles.tabBarLabel} tabBarLabel name="TermsOfUse" titleNumberOfLines={4} component={TermsOfUse}options={{headerTitle:'Terms Of Use',headerStyle: {
      backgroundColor: '#0080ff',
      height: 50, 
    }, tabBarLabel: 'Terms Of Use'}}/>
   
   </Tab.Navigator>
        
     
    );
   }
  
   const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#d2e1f0',
      fontSize: 10,
    },
    tabContainer: {
      height: 60,
   
      backgroundColor: '#d2e1f0',
    }
  })

export default BottomTabNavigator;
