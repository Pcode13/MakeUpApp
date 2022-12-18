
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';


const CustomButton = ({
    isLoading,
    text,
    onPress
}) => {
    return (
        <>
        <TouchableOpacity onPress={onPress} style={styles.submitButton}>

         
                 <Text style={styles.submitButtonText}>{text}</Text>
            
        </TouchableOpacity>

       

</>
    );
};


const styles = StyleSheet.create({

    submitButton: {
        backgroundColor: '#fc0349',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 16,
        width:250,
        marginLeft:20
      },
      submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },

});


export default CustomButton;
