import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import SubmitButton from './SubmitButton';
import RecordButton from './RecordButton';

export default function Scream() {

    const [screamURI, setScreamURI] = useState('');
    const [response, setResponse] = useState('');
    const [screamed, setScreamed] = useState(false);
    const [recording, setRecording] = useState();

    async function startRecording() {
        try {
          console.log('Requesting permissions..');
          await Audio.requestPermissionsAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          });
    
          console.log('Starting recording..');
          const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
          );
          setRecording(recording);
          console.log('Recording started');
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }
    
      async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
        });
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);
      }

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
            setResponse(JSON.parse(text)['content']);
            setScreamed(true);
        });
    }

    return (
        <View style={styles.container}>
            {screamed ? (
                <View style={styles.container}>
                    <Text style={styles.responseText}>
                        {response}
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
    },
});