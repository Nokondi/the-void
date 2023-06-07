import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import {Audio} from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; 

import { socket } from '../socket';

import PlayButton from './PlayButton';

export default function GazeAudio( {gaze_response} ) {

    const [gazeOffset, setGazeOffset] = useState(0);
    const [gazeLimit, setGazeLimit] = useState(10);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        gazeIntoVoid();
    }, [])

    const gazeIntoVoid = () => {
        socket.emit('gazeAudio', gazeOffset, gazeLimit);
        setGazeOffset(gazeOffset + gazeLimit);
    }

    async function playAudio(sound_file) {
        const b = new Blob([sound_file]);
        const uri = URL.createObjectURL(b);
        console.log(uri);
        setPlaying(true);
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( uri );
        console.log('Playing Sound');
        await sound.playAsync();
    }

    return (
        <View style={styles.container}>
            <AntDesign name="eyeo" size={24} color="#5B639A" />
            <View style={styles.listContainer}>
                <FlashList 
                    data={gaze_response}
                    renderItem={({ item }) => 
                        <View style={styles.listItem}>
                            <Text style={styles.dateText}>{item['date']}</Text>
                            <PlayButton buttonText={"Play Scream"} onButtonPressed={() => playAudio(item['file'])} />
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
        flexDirection: 'column-reverse',
        margin: 20,
        justifyContent: 'center',
        inverted: true,
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
        flexDirection: 'row',
        paddingBottom: '1%',
        borderBottomColor: '#422B4F',
        borderBottomWidth: 3,
    },
});