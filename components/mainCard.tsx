import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';

import { Colors } from '@/constants/Colors';
import { MainCardData } from '@/interfaces/mainCardData';
import { setData } from '@/helpers/storage';

const MainCard = (props: MainCardData) => {
    const { latLonData, weatherData, weatherCondition } = props;

    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    function handleTouchStart(time: string) {
        setData('time', time.slice(0, 10));
    }

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>Loading...</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.location]}>
                    {latLonData?.name}
                    {latLonData?.country ? ', ' + latLonData.country : null}
                </Text>
                <View style={styles.hr}></View>
                <Link asChild href={'/hourlyweather'} style={styles.linkContainer}>
                    <Pressable onTouchStart={() => handleTouchStart(weatherData?.current?.time!)} style={styles.card}>
                        <Text style={[styles.text, styles.temperature]}>
                            {weatherData?.current?.temperature_2m}
                            {weatherData?.current_units?.temperature_2m}
                        </Text>
                        <Text style={[styles.text, styles.appTemperature]}>
                            {weatherData?.current?.apparent_temperature ? 'Feels Like' : null} {weatherData?.current?.apparent_temperature}
                            {weatherData?.current_units?.temperature_2m}
                        </Text>
                        <Image style={styles.image} source={weatherCondition?.image2} />
                        <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
                    </Pressable>
                </Link>
                <View style={styles.hr}></View>
            </View>
        );
    }
};

export default React.memo(MainCard);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        zIndex: 5,
    },

    hr: {
        marginVertical: 10,
        height: 2,
        width: '90%',
        opacity: 0.4,
        backgroundColor: Colors.lightMode.light,
    },

    linkContainer: {
        width: '90%',
    },

    card: {
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.lightMode.richblack,
        padding: 15,
    },

    text: {
        color: Colors.lightMode.light,
        fontFamily: 'fontPort',
    },

    location: {
        paddingTop: 10,
        fontSize: 25,
        textAlign: 'center',
    },

    temperature: {
        fontSize: 35,
    },

    appTemperature: {
        fontSize: 22,
    },

    image: {
        width: 170,
        height: 170,
    },

    weatherDescription: {
        fontSize: 25,
    },
});
