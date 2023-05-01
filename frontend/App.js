import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch, Dimensions } from 'react-native';

import Gaze from './components/Gaze';
import Scream from './components/Scream';

const {width, height} = Dimensions.get('window');

export default function App() {

    const [scream, setScream] = useState(true);

    const toggleSwitch = () => {
        setScream(!scream);
    }

    return (
        <View style={styles.container}>
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
                <Scream />
            ) : (
                <Gaze />
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: '10%',
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
