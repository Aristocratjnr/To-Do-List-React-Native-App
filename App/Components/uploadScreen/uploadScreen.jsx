import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

const UploadScreen = ({ onDone , visible}) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <LottieView 
                    source={require('../../../assets/Animation/done.json')}
                    loop={false}
                    autoPlay
                    style={styles.animation}
                    onAnimationFinish={onDone}/>
            </View>
        </Modal>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    animation:{
        width: 250,
    }
})