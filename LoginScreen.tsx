// components/LoginScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// Navigasyon için gerekli hook'u import edin
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Örnek: Stack'teki rotaların tipleri (TypeScript için önerilir)
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const LoginScreen = () => {
  // Navigation hook'unu kullanın
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  // CustomInput'tan gelen state'leri tuttuğunuz varsayılıyor
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Şimdilik şifre kontrolü yapmadan HomeScreen'e yönlendirin [cite: 19]
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    // RegisterScreen'e yönlendirin [cite: 18]
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giriş Yap</Text>

      {/* ... CustomInput alanları burada olmalı ... */}

      {/* GİRİŞ YAP BUTONU */}
      <Button 
        title="Giriş Yap" 
        onPress={handleLogin} 
        color="#1E90FF"
      />

      {/* KAYIT OL BUTONU (Yeni eklenen) */}
      <Button 
        title="Kayıt Ol" 
        onPress={handleRegister} 
        color="#3CB371" // Farklı bir renk seçebilirsiniz
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
});

export default LoginScreen;