import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import styles from '../src/styles';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';
import { useNavigation } from '@react-navigation/native';

 
class MainPart extends React.Component {
  state={
    screenWidth: null,
    screenHeight: null,
  }

  _onLayout(e) {
    console.log("Screen Orientation Changed...")
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    })

  }
  
  render(){
    <>    
        
      </>
    const { navigation } = this.props;
    const {screenHeight, screenWidth} = this.state
    return(
      <ImageBackground style={{flex:1}} imageStyle={{resizeMode: 'stretch'}} source={require('../screens/images/dnatrans3.png')}>
      <View style={screenHeight > screenWidth ? styles.ContainerPortrait : styles.ContainerLandscape} onLayout={this._onLayout.bind(this)}>
        <></>
   
      <ScrollView style={styles.scrollView}>
      
      
        
  <TouchableOpacity  onPress={() => navigation.navigate('Trichomoniasis') }>
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)} >
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={screenHeight > screenWidth ? styles.buttonText : styles.buttonTextLandscape}>Trichomonas vaginalis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Gonococcal_Infections')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Neisseria gonorhoeae</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Chlamydial_Infections')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Chlamydia trachomatis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Lymphogranuloma_Venereum')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Lymphogranuloma Venereum</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('HSV')}>
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Genital Herpes Simplex Virus (HSV)</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Syphilis')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Treponema pallidum</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Bacterial_Vaginosis')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Bacterial Vaginosis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Avag')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Aerobic vaginitis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('VVC')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Vulvovaginal candidiasis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('HPV')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text  style={styles.buttonText}>Human Papillomavirus (Genital Warts)</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>

    <TouchableOpacity   onPress={() => navigation.navigate('Cervicitis')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
	
    <Text style={styles.buttonText}NumberOfLines={2}>Cervicitis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Mgent')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Mycoplasma genitalium</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Pelvic_Inflammatory_Disease')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Pelvic Inflammatory Disease</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Nongonococcal_Urethritis')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Nongonococcal Urethritis (NGU)</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={() => navigation.navigate('Epididymitis')} >
     <View style={screenHeight > screenWidth ? styles.button : styles.buttonLandscape} onLayout={this._onLayout.bind(this)}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Epididymitis</Text>
    </AutoSizeText>
     </View>
    
    
    </TouchableOpacity>
    
    </ScrollView>

        </View>
      
        </ImageBackground>
    )
    
  }
  
}

export default function(props) {
  const navigation = useNavigation();

  return <MainPart {...props} navigation={navigation} />;
}
