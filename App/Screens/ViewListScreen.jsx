import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';

import AppText from '../Components/AppText/AppText';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { green, secondary } from '../Config/Colors';


const ViewListScreen = ({ route, navigation }) => {
  const item = route.params;

 
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <AppText style={styles.mainText}>{item.title}</AppText>
          <AppText style={styles.subText}>{item.description}</AppText>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit Listings', {
              item,
            })
          }
        >
          <AntDesign name="edit" size={30} color={secondary} />
          <AppText style={styles.status}>{item.done ? 'Done' : 'New'}</AppText>
        </TouchableOpacity>
      </View>
      <AppText style={styles.text}>{item.descripation}</AppText>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="access-time" size={24} color="black" />
          <AppText style={styles.subText}>
            from {new Date(item.deadline * 1000).toLocaleDateString()}
          </AppText>
        </View>
        <AppText style={[styles.textColor, {backgroundColor:item.priority.color}]}>{item.priority.name}</AppText>
      </View>
    </View>
  );
};

export default ViewListScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    backgroundColor: 'white',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subText: {
    fontSize: 17,
    marginLeft: 7,
  },
  text: {
    margin: 10,
    padding: 10,
  },
  status: {
    color: green,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textColor:{
    backgroundColor:'orange',
    padding:7,
    


    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,

    
  }
});
