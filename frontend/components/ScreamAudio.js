import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Audio} from 'expo-av';
import { socket } from '../socket';

import RecordButton from './RecordButton';

export default function ScreamAudio( {scream_response} ) {

    const [screamURI, setScreamURI] = useState('');
    const [screamed, setScreamed] = useState(false);
    const [recording, setRecording] = useState();
    const [playing, setPlaying] = useState(false);

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
        setScreamURI(uri);
        console.log('Recording stopped and stored at', uri);
        submitAudio(uri);
    }

    async function submitAudio(uri) {
        console.log('Loading Sound');
        const soundBlob = await fetch(uri).then((r) => r.blob());
        socket.emit('screamAudio', soundBlob)
        setScreamed(true);
    }

    async function playAudio() {
        if(!playing) {
            setPlaying(true);
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync( screamURI );
            console.log('Playing Sound');
            await sound.playAsync();
            setPlaying(false);
        }
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
                <View style={styles.buttonContainer}>
                    <RecordButton onRecordPressed={startRecording} onRecordReleased={stopRecording} />
                    <Text style={styles.responseText}>
                        Welcome to the Void. <br />
                        Hold the button and scream. <br />
                        Flip the switch to gaze into the void.
                    </Text>
                </ View>
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
    },
});