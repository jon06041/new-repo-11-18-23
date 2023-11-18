
import {  View, } from 'react-native';
import * as React from 'react';
import { Button } from "@react-native-material/core";

function Menu ({navigation}){
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Button title = "Back to the home page or hit back" onPress={() => navigation.navigate('HomeScreen')}/>
</View>

);

}






export default Menu;