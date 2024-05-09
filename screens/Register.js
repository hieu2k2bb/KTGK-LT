import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { createAccount } from '../index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

  useEffect(() => {
    setIsValidEmail(email.includes('@'));
  }, [email]);

  useEffect(() => {
    setIsValidPassword(password.length >= 6);
  }, [password]);

  useEffect(() => {
    setIsValidConfirmPassword(password === confirmPassword);
  }, [confirmPassword, password]);

  const handleRegister = () => {
    createAccount(email, password, fullName);
  };

  const isDisabled = !isValidEmail || !isValidPassword || !isValidConfirmPassword || email === '' || password === '' || confirmPassword === ''|| fullName ==='';

  return (
    <View style={{ marginHorizontal: 20, marginTop: 50 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image 
          source={require('../assets/logo1.png')}
          style={{ width: 100, height: 100, marginBottom: 10 }}
          resizeMode="contain"
        />
      </View>
      <TextInput
        label="Full Name"
        value={fullName}
        onChangeText={setFullname}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />
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
          style={{ marginBottom: 10, flex: 1 }}
        />
        <IconButton 
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          mode="outlined"
          style={{ marginBottom: 20, flex: 1 }}
        />
        <IconButton 
          icon={showConfirmPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        />
      </View>
      <Button buttonColor='pink' textColor='black' mode="contained" onPress={handleRegister} style={{ marginBottom: 10 }} disabled={isDisabled}>
        Register
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ textAlign: 'center', color: 'blue' }}>
          Already have an account? Log in
        </Text>
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

export default Register;