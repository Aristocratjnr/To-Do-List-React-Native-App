import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { gray, secondary } from '../../Config/Colors'
import { Entypo } from '@expo/vector-icons';
import AppText from '../AppText/AppText';
import PickerItem from './PickerItem';
import { FontAwesome } from '@expo/vector-icons';

const AppPicker = ({icon, items, selectedItem, placeholder, setSelectedItem, style }) => {
    const[modalVisible, setModalVisible]= useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
            <View style={styles.mainContainer}>
                <View style={[styles.container, style]}>  
                    <AppText style={styles.text}>
                        {selectedItem? selectedItem.name : placeholder}
                    </AppText>
                    <Entypo name="chevron-down" size={24} color="gray" />
                </View>
              { icon && <FontAwesome style={styles.icon} name={icon} size={35} color={secondary} />}
            </View>
        </TouchableWithoutFeedback>
        <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
          
            style={styles.listContainer}
            data={items}
            keyExtractor={(items) => items.id.toString()}
            renderItem={({ item }) => (
                <PickerItem
                
                label={item?.name}
                color={item?.color}
                icon={item?.icon}
                onPress={() => {
                    setModalVisible(false);
                    setSelectedItem(item);
                }}
                />
               
                )}
            />
        </View>
      </Modal>
        </>
       
    )
}
export default AppPicker
const styles = StyleSheet.create({
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
    },
    container:{
        // width:'92%',
        flex:1,
        marginLeft: '4%',
        marginRight: '5%',
        backgroundColor: gray,
        height:55,
        borderRadius:15,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon:{
        marginTop:20,
        marginRight:20,
    },
    text:{
        flex:1,
        marginLeft:10,
    },
    modalContainer:{
        marginTop:30,
        flex: 1,
    },
    listContainer:{
    
        flex:1
    }
})