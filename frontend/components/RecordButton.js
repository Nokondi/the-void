import React, {useState} from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import {Audio} from 'expo-av';

export default function RecordButton() {

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

    return (
        <Pressable style={styles.recordButton} onPress={recording ? stopRecording : startRecording}>
            <Text style={styles.buttonText}>R</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    recordButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#5B639A',
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: '#422B4F',
        margin: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
    },
});