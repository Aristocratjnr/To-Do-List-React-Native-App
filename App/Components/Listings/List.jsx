import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { white, yellow } from '../../Config/Colors'
import AppCheckbox from '../AppCheckbox/AppCheckbox'
import AppText from '../AppText/AppText'

const List = ({ color, title, description, onPress, done, onCheck }) => {
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.textContainer}>
          <AppText style={styles.mainText}>{title}</AppText>
          <AppText style={styles.subText}>{description}</AppText>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.check}>
        <AppCheckbox color={color} done={done} onCheck={onCheck} />
      </View>
    </View>
    );
  };
export default List

const styles = StyleSheet.create({
    container:{
        padding:20,
        height:100,
        marginLeft:'5%',
        width: '90%',
        // alignContent:'center',
        alignItems:'center',
        borderRadius:10,

        backgroundColor: yellow,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,



        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,

    },
    mainText:{
        fontWeight: 'bold',
        color: white,
        marginBottom:10,
    },
    subText:{
        color: white,
        fontWeight:'600',
    },
    textContainer:{
        width :'100%',
        height:'100%'
    }
})
