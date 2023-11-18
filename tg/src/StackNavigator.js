import * as React from "react";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bacterial_Vaginosis from '../screens/Bacterial_Vaginosis'
import Cervicitis from '../screens/Cervicitis'
import Chlamydial_Infections from '../screens/Chlamydial_Infections'
import Epididymitis from '../screens/Epididymitis'
import Gonococcal_Infections from '../screens/Gonococcal_Infections'
import HPV from '../screens/HPV'
import HSV from '../screens/HSV'
import IDC10 from '../screens/IDC10'
import Lymphogranuloma_Venereum from '../screens/Lymphogranuloma_Venereum'
import MDL from '../screens/MDL'
import Nongonococcal_Urethritis from '../screens/Nongonococcal_Urethritis'
import Mgent from '../screens/Mgent'
import Avag from '../screens/Avag'
import Pelvic_Inflammatory_Disease from '../screens/Pelvic_Inflammatory_Disease'
import VVC from '../screens/VVC'
import Syphilis from '../screens/Syphilis'
import Trichomoniasis from '../screens/Trichomoniasis'
import BottomTabNavigator from "../src/TabNavigator";



const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (

<Stack.Navigator >
  
  
  
<Stack.Screen name='HomeTab1' component={BottomTabNavigator}options={{ 
      headerShown: false,
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }} />
      
      
  
  <Stack.Screen name="MDL" component={MDL}options={{ title: 'MDL',
      headerStyle: {
        backgroundColor: '#0080ff',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }} />
      <Stack.Screen name="IDC10" component={IDC10}options={{ title: 'Commonly Used IDC10 Codes',
      headerStyle: {
        backgroundColor: '#0080ff',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }} />
 <Stack.Screen name="Cervicitis" component={Cervicitis}options={{ title: 'Cervicitis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }} />
       
      <Stack.Screen name="Bacterial_Vaginosis" component={Bacterial_Vaginosis}options={{ title: 'Bacterial Vaginosis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>

      <Stack.Screen name="Chlamydial_Infections" component={Chlamydial_Infections}options={{ title: 'Chlamydia trachomatis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

      }}/>
      <Stack.Screen name="Epididymitis" component={Epididymitis}options={{ title: 'Epididymitis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>

<Stack.Screen name="HSV" component={HSV}options={{ title: 'Genital Herpes Simplex',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
<Stack.Screen name="HPV" component={HPV}options={{ title: 'Human Papillomavirus (Genital Warts)',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>

      <Stack.Screen name="Gonococcal_Infections" component={Gonococcal_Infections}options={{ title: 'Neisseria gonorhoeae',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Lymphogranuloma_Venereum" component={Lymphogranuloma_Venereum}options={{ title: 'Lymphogranuloma Venereum',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Nongonococcal_Urethritis" component={Nongonococcal_Urethritis}options={{ title: 'Nongonococcal Urethritis (NGU)',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Mgent" component={Mgent}options={{ title: 'Mycoplasma genitalium',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Avag" component={Avag}options={{ title: 'Aerobic vaginitis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Pelvic_Inflammatory_Disease" component={Pelvic_Inflammatory_Disease}options={{ title: 'Pelvic Inflammatory Disease',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="VVC" component={VVC}options={{ title: 'Vulvovaginal candidiasis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      
      <Stack.Screen name="Syphilis" component={Syphilis}options={{ title: 'Treponema pallidum',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Trichomoniasis" component={Trichomoniasis}options={{ title: 'Trichomonas vaginalis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      
          
  </Stack.Navigator>
  )
}
export default StackNavigator;