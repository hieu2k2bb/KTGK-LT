import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
import { useMyContextProvider, login } from '../index';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [controller, dispatch] = useMyContextProvider();
  const { userLogin } = controller;
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleLogin = () => {
    login(dispatch, email, password);
  };

  useEffect(() => {
    if (userLogin !== null) navigation.navigate('Home');
  }, [userLogin]);

  useEffect(() => {
    setIsValidEmail(email.includes('@'));
  }, [email]);

  useEffect(() => {
    setIsValidPassword(password.length >= 6);
  }, [password]);

  const isDisabled = !isValidEmail || !isValidPassword || email === '' || password === '';

  return (
    <View style={{ marginHorizontal: 20, marginTop: 50 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={require('../assets/logo.jpg')}
          style={{ width: 100, height: 100, marginBottom: 10 }}
          resizeMode="contain"
        />
      </View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          mode="outlined"
          style={{ marginBottom: 20, flex: 1 }}
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <Button
        mode="contained"
        onPress={handleLogin}
        buttonColor='pink'
        textColor='black'
        style={{ marginBottom: 10 }}
        disabled={isDisabled}
      >
        Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ textAlign: 'center', color: 'blue' }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Login;