
import { StyleSheet, Dimensions} from 'react-native';



const fullScreenWidth = Dimensions.get("window").width;
const fullScreenHeight = Dimensions.get("window").height;
console.log ({fullScreenHeight});
console.log ({fullScreenWidth});



const styles = StyleSheet.create({
  
    container: {
      flex: '1',
      flexGrow: 1,
      padding: 1,
      justifyContent: 'center',
    },
    MDLPic: {
      flex: '1',
      padding: 80,
      justifyContent: 'center',
    },
    button:{
      backgroundColor: "grey",
      padding: 10,
      margin: fullScreenWidth * 0.05,
      marginTop: 10,
      marginBottom: 10,
      height: fullScreenHeight * 0.075,
      width: fullScreenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "black",
      borderRadius: 35,
      borderWidth: 2,
      fontWeight: "bold",
      fontStyle: "normal",
      elevation:3,
      opacity: 0.85,
      shadowColor: "grey",
   shadowOffset: {
     width: -10,
     height: 9,
   },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation:5
    },

    buttonLandscape:{
      backgroundColor: "grey",
      padding: 10,
      margin: fullScreenWidth * 0.05,
      marginTop: 10,
      marginBottom: 10,
      height: fullScreenHeight * 0.075,
      width: fullScreenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "black",
      borderRadius: 35,
      borderWidth: 2,
      fontWeight: "bold",
      fontStyle: "normal",
      elevation:3,
      opacity: 0.85,
      shadowColor: "grey",
   shadowOffset: {
     width: -10,
     height: 9,
   },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation:5
    },
    buttonText: {
     
      justifyContent: 'center',
       color: 'black',
       fontWeight: 'bold',
       flexGrow: 1,
       textTransform: 'uppercase',
       alignItems:  'center',
       margin: 5,
       height: fullScreenHeight * 0.080,
       width: fullScreenWidth * 0.09,
       fontFamily: 'AmericanTypewriter-CondensedBold',
       textAlign: 'center',
       
   },
   buttonTextLandscape: {
     
    justifyContent: 'contain',
     color: 'black',
     fontWeight: 'bold',
     flexGrow: 1,
     textTransform: 'uppercase',
     alignItems:  'center',
     margin: 5,
     height: fullScreenHeight * 0.080,
     width: fullScreenWidth * 0.09,
     fontFamily: 'AmericanTypewriter-CondensedBold',
     textAlign: 'center',
     
 },
  innerTextred: {
     
    justifyContent: 'space-around',
     color: 'blue',
     fontWeight: 'bold',
     fontSize: 16,
     textTransform: 'uppercase',
     alignItems:  'center',
     margin: 10,
     fontFamily: 'AmericanTypewriter-CondensedBold',
     textAlign: 'center',
     
 },
 innerTextyellow: {
     
  justifyContent: 'space-around',
   color: '#EACE09',
   fontWeight: 'bold',
   fontSize: 16,
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'AmericanTypewriter-CondensedBold',
   textAlign: 'center',
   
},
innerTextgreen: {
     
  justifyContent: 'space-around',
   color: 'green',
   fontWeight: 'bold',
   fontSize: 16,
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'AmericanTypewriter-CondensedBold',
   textAlign: 'center',
   
},
accordionText: {
     
  justifyContent: 'space-around',
  alignItems:  'center',
  backgroundColor: 'skyblue',
   color: 'black',
   fontWeight: 'bold',
   fontSize: 16,
   textTransform: 'uppercase',
   fontFamily: 'Arial',

},
 baseText: {
     
  justifyContent: 'center',
   color: 'black',
   fontWeight: 'bold',
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'Arial',
   textAlign: 'center',
   
},
baseText2: {
     
  justifyContent: 'space-around',
   color: 'black',
   fontWeight: 'bold',
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'Arial',
   textAlign: 'left',
   
},
overlay: {
  opacity: 0.5,
  backgroundColor: '#000000'
},
superscript: {
  
  fontSize: 8,
  lineHeight: 8,
},
headerLeft: {
  marginLeft: 20,
},
ContainerPortrait: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
},
ContainerLandscape: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
},
  });

  export default styles