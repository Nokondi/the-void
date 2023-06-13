import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {

    return (
        <View style={styles.container}>
            <Text style={styles.responseText}>Welcome</Text>
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
        fontFamily: 'Quicksand',
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