import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Switch, useWindowDimensions } from 'react-native';
import { Canvas,
         Rect, 
         Skia, 
         Shader, 
         RadialGradient,
         vec 
} from '@shopify/react-native-skia';
import Animated, {
       useSharedValue,
       withTiming,
       useAnimatedStyle,
       useAnimatedProps,
} from 'react-native-reanimated';

export default function AnimatedGradient() {
    const radius = useSharedValue(128);
    const {width, height} = useWindowDimensions();
    const center = vec(width / 2, height / 2);
    const [up, setUp] = useState(true);

    const config = {
        duration: 1000,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if(up) {
                radius.value = withTiming(radius.value + 10, config);
            }
            else {
                radius.value = withTiming(radius.value - 10, config);
            }
            console.log(radius.value)
        }, 1000);

    }, []);

    return (
        <Canvas style={styles.canvas}>
            <Rect x={0} y={0} width={width} height={height}>
            <RadialGradient
                style={styles.gradient}
                c={center}
                r={radius.value}
                colors={["#483475", "#070b34"]}
                >
            </ RadialGradient>
            </Rect>
        </Canvas>
    );
    
}


const styles = StyleSheet.create({
    gradient: {
        width: "100%",
        height: "100%",
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
});