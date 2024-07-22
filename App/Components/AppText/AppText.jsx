import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

const AppText = ({children, style}) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontFamily: Platform.OS === 'android'? 'Roboto' : 'Avenir'
    }
})