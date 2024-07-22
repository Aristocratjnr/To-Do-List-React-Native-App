import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from '../AppText/AppText'

const AppLink = ({children, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.link}>{children}</AppText>
        </TouchableOpacity>
    )
}

export default AppLink

const styles = StyleSheet.create({
    link:{
        color: 'blue',
        marginLeft:6,
        fontSize:20,
        textTransform:'uppercase'  
    
    }
})
