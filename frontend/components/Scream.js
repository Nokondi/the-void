import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import SubmitButton from './SubmitButton';

export default function Scream() {

    const [text, onChangeText] = useState('')

    const submitScream = () => {
        fetch('http://127.0.0.1:5000/scream', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "15cr3@my0u5cr3@mw3@115cr3@mf0r1c3cr3@m"
            },
            body: JSON.stringify({
                scream: text
            })
        }).then((response) => { 
            return response.text();
        }).then((text) => {
            console.log(text);
        });
    }

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
            <SubmitButton onButtonPressed={submitScream} />
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