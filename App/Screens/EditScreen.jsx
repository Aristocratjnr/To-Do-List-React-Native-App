import React, { useContext, useEffect, useReducer, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';
import * as Yup from 'yup';
import axios from 'axios';

import AppForm from '../Components/Form/AppForm';
import AppFormField from '../Components/Form/AppFormField';
import AppSubmitButton from '../Components/Form/AppSubmitButton';
import AppFormPicker from '../Components/Form/AppFormPicker';
import AppDatePicker from '../Components/AppDatePicker/AppDatePicker';
import AuthContext, { AppContext } from '../AuthContext/Context';

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required().max(120),
  category: Yup.string().required(),
  priorty: Yup.string().required(),
  date: Yup.date().required(),
});

const UpdateListScreen = ({ navigation, route }) => {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { listings, categories, loadingData, priorities } = appContext.state;
  const { item } = route.params;

  // Get Api Auth Key
  const { user } = authContext;

  const updateTask = async (
    title,
    description,
    deadline,
    category_id,
    priority_id
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `/tasks/${item.id}`,
        {
          title,
          description,
          done: item.done,
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

      setLoading(false);

      // Reset Navigation Stack
      navigation.reset({
        index: 0,
        routes: [{ name: 'Not Forget' }],
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "New one",
            description: item.description,
            date: new Date(item.deadline).toUTCString(),
            category: item.category,
            priorty: item.priority,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { title, description, date, category, priorty } = values;

            updateTask(
              title,
              description,
              new Date(date).getTime() / 1000,
              category.id,
              priorty.id
            );
          }}
        >
          <>
            <AppFormField name="title" label="Title" />

            <AppFormField
              label="Description"
              maxLength={120}
              numberOfLines={3}
              name="description"
              mode="outlined"
              // value={item.description}
            />

            <AppDatePicker allowPress name="date" />

            <AppFormPicker
              categories={categories}
              placeholder="Category"
              name="category"
              icon="plus-square-o"
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
    </View>
  );
};
export default UpdateListScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    backgroundColor: 'white',
    width: '100%',
  },
  btnContainer: {
    marginTop: 40,
  },
  textContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
