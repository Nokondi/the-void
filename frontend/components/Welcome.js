import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {

    return (
        <View style={styles.container}>
            <Text style={styles.responseText}>
            <h1>Welcome to the Void</h1>
            <p>Two things I've learned since I was first diagnosed with anxiety 15 years ago are that:</p> 
            <ol>
                <li>coping with anxiety is a constant practice, and</li>
                <li>we are not alone.</li>
            </ol>
            <p>The NIH estimates that almost 1/3 of adults in the US suffer from some anxiety disorder; 
                in spite of this, it's easy to feel isolated and unable to share your feelings with other 
                people because you don't want to burden them.</p>

            <p>One of the strategies I've developed to help me cope with anxiety is to scream. I find the 
                practice cathartic. My primary outlet for this over the last decade has been as the vocalist 
                for a metal band, where I can channel my anxiety into art for other people and can see through 
                my audience's response that I'm not alone. Not everyone has an outlet like this, which has led 
                me to create The Void. </p>

            <h2>The Void in Philosophy and Religion</h2>
            <p>During my time as an English major (and later teacher), I read a lot of philosophy. 
                In particular, I was enamored with Buddhism and Existentialism, two very distinct ideologies 
                that nevertheless have a connection in their perspective on the void. In much of Western philosophy 
                and theology, emptiness, void, or nothing has negative connotations: the void is a place of darkness 
                and the unknown, and the unknown is something to be feared; humans have a void in ourselves that we 
                seek to fill with spirituality or pleasure or possessions; to do nothing is to invite evil into your 
                life ("idle hands are the devil's playthings"); it is the pessimist who points out the emptiness 
                in the glass. Buddhism and (much later) Existentialism present a different perspective on the void 
                or nothingness: to be content with nothingness is to be free, uncontrolled by possessions or desire; 
                idleness is time for quiet reflection; emptiness is potential: the medium of change and the space 
                into which we grow and evolve.</p>

            <p>According to Buddhism, emptiness is not an absolute nothingness but rather a recognition that all 
            things are interdependent and devoid of intrinsic essence. This means that nothing has a fixed, permanent, 
            or separate identity. Instead, everything is interconnected and arises dependently upon causes and conditions. 
            By understanding the emptiness of all things, practitioners can free themselves from attachment, leading to 
            liberation and enlightenment. Examining and understanding the void within all things is not seen as nihilistic, 
            but rather as a profound insight that allows individuals to transcend suffering and perceive the world more clearly.</p>

            <p>For the Existentialist, there is no inherent or predetermined meaning that suffuses reality. This void of 
            intrinsic meaning can be seen as a source of dread and anxiety; however, this absence also provides us the space 
            to create our own meaning and purpose in life. It is only through an acknowledgment of this inherent nothingness 
            that humans have the capacity to make choices and take responsibility for their actions. Existentialists encourage 
            individuals to confront the void and embrace their freedom, finding meaning through personal experiences, relationships, 
            and the pursuit of authentic existence.</p></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    responseText: {
        color: '#fff',
        fontSize: 24,
        paddingLeft: '5%',
        paddingBottom: '1%',
    },
});