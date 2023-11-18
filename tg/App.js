
import { StyleSheet, SafeAreaView } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer}  from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerNavigator from './/src/DrawerNavigator'
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";


const navigationRef = React.createRef()
const nav = () => navigationRef.current



const App = () => {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  return (
 
    
 
  <SafeAreaView style={styles.safeArea}>
      
      <NavigationContainer ref={navigationRef}>
       
        <DrawerNavigator nav={nav}  />
       
         
      </NavigationContainer>
      
      </SafeAreaView>
 
);

}


const styles = StyleSheet.create({
  safeArea: {
    flex: '1',
    overflow: 'hidden',
  },
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
export default App;
