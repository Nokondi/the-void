import { StyleSheet, Text, View, Linking } from 'react-native';

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

                <p>Consider The Void a place to think and vent and to (maybe) look for connections in what others
                    are thinking and venting. All information here is anonymous. No location or identifying data is 
                    collected. It is up to you how you want to vent. If you're like me, you may not always have words 
                    to express what you need to. In other cases, you may feel like you have a lot that you need to
                    get off of your chest. However you choose to confront The Void, know that you are not alone.</p>

                <h2>If You Need Help</h2>
                <p>If you are in crisis and need help, there are resources available. Remember that we all need other
                    people at some point. No one is perfect. No one can do everything on their own. There is no 
                    shame in admitting that you are struggling, and there is no shame in asking for support. The 
                    following list of free mental health resources is not exhaustive, but is a good place to start:&nbsp; 
                    <Text style={{color: "#99DBF5"}} onPress={() => Linking.openURL("https://www.cdc.gov/mentalhealth/tools-resources/index.htm")}>
                        Centers for Disease Control and Prevention Mental Health Tools and Resources</Text></p>

                <h2>The Void in Philosophy and Religion</h2>
                <p>During my time as an English major (and later teacher), I read a lot of philosophy. 
                    In particular, I fell in love with Buddhism and Existentialism, two very distinct ideologies 
                    that nevertheless have a connection in their perspective on the void. In much of Western philosophy 
                    and theology, emptiness, void, or nothing has negative connotations: the void is a place of darkness 
                    and the unknown, and the unknown is something to be feared; humans have a void in ourselves that we 
                    seek to fill with spirituality or pleasure or possessions; to do nothing is to invite evil into your 
                    life ("idle hands are the devil's playthings"); it is the pessimist who points out the emptiness 
                    in the glass. Buddhism and (much later) Existentialism present a different perspective on the void 
                    or nothingness: to be accept nothingness is to be free, uncontrolled by possessions or desire; 
                    idleness is time for quiet reflection; emptiness is potential: the medium of change and the space 
                    into which we grow and evolve.</p>

                <p>The Buddhist concept of void or nothingness has multiple facets. It is difficult to write conclusively
                    about the Buddhist concept of nothingness, since there are variations in different schools of
                    Buddhist thought. In a basic sense, the Buddhist sees everything as "empty" in that it is devoid of 
                    intrinsic essence or individual identity. All things are instead deeply interconnected, and the "self" 
                    is an illusion brought about by the limits of our perspective. Through meditation, Buddhists 
                    strive to enter a state of emptiness, freeing their minds from thought, attachment, and the illusion 
                    of self. Examining and understanding the void within all things is not seen as nihilistic, but rather 
                    as a profound insight that allows individuals to transcend suffering and perceive the world more clearly.</p>

                <p>For the existentialist, there is no inherent or predetermined meaning that suffuses reality. Our consciousness 
                    is born from nothingness and returns to oblivion after death. This void of intrinsic meaning can be seen as a 
                    source of dread and anxiety; however, this absence also provides us the space to create our own meaning and 
                    purpose in life. Like the Buddhist, the existentialist finds connection in the void - it is the no-thing
                    that unites human experience: our mortality - the fragile, ephemeral nature of our consciousness in a void
                    that stretches backward and forward into infinity. It is only through an acknowledgment of the nothingness
                    around us and within us that humans have the capacity to make choices and take responsibility for their 
                    actions, defining ourselves every second of every day through our interactions with our world and other
                    finite beings. Existentialists encourage individuals to confront the void by embracing this freedom, 
                    finding meaning through personal experiences, relationships, and the pursuit of authentic existence.</p>

                <p>I find both of these ideologies compelling, particularly in a world that is constantly trying to divert
                    our attention away from the void. Capitalism is driven by the materialistic desire to fill every void
                    (temporal and spatial) with stuff. It is fueled by fear of the void, "Buy X because you aren't enough,
                    because you are growing older, because you don't have enough time, because you will die." Also, "Work
                    harder because you are one mistake away from losing everything and because you need to buy X." 

                </p>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    responseText: {
        color: '#fff',
        fontSize: 24,
        paddingLeft: '5%',
        paddingBottom: '1%',
        
    },
});