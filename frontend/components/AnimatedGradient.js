import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    useAnimatedProps,
  } from 'react-native-reanimated';

window._frameTimestamp = null
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AnimatedGradient() {
    const x_start = useSharedValue(0);
    const x_end = useSharedValue(0);
    const y_start = useSharedValue(0);
    const y_end = useSharedValue(0);

    const config = {
        duration: 1000,
    };

    const ani_props = useAnimatedProps(() => {
        return {
            start: withTiming({x: x_start.value, y: y_start.value}, config),
            end: withTiming({x: x_end.value, y: y_end.value}, config),
        };
    });

    useEffect(() => {
        const interval = setInterval(() => {
            x_start.value = ((x_start.value * 10 + 1) % 10) / 10;
            x_end.value = ((x_end.value * 10 - 1) % 10) / 10;
            y_start.value = ((y_start.value * 10 + 1) % 10) / 10;
            y_end.value = ((y_end.value * 10 - 1) % 10) / 10;
        }, 1000);

    }, []);

    return (
        <AnimatedLinearGradient
            style={styles.linearGradient}
            colors={['#070e17', '#3d80cd']}
            animatedProps={ani_props}
             >
        </ AnimatedLinearGradient>
    );
    
}


const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        height: "100%",
        zIndex:-1000,
    },
});