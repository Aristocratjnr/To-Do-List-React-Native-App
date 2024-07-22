import React from 'react'
import { TextInput } from 'react-native-paper';
import { StyleSheet, View, } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { secondary } from '../../Config/Colors';

export default function AppTextInput({icon, label, mode, onPress ,onChangeText, ...otherProps}) {

  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        mode={mode}
        onChangeText={onChangeText}
        selectionColor='black'
        underlineColor='black'
        style={styles.input}
        { ...otherProps}
      />
    {icon &&  <FontAwesome onPress={onPress} style={styles.icon} name={icon} size={32} color={secondary} />}
    </View>

  );
}

const styles = StyleSheet.create({
  input:{
     flex:1,
     marginRight:'5%',
      marginLeft: '4%',
      marginTop:20,
  },
    container:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    icon:{
      marginTop:20,
      marginRight:20,
    }
})

// import React from 'react'
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import { black, gray,  } from '../../Config/Colors'
// import { MaterialIcons } from '@expo/vector-icons';


// const AppTextInput = ({icon, placeholder, onChangeText, ...otherProps}) => {
    
//     return (
//         <View style={styles.container}>
         
//             {
//               icon && <MaterialIcons name={icon} size={24} color="gray" />
//             }
//             <TextInput 
//               onChangeText={onChangeText} 
//               style={styles.inputText} 
//               placeholder={placeholder}
//               {...otherProps} 
//             />
//         </View>
//     )
// }

// export default AppTextInput

// const styles = StyleSheet.create({
//     container:{
//         width:'95%',
//         marginLeft: 5,
//         backgroundColor: gray,
//         height:50,
//         borderRadius:25,
//         padding:10,
//         display:'flex',
//         flexDirection:'row',
//         alignItems:'center',
//         marginTop:20,
//     },
//     inputText:{
//         backgroundColor:'transparent',
//         width: 'auto',
//         height:'100%',
//         marginLeft:10,
//         color: black,
//         fontSize:17,
//     }
// })