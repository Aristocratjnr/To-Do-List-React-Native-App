import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet,  TouchableWithoutFeedback, View } from 'react-native'
import { gray, secondary, green } from '../../Config/Colors'
import { Entypo } from '@expo/vector-icons';
import AppText from '../AppText/AppText';
import PickerItem from '../AppPicker/PickerItem';
import { FontAwesome } from '@expo/vector-icons';
import AppTextInput from '../AppTextInput/AppTextInput'
import AppButton from '../AppButton/AppButton';
import  appAlertBox from '../../Utility/Contast'
import {  TextInput, Title } from 'react-native-paper';

const AppPickCategory = ({ 
    items, 
    selectedItem, 
    placeholder, 
    setSelectedItem, 
    style, 
    category, 
    setCategory, 
    createCategory,
    loading 
}) => {
    const[modalVisible, setModalVisible]= useState(false)
    const [visible, setVisible ] = useState(false) 
   


    
      
    return (
        <>
            <View style={styles.mainContainer}>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={[styles.container, style]}>  
                    <AppText style={styles.text}>
                        {selectedItem? selectedItem.name : category ? category : placeholder}
                    </AppText>
                    <Entypo name="chevron-down" size={24} color="gray" />
                </View>
        </TouchableWithoutFeedback>
        
               <FontAwesome style={styles.icon} name='plus-square-o' size={35} color={secondary} onPress={()=>setVisible(true)} />

            </View>
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

      <Modal animationType="slide" visible={visible}>
        <View style={styles.modalContainer}>
          <Button title="close" onPress={() => setVisible(false)} />
          <TextInput
            placeholder="Category"
            onChangeText={(text) => setCategory(text)}
            value={category}
            disabled={loading}
          />
        <View style={styles.btnContainer} />
        <AppButton
          color={green}
          loading={loading}
          title="Create Category"
          style={{ padding: 5, borderRadius: 15 }}
          onPress={() => {
            if (!category) {
              appAlertBox('Add a category name');
            } else {
              createCategory();
              setVisible(false)
            }
          }}
        />
   
       
        </View>
      </Modal>
        </>
       
    )
}
export default AppPickCategory

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