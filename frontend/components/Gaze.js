import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import SubmitButton from './SubmitButton';

export default function Gaze() {

    const [text, onChangeText] = useState('')

    const gazeIntoVoid = () => {
        fetch('http://127.0.0.1:5000/gaze', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "15cr3@my0u5cr3@mw3@115cr3@mf0r1c3cr3@m"
            },
            body: JSON.stringify({
                gaze: text
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
                placeholder='What are you looking for?'
                onChangeText={onChangeText}
                value={text}
            />
            <SubmitButton onButtonPressed={gazeIntoVoid} />
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
    }
});