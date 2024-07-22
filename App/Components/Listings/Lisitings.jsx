import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { primary } from '../../Config/Colors';
import AppText from '../AppText/AppText';
import List from './List';
import Swipeable from 'react-native-swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Lisitings = ({ listings, onCheck, onDelete }) => {
  const navigation = useNavigation();

  console.log(listings, 'listings');
  return (
    <View>
      {listings.map((item) => (
        <>
          <AppText style={styles.text}>{item.category.name}</AppText>
          <Swipeable
            key={item.id.toString()}
            rightButtons={[
              <TouchableOpacity
                onPress={() => {
                  onDelete(item.id);
                }}
                style={{
                  backgroundColor: '#eee',
                  height: '82%',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="delete"
                  size={30}
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>,
            ]}
          >
            <List
              onPress={() => navigation.navigate('View Listings', item)}
              title={item.title}
              description={item.description}
              done={item.done}
              color={item.priority.color}
              onCheck={() => {
                console.log(item.done, 'DONE');
                onCheck(item.id, item.done ? 0 : 1);
              }}
            />
          </Swipeable>
        </>
      ))}

    </View>
  );
};

export default Lisitings;

const styles = StyleSheet.create({
  text: {
    margin: 20,
    color: primary,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
