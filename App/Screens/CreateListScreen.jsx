import React, { useContext, useReducer, useState } from 'react';
import { StyleSheet, View, ScrollView , Alert} from 'react-native';

import Constants from 'expo-constants';
import * as Yup from 'yup';
import axios from 'axios';

import AppForm from '../Components/Form/AppForm';
import AppFormField from '../Components/Form/AppFormField';
import AppSubmitButton from '../Components/Form/AppSubmitButton';
import AppFormPicker from '../Components/Form/AppFormPicker';

import AppDatePicker from '../Components/AppDatePicker/AppDatePicker';
import AuthContext, { AppContext } from '../AuthContext/Context';
import { primary } from '../Config/Colors';
import {useNetInfo} from "@react-native-community/netinfo";
import AppFormCategory from '../Components/Form/AppFormCategory';
import OfflineBar from '../Components/OfflineBar/OfflineBar';

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required().max(120),
  priorty: Yup.string().required(),
  date: Yup.date().required(),
});

const CreateListScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const { listings, categories, loadingData, priorities } = appContext.state;



  // Get Api Auth Key
  const { user } = authContext;
  
  const netInfo = useNetInfo()
  const netStatus = netInfo.isInternetReachable; 

  const createTask = async (
    title,
    description,
    deadline,
    category_id,
    priority_id
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        '/tasks',
        {
          title,
          description,
          done: 0,
          deadline,
          category_id,
          priority_id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.api_token}`,
          },
        }
      );
      appContext.getAppData(true);
      //   console.log(data);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log(error);
    }
  };

  const createCategory = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        '/categories',
        {
          name: category,
        },
        {
          headers: {
            Authorization: `Bearer ${user.api_token}`,
          },
        }
      );
      appContext.getAppData(true);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
    }
  };
  const handleCreateTask = (values) =>{
    const { title, description, date, category, priorty } = values;
            createTask(
              title,
              description,
              new Date(date).getTime() / 1000,
              category.id,
              priorty.id
            );

  }
  const createTwoButtonAlert = (values) =>
  Alert.alert(
    "Are you Sure ",
    "Event Will be created",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => handleCreateTask(values) }
    ],
    { cancelable: false }
  );



  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
      {!netStatus && <OfflineBar />}
        <AppForm
          initialValues={{
            title: '',
            description: '',
            date: '',
            category: '',
            priorty: '',
          }}
          validationSchema={validationSchema}
          onSubmit={createTwoButtonAlert}
        >
          <>
            <AppFormField name="title" label="Title" />

            <AppFormField
              label="Description"
              maxLength={120}
              numberOfLines={3}
              name="description"
              mode="outlined"
            />

            <AppDatePicker allowPress name="date" />

            <AppFormCategory
              categories={categories}
              placeholder="Category"
              name="category"
              category={category}
              setCategory={setCategory}
              createCategory={createCategory}
              loading={loading}
            />

            <AppFormPicker
              categories={priorities}
              placeholder="Priority"
              name="priorty"
            />

            <View style={styles.btnContainer} />
            <AppSubmitButton title="Post" loading={loading} />
          </>
        </AppForm>
      </View>
      {/* <View style={styles.categoryContainer}>
        <Title style={{ textAlign: 'center', marginBottom: 10 }}>
          Create Category
        </Title>
        <TextInput
          placeholder="Category"
          onChangeText={(text) => setCategory(text)}
          value={category}
          disabled={loading}
        />
        <View style={styles.btnContainer} />
        <Button
          loading={loading}
          mode="contained"
          style={{ padding: 5, borderRadius: 15 }}
          onPress={() => {
            if (!category) {
              appAlertBox('Add a category name');
            } else {
              createCategory();
            }
          }}
        >
          Create Category
        </Button>
      </View> */}
    </ScrollView>
  );
};
export default CreateListScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
  },
  btnContainer: {
    marginTop: 20,
  },
  textContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  categoryContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
    borderTopColor: primary,
    borderTopWidth: 1,
    paddingTop: 20,
  },
});
