import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, Dimensions, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/Feather';
import MIcon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';

import { getHourlyWeatherData } from '@/helpers/getHourlyWeatherData';
import { getData } from '@/helpers/storage';
import { LatLonData } from '@/interfaces/latLonData';
import { getProcessedHourlyData } from '@/helpers/processHourlyData';
import { Colors } from '@/constants/Colors';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';

const Hourlyweather = () => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    const navigate = useNavigation();

    const [date, setDate] = useState('');

    const [latLonData, setLatLonData] = useState<LatLonData>({ name: '', lat: 0, lon: 0, admin1: '', country: '' });

    useEffect(() => {
        getData('latLonData').then((res) => {
            setLatLonData(res!);
        });
        getData('time').then((res) => {
            setDate(res);
        });
    }, []);

    var hourlyData = getHourlyWeatherData(latLonData?.name, latLonData?.lat, latLonData?.lon).hourly;

    const processedHourlyData = getProcessedHourlyData(hourlyData);

    const finalHourlyData = processedHourlyData?.filter((item) => {
        return date === item.time?.slice(0, 10);
    });

    function processTime(dateStr: string, func: string) {
        const date = new Date(dateStr);

        switch (func) {
            case 'duration':
                return `${date.getHours()}:00 - ${date.getHours() + 1}:00`;
                break;
            case 'titleDate':
                return `${date.toDateString()}`;
                break;
        }
    }

    function handleWeatherCondition(code: number, is_day: number) {
        let timeOfDay: 'day' | 'night' = is_day ? 'day' : 'night';
        const weatherCondition = processWeatherCode(code, timeOfDay);
        return (
            <View style={styles.weatherImgContainer}>
                <Image
                    style={styles.image}
                    source={weatherCondition?.image}
                />
                <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
            </View>
        );
    }

    function processDistance(distance: number) {
        return (distance / 1000).toFixed(2);
    }

    function processUvIndex(uv: number) {
        if (uv >= 11) {
            return '(Extreme)';
        } else if (uv >= 8) {
            return '(Very High)';
        } else if (uv >= 6) {
            return '(High)';
        } else if (uv >= 3) {
            return '(Moderate)';
        } else if (uv > 0) {
            return '(Low)';
        } else {
            return '';
        }
    }

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Pressable
                            onPress={() => navigate.goBack()}
                            style={styles.iconBg}
                        >
                            <Icon
                                name="arrow-left"
                                style={styles.text}
                                color="white"
                            />
                        </Pressable>
                        <View>
                            <Text style={[styles.text, styles.title]}>{processTime(date, 'titleDate')}</Text>
                        </View>
                    </View>
                    <FlatList
                        keyExtractor={(item) => item.time!.toString()}
                        data={finalHourlyData}
                        renderItem={({ item }) => (
                            <View
                                key={item.time}
                                style={styles.card}
                            >
                                <View>
                                    <Text style={[styles.text, styles.time]}>{processTime(item.time!, 'duration')}</Text>
                                    <View>
                                        <View>{handleWeatherCondition(item.weather_code!, item?.is_day!)}</View>
                                        <View style={styles.cardDetails}>
                                            <View style={styles.cardColumn}>
                                                <View style={styles.smallIconContainer}>
                                                    <MIcon
                                                        style={styles.smallIcon}
                                                        name="thermostat"
                                                    />
                                                    <Text style={styles.text}>{`${item?.temperature_2m}°C`}</Text>
                                                </View>
                                                <View style={styles.smallIconContainer}>
                                                    <MIcon
                                                        style={styles.smallIcon}
                                                        name="water-drop"
                                                    />
                                                    <Text style={styles.text}>{`${item?.relative_humidity_2m}%`}</Text>
                                                </View>
                                                <View style={styles.smallIconContainer}>
                                                    <MIcon
                                                        style={styles.smallIcon}
                                                        name="cloudy-snowing"
                                                    />
                                                    <Text style={styles.text}>{`${item?.precipitation_probability}%`}</Text>
                                                </View>
                                            </View>
                                            <View style={[styles.cardColumn, { alignItems: 'flex-end' }]}>
                                                <View style={styles.smallIconContainer}>
                                                    <Text style={styles.text}>{`${item?.wind_speed_10m} km/h`}</Text>
                                                    <Icon
                                                        style={styles.smallIcon}
                                                        name="wind"
                                                    />
                                                </View>
                                                <View style={styles.smallIconContainer}>
                                                    <Text style={styles.text}>{`${item?.uv_index} ${processUvIndex(item?.uv_index!)}`}</Text>
                                                    <MIcon
                                                        style={styles.smallIcon}
                                                        name="sunny"
                                                    />
                                                </View>
                                                <View style={styles.smallIconContainer}>
                                                    <Text style={styles.text}>{`${processDistance(item?.visibility!)} km`}</Text>
                                                    <MIcon
                                                        style={styles.smallIcon}
                                                        name="remove-red-eye"
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </SafeAreaView>
            </View>
        );
    }
};

export default React.memo(Hourlyweather);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkMode.dark,
    },

    text: {
        color: Colors.lightMode.light,
        fontFamily: 'fontPort',
        fontSize: Dimensions.get('screen').width < 768 ? 22 : 26,
    },

    imageBg: {
        zIndex: -100,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
    },

    iconBg: {
        // backgroundColor: Colors.lightMode.richblack,
        borderRadius: 10,
        padding: 2,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        position: 'relative',
    },

    title: {
        color: Colors.lightMode.light,
        fontFamily: 'fontPort',
        paddingEnd: 10,
    },

    card: {
        padding: 20,
        backgroundColor: Colors.darkMode.secondary, // 'rgba(255,255,255,0.2)',
        margin: 15,
        borderRadius: 15,
    },

    time: {
        textAlign: 'center',
        paddingBottom: 6,
        marginBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.2)',
    },

    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardColumn: {
        gap: 5,
    },

    smallIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    smallIcon: {
        color: Colors.lightMode.light,
        fontSize: 24,
        opacity: 0.5,
    },

    image: {
        width: 80,
        height: 80,
    },

    weatherImgContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },

    weatherDescription: {
        textAlign: 'center',
    },
});
