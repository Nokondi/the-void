import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function RecordButton({onRecordPressed}) {

    return (
        <Pressable style={styles.recordButton} onPress={onRecordPressed}/>
    );
}

const styles = StyleSheet.create({
    recordButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#5B639A',
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#fff',
        margin: 20,
        alignContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
        textAlign: 'center',
    },
});