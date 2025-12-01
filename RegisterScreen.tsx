// components/RegisterScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// Eğer CustomInput'unuz varsa onu import edin
// import CustomInput from './CustomInput'; 

const RegisterScreen = () => {
  // 1. Input değerlerini tutmak için state'leri tanımlayın
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleRegister = () => {
    // 2. Şifreler uyuşuyor mu kontrolü [cite: 32]
    if (password !== passwordRepeat) {
      // Şifreler uyuşmuyorsa Alert.alert() ile uyarı gösterin [cite: 33]
      Alert.alert('Hata', 'Şifreler uyuşmuyor!');
      return;
    }

    // 3. Şifreler aynıysa konsola mesaj yazdırın [cite: 34]
    console.log("Kayıt başarılı");
    
    // Test için girilen verileri de gösterebiliriz
    console.log('Kayıt Verileri:', { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yeni Kullanıcı Kaydı</Text>

      {/* E-POSTA INPUT'U (CustomInput ile değiştirilmelidir [cite: 29]) */}
      <View style={styles.inputPlaceholder}><Text>E-posta Girişi</Text></View> 
      
      {/* ŞİFRE INPUT'U */}
      <View style={styles.inputPlaceholder}><Text>Şifre Girişi</Text></View> 

      {/* ŞİFRE TEKRAR INPUT'U */}
      <View style={styles.inputPlaceholder}><Text>Şifre Tekrar Girişi</Text></View> 

      {/* KAYIT OL BUTONU [cite: 30] */}
      <Button 
        title="Kayıt Ol" 
        onPress={handleRegister} 
        color="#28a745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  // CustomInput kullanmadığınız varsayımıyla geçici placeholder stilleri
  inputPlaceholder: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 15,
      marginBottom: 15,
      borderRadius: 5,
  }
});

export default RegisterScreen;