import { Pressable, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function PlayButton( {buttonText, onButtonPressed} ) {

    return (
        <AntDesign name="playcircleo" size={24} color="#5B639A" onPress={onButtonPressed} />
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
        fontFamily: 'Special-Elite',
        textAlign: 'center',
    },
});