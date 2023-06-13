import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch, Text, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import * as SplashScreen from 'expo-splash-screen';


import ScreamAudio from './components/ScreamAudio';
import GazeAudio from './components/GazeAudio';
import Welcome from './components/Welcome';
import { socket } from './socket';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [response, setResponse] = useState('');
    const [gazes, setGazes] = useState([]);
    const [page, setPage] = useState('welcome');

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

    const pageSwitch = (newPage) => {
        if (newPage==='gaze') {
            setGazes([]);
        }
        setPage(newPage);
    }

    const backgroundComponent = () => import("./components/AnimatedGradient");

    return (
        
        <View style={styles.outerContainer}>
            <WithSkiaWeb getComponent={backgroundComponent} />
            <View style={styles.navContainer} >
                <Pressable style={styles.navItem} onPress={() => pageSwitch('welcome')}>
                    <Text style={styles.navText}>Welcome</Text>
                </Pressable>
                <Pressable style={styles.navItem} onPress={() => pageSwitch('scream')}>
                    <Text style={styles.navText}>Scream</Text>
                </Pressable>
                <Pressable style={styles.navItem} onPress={() => pageSwitch('gaze')}>
                    <Text style={styles.navText}>Gaze</Text>
                </Pressable>
            </View>
            {
                {
                    'welcome': <Welcome />,
                    'scream': <ScreamAudio scream_response={response} />,
                    'gaze': <GazeAudio gaze_response={gazes} />
                }[page]
            }
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
    flex: 1/8,
    flexDirection: 'row',
    justifyContent: 'center',
},
navItem: {
    flex: 1,
    justifyContent: 'center',
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
