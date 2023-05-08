import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { socket } from '../socket';

import SubmitButton from './SubmitButton';

export default function Gaze( {gaze_response} ) {

    const [text, onChangeText] = useState('');
    const [gazed, setGazed] = useState(false);

    const gazeIntoVoid = () => {
        socket.emit('gaze', text);
        setGazed(true);
    }

    return (
        <View style={styles.container}>
            {gazed ? (
                <View style={styles.listContainer}>
                    <FlashList 
                        data={gaze_response}
                        renderItem={({ item }) => 
                            <View style={styles.listItem}>
                            <Text style={styles.dateText}>{item[0]}</Text>
                            <Text style={styles.responseText}>{item[1]}</Text>
                            </View>}
                        estimatedItemSize={200}
                    />
                </View>
            ) : (
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
                    <View style={styles.buttonContainer}>
                        <SubmitButton onButtonPressed={gazeIntoVoid} />
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        margin: '2%',
        borderColor: "#5B639A",
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    listContainer: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
        paddingTop: '2%',
        fontStyle: 'italic',
    },
    responseText: {
        color: '#fff',
        fontSize: 24,
        paddingLeft: '5%',
        paddingBottom: '1%',
    },
    listItem: {
        flex:1,
        borderBottomColor: '#5B639A',
        borderBottomWidth: 3,
    },
});