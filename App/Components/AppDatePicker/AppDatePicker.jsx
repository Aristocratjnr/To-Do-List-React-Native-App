import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppTextInput from '../AppTextInput/AppTextInput';

const AppDatePicker = ({ name, allowPress }) => {
  const { setFieldValue, values } = useFormikContext();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFieldValue(name, new Date(date).toUTCString());
    hideDatePicker();
  };

  return (
    <View style={{ width: '100%' }}>
      <AppTextInput
        onChangeText={(date) => setFieldValue(name, date)}
        value={values[name]}
        label="completion date"
        onPress={showDatePicker}
        icon="calendar-plus-o"
        editable={false}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default AppDatePicker;
