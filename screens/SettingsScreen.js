import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSMSNotification, togglePushNotification, toggleEmailNotification } from '../store/actions';

function SettingsScreen() {
  const dispatch = useDispatch();
  const smsNotification = useSelector((state) => state.smsNotification);
  const pushNotification = useSelector((state) => state.pushNotification);
  const emailNotification = useSelector((state) => state.emailNotification);

  const handleToggleSMS = () => {
    dispatch(toggleSMSNotification(!smsNotification));
  };

  const handleTogglePush = () => {
    dispatch(togglePushNotification(!pushNotification));
  };

  const handleToggleEmail = () => {
    dispatch(toggleEmailNotification(!emailNotification));
  };

  return (
    <View>
      <Text>SMS Notification:</Text>
      <CheckBox value={smsNotification} onValueChange={handleToggleSMS} />
      <Text>Push Notification:</Text>
      <CheckBox value={pushNotification} onValueChange={handleTogglePush} />
      <Text>Email Notification:</Text>
      <CheckBox value={emailNotification} onValueChange={handleToggleEmail} />
    </View>
  );
}

export default SettingsScreen;
