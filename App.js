import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import { MyContextControllerProvider } from './index';

const Stack = createStackNavigator();

const App = () => {
  const headerOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
    },
  };
  return (
    <MyContextControllerProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{...headerOptions,}}
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ 
              ...headerOptions,
              title: 'Home',
              headerLeft: () => null,
            }} 
          />
          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={headerOptions} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextControllerProvider>
  );
};

export default App;