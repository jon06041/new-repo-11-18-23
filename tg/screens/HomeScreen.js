import "react-native-gesture-handler";
import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import * as React from "react";
import styles from "../src/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const fullScreenWidth = Dimensions.get("window").width;
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
function HomeScreen({ }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ resizeMode: "stretch" }}
      source={require("../screens/images/STDGuideLines_Treatments_ICD10_2021_NewLogo_Page_1.jpg")}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          ></View>
        </ScrollView>
        
    
   
  
      </View>
    </ImageBackground>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}



export default HomeStackNavigator;
