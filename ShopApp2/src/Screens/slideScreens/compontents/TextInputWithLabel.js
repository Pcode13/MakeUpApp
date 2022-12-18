import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const TextInputWithLabel = ({
    title,
    value,
    multiline,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    isSecure,
    customStyle = {},
   ...props
  }) => {
  ;
  
    return (
      <View>
        <Text style={styles.headerStyle}>{title}</Text>
        <View>
          <TextInput
            value={value}
            multiline={multiline}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={[styles.inputStyle, customStyle]}
            {...props}
          />
        </View>
      </View>
    );
  };
  
  export default TextInputWithLabel;
  
  const styles = StyleSheet.create({
    inputStyle: {
      borderWidth: 2,
      height: 38,
      borderRadius: 10,
      borderColor: '#7a42f4',
      paddingHorizontal:10,
      marginTop: 8,
      fontSize: 14,
      fontWeight: '600',
      color: '#495057',
      backgroundColor: 'white',
      width: 300,
    },
    headerStyle: {
      marginTop: 5,
      color: '#7a42f4',
      fontSize: 13,
      fontWeight: 'bold',
    },
   
  });
  