import { Pressable, StyleSheet, Text } from 'react-native';

export default function SubmitButton( {buttonText, onButtonPressed} ) {

    return (
        <Pressable style={styles.submitButton} onPress={onButtonPressed}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    submitButton: {
        borderRadius: 10,
        backgroundColor: '#5B639A',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#422B4F',
        alignItems: 'center',
        width: '30%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
    },
});