import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import { getData } from '@/helpers/storage';

const MainCard = () => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.location]}>Delhi</Text>
                {/* <View style={styles.hr}></View> */}
                <View style={styles.card}>
                    <Text style={[styles.text, styles.temperature]}>25 C</Text>
                    <Text style={[styles.text, styles.appTemperature]}>Feels like 27 C</Text>

                    <Image style={styles.image} source={require('@/assets/images/weather-icons/heavy-rain.png')} />
                    <Text style={[styles.text, styles.weatherDescription]}>Heavy Rain</Text>
                </View>
                {/* <View style={styles.hr}></View> */}
            </View>
        );
    }
};

export default MainCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    hr: {
        marginVertical: 5,
        height: 2,
        width: '90%',
        backgroundColor: Colors.darkMode.gray,
    },

    card: {
        width: '80%',
        // height: '45%',
        marginVertical: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.darkMode.gray,
        padding: 15,
    },

    text: {
        color: Colors.darkMode.light,
        fontFamily: 'fontPort',
    },

    location: {
        paddingTop: 10,
        fontSize: 20,
    },

    temperature: {
        fontSize: 30,
    },

    appTemperature: {
        fontSize: 20,
    },

    image: {
        marginVertical: 15,
        width: 125,
        height: 125,
    },

    weatherDescription: {
        fontSize: 20,
    },
});
