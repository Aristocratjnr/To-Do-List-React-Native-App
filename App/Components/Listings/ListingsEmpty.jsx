import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from '../AppText/AppText'

const ListingsEmpty = () => {
    return (
        <View style={styles.imageContainer}>
            <Image
            style={styles.image} 
            source={require('../../../assets/background.png')} />
            <AppText style={styles.text}>
                So far, you have nothing to do. Have a nice rest! Typography
            </AppText>
        </View>
    )
}

export default ListingsEmpty

const styles = StyleSheet.create({
    imageContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        marginTop: 120,
        alignContent:'center',
        height:260,
        width:400,
    },
    text:{
        width:'80%',
        marginTop:15,
        textAlign:'center'
    },
})
