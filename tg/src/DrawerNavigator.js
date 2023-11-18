import * as React from 'react'
import { StyleSheet,Modal, Text, Pressable, Alert,Linking,Dimensions, View } from 'react-native';
import "react-native-gesture-handler";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StackNavigator from '../src/StackNavigator';
import { routes, screens } from '../src/RouteItems';
//import { View } from 'react-native-web';
//import styles from '../src/styles';


const fullScreenWidth = Dimensions.get("window").width;
const fullScreenHeight = Dimensions.get("window").height;


const Drawer = createDrawerNavigator()

       
  
  const CustomDrawerContent = (props) => {
    const CustomDrawerHeader = (props) => {
      return (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#f6f6f6',
          marginBottom: 20,
        }}>
                
                <View>
                <img style={{ flex: 1 }}
      
      src={require("../screens/images/MDLLogo2022small.png")}
         />
                </View>
              </View>
              
      )}
  const currentRouteName = props.nav()?.getCurrentRoute().name // get focused route name
  return (

    
   <DrawerContentScrollView {...props}>
    <CustomDrawerHeader/>
      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute ?.focusedRoute :
            route.name === screens.HomeScreen
            
          return (
            
            <DrawerItem
            
              key={route.name}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel} >
                  {route.title} 
                </Text>
              )}
              
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  return (

    
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#0000b3',
          height: 50,
          
        },
        headerLeft: () => (
          <Pressable onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#fff" />
          </Pressable>
          
        ),
      })}
      
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}  />}
      
    >
      
      
      
      
      <Drawer.Screen name={screens.StackNavigator} component={StackNavigator} options={{
        title: "",
        
        headerRight: () => (
          <Pressable   onPress={() => alert('About this App \n This App was created by Jon Sniffen; Medical Diagnostic Laboratories, and reflects recommended regimens found in CDCs Sexually Transmitted Infections Treatment Guidelines, 2021. This summary is intended as a source of clinical guidance. When more than one therapeutic regimen is recommended, the sequence is in alphabetical order unless the choices for therapy are prioritized based on efficacy, cost, or convenience. The recommended regimens should be used primarily; alternative regimens can be considered in instances of substantial drug allergy or other contraindications. An important component of STI treatment is partner management. Providers can arrange for the evaluation and treatment of sex partners either directly or with assistance from state and local health departments. Complete guidelines can be found online at www.cdc.gov/std/treatment.')} style={styles.headerRight}>
            <Icon name="info-circle" size={20} color="#fff" /> 
          </Pressable>
        ),
      }}/>
      
      
      
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },
  headerTitle: {
    
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems:  'center',
    flex: 1,
  },
  headerRight: {
    marginRight: 20,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    
  },
  drawerLabelFocused: {
    fontSize: 16,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 60,
    justifyContent: 'center',
    
  },
  drawerItemFocused: {
    backgroundColor: '#0080ff',
  },

Image: {
  
  margin: fullScreenWidth * 0.55,
  
  
}})


export default DrawerNavigator