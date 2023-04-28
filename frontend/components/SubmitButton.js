import { Pressable, StyleSheet, Text } from 'react-native';

export default function SubmitButton(onButtonPressed) {

    return (
        <Pressable style={styles.submitButton} onPress={onButtonPressed}>
            <Text style={styles.buttonText}>Submit</Text>
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
        margin: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
    },
});