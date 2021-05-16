import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        label="E-Mail"
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={val => setPassword(val)}
      />
      <Button
        icon="login"
        mode="contained"
        onPress={() => console.log('foobar')}>
        Login
      </Button>
    </View>
  );
}
