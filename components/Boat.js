import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
    return (
        <View>
            <Text style={styles.title}>
                <FontAwesome6 name="sailboat" size={24} color="#1E5A88" /> {name}
            </Text>

            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E5A88',
    },
    description: {
        fontSize: 15,
        color: '#333',
    },
    image: {
        width: '100%',
        height: 240,
        marginBottom: 15,
    },
});

export default Boat;