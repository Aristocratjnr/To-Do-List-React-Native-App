import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { danger } from '../../Config/Colors'

const ErrorMessage = ({error, isTouched}) => {
    if (!error || !isTouched) return null;
    return (
         <Text style={styles.text}>{error}</Text>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    text:{
        color: danger,
        marginTop:3,
        marginLeft:20,
    }
})
