import React, { useReducer, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import AppActivityIndictor from '../Components/AppActivityIndicator/AppActivityIndicator'
import LisitingsScreen from '../Screens/LisitingsScreen';
import CreateListScreen from '../Screens/CreateListScreen';
import ViewListScreen from '../Screens/ViewListScreen';
import { appReducer, INITIAL_STATE } from '../reducers/appReducer';
import AuthContext, { AppContext } from '../AuthContext/Context';
import UpdateListScreen from '../Screens/EditScreen';

const AppNavigation = () => {
  const Stack = createStackNavigator();
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  const context = useContext(AuthContext);

  // Get Api Auth Key
  const { user } = context;

  useEffect(() => {
    getAppData();
  }, []);

  const getAppData = async (refresh) => {
    if (refresh) {
      dispatch({
        type: 'start_refreshing',
      });
    } else {
      dispatch({
        type: 'start_loading',
      });
    }

    try {
      // Get Categories
      const { data: categoriesData } = await axios.get('/categories', {
        headers: {
          Authorization: `Bearer ${user.api_token}`,
        },
      });

      // Get Listings
      const { data: listingsData } = await axios.get('/tasks', {
        headers: {
          Authorization: `Bearer ${user.api_token}`,
        },
      });

      // Get Priorities
      const { data: prioritiesData } = await axios.get('/priorities', {
        headers: {
          Authorization: `Bearer ${user.api_token}`,
        },
      });

      // Dispatch Data
      dispatch({
        type: 'get_categories',
        payload: categoriesData,
      });

      dispatch({
        type: 'get_priorities',
        payload: prioritiesData,
      });

      setTimeout(() => {
        dispatch({
          type: 'get_listings',
          payload: listingsData,
        });
      }, 500);

      //   console.log(listingsData, 'listingsData');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <AppContext.Provider value={{ state, getAppData }}>
      {state.loadingData ? (
        <View style={styles.loadingContainer}>
          <AppActivityIndictor visible={state.loadingData}  />
        </View>
      ) : (
        <Stack.Navigator>
          <Stack.Screen component={LisitingsScreen} name="Not Forget" />
          <Stack.Screen component={CreateListScreen} name="Create Listings" />
          <Stack.Screen component={ViewListScreen} name="View Listings" />
          <Stack.Screen component={UpdateListScreen} name="Edit Listings" />
        </Stack.Navigator>
      )}
    </AppContext.Provider>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
