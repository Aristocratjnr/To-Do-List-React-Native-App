import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './App/Navigation/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from './App/Navigation/AppNavigation';
import AuthContext from './App/AuthContext/Context';
import AppActivityIndictor from './App/Components/AppActivityIndicator/AppActivityIndicator';
import {useNetInfo} from "@react-native-community/netinfo";
import OfflineBar from './App/Components/OfflineBar/OfflineBar';


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const netInfo = useNetInfo()
  const netStatus = netInfo.isInternetReachable; 

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const parsedObject = userData !== null ? JSON.parse(userData) : null;
      setUser(parsedObject);
      setLoading(false);
    } catch (e) {
      setUser(null);
      setLoading(false);
    }
  };
  useEffect(() => {
    axios.defaults.baseURL = 'http://practice.mobile.kreosoft.ru/api';
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
       {!netStatus && <OfflineBar/>}
      {loading ? (
        <View style={styles.container}>
         
          <AppActivityIndictor/>
        </View>
      ) : (
        <NavigationContainer>
          {user ? <AppNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
    // <View style={styles.container}>
    //     <AppPickCategory />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
});
