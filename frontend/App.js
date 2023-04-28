import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';

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
            />
            {scream ? (
                <View>
                    <Text style={styles.switchText}>Scream</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.switchText}>Gaze</Text>
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
