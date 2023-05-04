import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

export default function Gaze() {

    const [text, onChangeText] = useState('')
    const [response, setResponse] = useState('');
    const [gazed, setGazed] = useState(false);

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
            console.log(text)
            setResponse(JSON.parse(text));
            setGazed(true);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlashList 
                    data={response}
                    renderItem={({ item }) => 
                        <View style={styles.listItem}>
                        <Text style={styles.dateText}>{item[0]}</Text>
                        <Text style={styles.responseText}>{item[1]}</Text>
                        </View>}
                    estimatedItemSize={200}
                />
            </View>
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