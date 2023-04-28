import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import SubmitButton from './SubmitButton';

export default function Scream() {

    const [text, onChangeText] = useState('')

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textBox}
                editable
                multiline
                numberOfLines={5}
                selectTextOnFocus
                placeholder='What do you scream?'
                onChangeText={onChangeText}
                value={text}
            />
            <SubmitButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        backgroundColor: '#fff',
        color: "#000",
        padding: 10,
        margin: 20,
        borderColor: "#5B639A",
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
        width: '100%'
    },
});