import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Switch, useWindowDimensions } from 'react-native';
import { Canvas,
         Rect, 
         Skia, 
         Shader, 
         RadialGradient,
         useValue,
         useSharedValueEffect,
         vec,
         mix
} from '@shopify/react-native-skia';
import { useSharedValue,
       withTiming,
       withRepeat,
} from 'react-native-reanimated';

export default function AnimatedGradient() {
    const radius = useValue(128);
    const sharedRadius = useSharedValue(128);
    const {width, height} = useWindowDimensions();
    const center = vec(width / 2, height / 2);
    const [up, setUp] = useState(true);


    useEffect(() => {
        sharedRadius.value = withRepeat(withTiming(500, { duration: 3500 }), -1, true);
    }, [sharedRadius]);

    useSharedValueEffect(() => {
        radius.current = sharedRadius.value;
    }, sharedRadius);

    return (
        <Canvas style={styles.canvas}>
            <Rect x={0} y={0} width={width} height={height}>
                <RadialGradient
                    style={styles.gradient}
                    c={center}
                    r={radius}
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