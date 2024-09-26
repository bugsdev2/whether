import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import Icon from '@expo/vector-icons/Feather';
import MIcon from '@expo/vector-icons/MaterialIcons';

import { Colors } from '@/constants/Colors';
import { MainCardData } from '@/interfaces/mainCardData';
import { setData } from '@/helpers/storage';

const MainCard = (props: MainCardData) => {
    const { latLonData, weatherData, weatherCondition } = props;

    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    function handleTouchStart(time: string | undefined) {
        if (time) setData('time', time?.slice(0, 10));
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
                <Link
                    asChild
                    href={'/hourlyweather'}
                    style={styles.linkContainer}
                >
                    <Pressable
                        onTouchStart={() => handleTouchStart(weatherData?.current?.time)}
                        style={styles.card}
                    >
                        <View>
                            <Text style={[styles.text, styles.temperature]}>
                                {weatherData?.current?.temperature_2m}
                                {weatherData?.current_units?.temperature_2m}
                            </Text>
                            <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
                        </View>

                        <View>
                            <Image
                                style={styles.image}
                                source={weatherCondition?.image}
                            />
                        </View>
                    </Pressable>
                </Link>
                <Link
                    href={'/hourlyweather'}
                    asChild
                >
                    <Pressable
                        style={styles.secondaryDataContainer}
                        onTouchStart={() => handleTouchStart(weatherData?.current?.time)}
                    >
                        <View style={styles.secondaryDataCard}>
                            <MIcon
                                style={styles.smallIcon}
                                name="thermostat"
                            />
                            <Text style={[styles.text, styles.secondaryData]}>
                                {weatherData?.current?.apparent_temperature}
                                {weatherData?.current_units?.apparent_temperature}
                            </Text>
                            <Text style={[styles.text, { opacity: 0.5 }]}>Feels Like</Text>
                        </View>
                        <View style={styles.secondaryDataCard}>
                            <Icon
                                style={styles.smallIcon}
                                name="wind"
                            />
                            <Text style={[styles.text, styles.secondaryData]}>{weatherData?.current?.wind_speed_10m}km/h</Text>
                            <Text style={[styles.text, { opacity: 0.5 }]}>Wind Speed</Text>
                        </View>
                        <View style={styles.secondaryDataCard}>
                            <MIcon
                                style={styles.smallIcon}
                                name="water-drop"
                            />
                            <Text style={[styles.text, styles.secondaryData]}>{weatherData?.current?.relative_humidity_2m + '%'}</Text>
                            <Text style={[styles.text, { opacity: 0.5 }]}>Humidity</Text>
                        </View>
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
        marginVertical: 20,
        height: 2,
        width: '90%',
        opacity: 1,
        backgroundColor: Colors.darkMode.secondary,
    },

    linkContainer: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
        alignItems: 'center',
        borderRadius: 30,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },

    text: {
        color: Colors.lightMode.light,
        fontFamily: 'fontPort',
    },

    location: {
        paddingTop: 10,
        fontSize: Dimensions.get('screen').width < 768 ? 25 : 32,
        textAlign: 'center',
    },

    temperature: {
        fontSize: Dimensions.get('screen').width < 768 ? 45 : 50,
    },

    image: {
        width: 155,
        height: 175,
    },

    weatherDescription: {
        fontSize: Dimensions.get('screen').width < 768 ? 22 : 26,
        // marginTop: Dimensions.get('screen').width < 768 ? -15 : -20,
        textAlign: 'center',
    },

    secondaryDataContainer: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: -10,
        minWidth: '90%',
        padding: 15,
        paddingVertical: 20,
        backgroundColor: Colors.darkMode.secondary,
    },

    secondaryDataCard: {
        alignItems: 'center',
    },

    secondaryData: {
        fontSize: 20,
        marginTop: 5,
    },

    smallIcon: {
        color: Colors.lightMode.light,
        fontSize: 25,
    },
});
