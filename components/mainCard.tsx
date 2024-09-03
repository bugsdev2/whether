import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

import { Colors } from '@/constants/Colors';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { LatLonProvider } from '@/app/index';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';
import { getData, setData } from '@/helpers/storage';

const MainCard = () => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    const { latLonData, setLatLonData } = useContext(LatLonProvider);

    useEffect(() => {
        getData('latLonData').then((data) => {
            if (data) {
                setLatLonData(data);
            }
        });
    }, []);

    let [weatherData, error] = useGetWeatherData(latLonData?.name, latLonData?.lat!, latLonData?.lon!);

    let timeOfDay: 'day' | 'night' = weatherData!.current?.is_day ? 'day' : 'night';
    const weatherCondition = processWeatherCode(weatherData!.current?.weather_code!, timeOfDay);

    useEffect(() => {
        setData('weather', { weather: weatherCondition?.description });
    }, [weatherCondition?.description]);

    function handlePress() {
        console.log('hello');
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
                <Link href={'/hourlyweather'} style={styles.linkContainer}>
                    <View style={styles.card}>
                        <Text style={[styles.text, styles.temperature]}>
                            {weatherData.current?.temperature_2m}
                            {weatherData.current_units?.temperature_2m}
                        </Text>
                        <Text style={[styles.text, styles.appTemperature]}>
                            {weatherData.current?.apparent_temperature ? 'Feels Like' : null} {weatherData.current?.apparent_temperature}
                            {weatherData.current_units?.temperature_2m}
                        </Text>

                        <Image style={styles.image} source={weatherCondition?.image2} />
                        <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
                    </View>
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
        backgroundColor: Colors.darkMode.light,
    },

    linkContainer: {
        width: '90%',
    },

    card: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.darkMode.richblack,
        padding: 15,
        width: '100%',
    },

    text: {
        color: Colors.darkMode.light,
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
