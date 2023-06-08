import React, {useEffect, useCallback } from 'react';
import { StyleSheet,  useWindowDimensions } from 'react-native';
import { Canvas,
         Rect,
         Blend,
         FractalNoise,
         RadialGradient,
         useValue,
         useSharedValueEffect,
         vec
} from '@shopify/react-native-skia';
import { useSharedValue,
       withTiming,
       withRepeat,
       withDelay
} from 'react-native-reanimated';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default function AnimatedGradient() {
    const radius = useValue(128);
    const sharedRadius = useSharedValue(128);
    const {width, height} = useWindowDimensions();
    const center = vec(width / 2, height / 2);
    const circleR = useValue(1);
    const sharedCircleR = useSharedValue(0);

    const options = {
        background: {
            opacity: 0,
        },
        preset: "stars",
    };

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadStarsPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    useEffect(() => {
        sharedRadius.value = withDelay(Math.random() * 1000, withRepeat(withTiming(800, { duration: 8000 }), -1, true));
        sharedCircleR.value = withDelay(Math.random() * 1000, withRepeat(withTiming(1, { duration: 1000 }), -1, true));
    }, [sharedRadius, sharedCircleR]);

    useSharedValueEffect(() => {
        radius.current = sharedRadius.value;
        circleR.current = sharedCircleR.value;
    }, sharedRadius, sharedCircleR);

    return (
        <>
            <Canvas style={styles.canvas}>
                <Rect x={0} y={0} width={width} height={height}>
                    <Blend mode="multiply">
                    <RadialGradient
                        style={styles.gradient}
                        c={center}
                        r={radius}
                        colors={["#483475", "#070b34"]}
                        />
                    <FractalNoise freqX={0.01} freqY={0.01} octaves={4} />
                    </Blend>
                </Rect>
            </Canvas>
            <Particles options={options} init={particlesInit} loaded={particlesLoaded} />
        </>
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