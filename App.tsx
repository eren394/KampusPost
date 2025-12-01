/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Oluşturduğunuz ve var olan ekranları import edin
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './RegisterScreen';
// Make sure HomeScreen exists at the correct path and extension
import HomeScreen from './HomeScreen';

// Stack Navigator'ı oluşturun
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // NavigationContainer kullanın
    <NavigationContainer>
      {/* createNativeStackNavigator kullanın */}
      <Stack.Navigator 
        // LoginScreen'in ilk açılış ekranı olduğunu gösterin
        initialRouteName="Login" 
      >
        {/* Ekranları stack'e ekleyin */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Kayıt Ol' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Akış' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
