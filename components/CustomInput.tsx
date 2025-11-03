// components/CustomInput.tsx

import React from 'react';
import { 
  TextInput, 
  StyleSheet, 
  TextInputProps // Tüm TextInput özelliklerini almak için
} from 'react-native';

// Bileşenin alacağı özel props'ları tanımlıyoruz
interface CustomInputProps extends TextInputProps {
  // TextInputProps zaten 'placeholder', 'value', 'onChangeText' içeriyor
  // Buraya özel bir prop eklemeye gerek yok, sadece stil uygulayacağız.
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <TextInput
      style={styles.input}
      // Gelen tüm diğer props'ları (placeholder, secureTextEntry vb.) TextInput'a iletiyoruz
      {...props} 
    />
  );
};

const styles = StyleSheet.create({
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
});

export default CustomInput;