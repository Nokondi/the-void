import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import * as SplashScreen from 'expo-splash-screen';

import ScreamAudio from './components/ScreamAudio';
import GazeAudio from './components/GazeAudio';
import { socket } from './socket';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [scream, setScream] = useState(true);
    const [response, setResponse] = useState('');
    const [gazes, setGazes] = useState([]);

    const [fontsLoaded] = useFonts({
        'Special-Elite': require('./assets/fonts/SpecialElite-Regular.ttf'),
        'Quicksand': require('./assets/fonts/Quicksand-VariableFont_wght.ttf')
    });

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onScream(scream_response) {
            console.log(scream_response['data']);
            setResponse(scream_response['data']);
        }

        function onGaze(gaze_response) {
            console.log(gaze_response);
            setResponse(gaze_response);
        }

        function onScreamAudio(scream_response) {
            console.log(scream_response['data']);
            setResponse(scream_response['data']);
        }

        function onGazeAudio(gaze_response) {
            console.log(gaze_response);
            setGazes(previous => [...previous, gaze_response]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('scream', onScream);
        socket.on('gaze', onGaze);
        socket.on('screamAudio', onScreamAudio);
        socket.on('gazeAudio', onGazeAudio)

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, [])

    const toggleSwitch = () => {
        if (!scream) {
            setGazes([]);
        }
        setScream(!scream);
    }

    const backgroundComponent = () => import("./components/AnimatedGradient");

    return (
        
        <View style={styles.outerContainer}>
            <WithSkiaWeb getComponent={backgroundComponent} />
            <View style={styles.navContainer} >
                <View style={styles.navItem}>
                    <Text style={styles.navText}>Welcome</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navText}>Scream</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navText}>Gaze</Text>
                </View>
            </View>
            <View style={styles.switchContainer}>
                <Switch 
                    onValueChange={toggleSwitch}
                    value={scream}
                    trackColor={{false: '#2F3237', true: '#2F3237'}}
                    thumbColor={scream ? '#5B639A' : '#5B639A'}
                    ios_backgroundColor="#2F3237"
                    activeThumbColor="#5B639A"
                />
            </View>
            {scream ? (
                <ScreamAudio scream_response={response} />
            ) : (
                <GazeAudio gaze_response={gazes} />
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
outerContainer: {
    flex: 1,
    justifyContent: 'center',
},
navContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
},
navItem: {
    flex: 1,
    justifyContent: 'flex-start',
},
navText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    paddingTop: 10
},
switchContainer: {
    flex: 1/3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2%',
},
switchText: {
    color: '#fff',
    fontSize: 24,
}
});
