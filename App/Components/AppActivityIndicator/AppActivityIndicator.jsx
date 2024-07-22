import React from 'react'
import LottieView from 'lottie-react-native'

const AppActivityIndictor = ({visible =false}) => {
     if(!visible) return null;
    return (
      <LottieView 
      loop
      autoPlay
      source={require('../../../assets/Animation/loader.json')}/>
    )
}

export default AppActivityIndictor
