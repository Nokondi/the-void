import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {Audio} from 'expo-av';

import SubmitButton from './SubmitButton';

export default function Scream() {

    const [text, onChangeText] = useState('')
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
    recordButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#5B639A',
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: '#422B4F',
        margin: 20,
    }
});