// components/LoginScreen.tsx

import {  
  TextInput, 
  Button,    
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('--- Giriş Denemesi ---');
    console.log('E-posta:', email);   
    console.log('Şifre:', password); 
    console.log('----------------------');
  };
  return (
    
    <SafeAreaView style={styles.container}>
      {/* Klavye açıldığında içeriğin kaydırılması için */}
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.header}>Giriş Yap</Text>

        {/* E-posta Metin Kutusu */}
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Şifre Metin Kutusu */}
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        
        {/* Giriş Yap Butonu */}
        <View style={styles.buttonContainer}>
          <Button
            title="Giriş Yap"
            onPress={() => console.log('Butona tıklandı (Şimdilik işlevi yok)')}
            color="#007bff" // Buton rengi
          />
          
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center', // İçeriği ortala
    alignItems: 'center', 
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#007bff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20, // Boşluk bırak
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  }
});
export default LoginScreen;
