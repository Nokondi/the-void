import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { socket } from '../socket';

import SubmitButton from './SubmitButton';

export default function Scream( {scream_response} ) {

    const [text, onChangeText] = useState('');
    const [screamed, setScreamed] = useState(false);

    const submitScream = () => {
        socket.emit('scream', text);
        setScreamed(true);
    }

    return (
        <View style={styles.container}>
            {screamed ? (
                <View style={styles.container}>
                    <Text style={styles.responseText}>
                        {scream_response}
                    </Text>
                </View>

            ) : (
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
                    <View style={styles.buttonContainer}>
                        <SubmitButton onButtonPressed={submitScream} />
                    </ View>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1%',
    },
    textBox: {
        flex: 1,
        backgroundColor: '#fff',
        color: "#000",
        padding: '2%',
        borderColor: "#5B639A",
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
        margin: '2%',
    },
    responseText: {
        color: '#fff',
        fontSize: 24,
        padding: '1%',
        textAlign: 'center'
    },
});