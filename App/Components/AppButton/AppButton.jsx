
import React from 'react'
import { StyleSheet, Text, TouchableOpacity,  } from 'react-native'

import { primary, white } from '../../Config/Colors'




export default function AppButton({title, onPress , color=primary}) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.container, {backgroundColor: color }]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: primary,
        width:'98%',
        padding: 13,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        alignSelf:'center',


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text:{
        fontSize:18,
        color: white,
        textTransform:"uppercase",
        fontWeight:'bold'
    }
})