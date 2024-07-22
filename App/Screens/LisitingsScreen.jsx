import React, {  useContext } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import AddButton from '../Components/AddButton/AddButton';
import ListingsEmpty from '../Components/Listings/ListingsEmpty';
import Lisitings from '../Components/Listings/Lisitings';
import AuthContext, { AppContext } from '../AuthContext/Context';



const LisitingsScreen = ({ navigation }) => {
  const appContext = useContext(AppContext);
  const authContext = useContext(AuthContext);

  const { listings, categories, loadingData, refreshing } = appContext.state;

  // Get Api Auth Key
  const { user } = authContext;


  const onCheck = async (taskId, checkValue) => {
    try {
      const { data } = await axios.patch(
        `/tasks/${taskId}`,
        {
          done: checkValue,
        },
        {
          headers: {
            Authorization: `Bearer ${user.api_token}`,
          },
        }
      );
      console.log(data, 'data');
      appContext.getAppData(true);
    } catch (error) {
      console.log(error.response, 'error_patching');
    }
  };

  const onDelete = async (taskId, checkValue) => {
    try {
      const { data } = await axios.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${user.api_token}`,
        },
      });
      console.log(data, 'data');
      appContext.getAppData(true);
    } catch (error) {
      console.log(error.response, 'error_patching');
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => appContext.getAppData(true)}
          />
        }
      >
        {listings.length ? (
          <Lisitings
            listings={listings}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        ) : (
          <ListingsEmpty />
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <AddButton onPress={() => navigation.navigate('Create Listings')} />
      </View>
    </View>
  );
};

export default LisitingsScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    backgroundColor: 'white',
    width: '100%',
  },

  btnContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});









