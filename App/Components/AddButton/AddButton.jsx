import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { primary } from '../../Config/Colors';


const AddButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <AntDesign name="plus" size={30} color="white" />
            </View>
        </TouchableOpacity>
      
    )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        height:70,
        width:70,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:primary,
        zIndex:100,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    }
})
