import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';

import Gaze from './components/Gaze';
import Scream from './components/Scream';

export default function App() {

    const [scream, setScream] = useState(true);

    const toggleSwitch = () => {
        setScream(!scream);
    }

    return (
        <View style={styles.container}>
            <Switch 
                onValueChange={toggleSwitch}
                value={scream}
                trackColor={{false: '#2F3237', true: '#2F3237'}}
                thumbColor={scream ? '#5B639A' : '#5B639A'}
                ios_backgroundColor="#2F3237"
                activeThumbColor="#5B639A"
            />
            {scream ? (
                <View>
                    <Text style={styles.switchText}>Scream</Text>
                    <Scream />
                </View>
            ) : (
                <View>
                    <Text style={styles.switchText}>Gaze</Text>
                    <Gaze />
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
},
switchText: {
    color: '#fff',
    fontSize: 24,
}
});
