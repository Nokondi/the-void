import { Pressable, StyleSheet, Text } from 'react-native';


export default function StandardButton( {buttonText, onButtonPressed} ) {

    return (
        <Pressable style={styles.standardButton} onPress={onButtonPressed}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    standardButton: {
        borderRadius: 10,
        backgroundColor: '#5B639A',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#422B4F',
        alignItems: 'center',
        width: 200,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
        fontFamily: 'Special-Elite',
        textAlign: 'center',
    },
});