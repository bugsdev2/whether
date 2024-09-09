import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { LatLonProvider } from '@/app/index';
import { getProcessedDailyData } from '@/helpers/processDailyWeatherData';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';
import { setData } from '@/helpers/storage';
import { Link } from 'expo-router';

const DailyCards = () => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    function handleTouchStart(time: string) {
        setData('time', time);
    }

    const { latLonData } = useContext(LatLonProvider);

    const [weatherData] = useGetWeatherData(latLonData?.name, latLonData?.lat!, latLonData?.lon!);

    const data = getProcessedDailyData(weatherData.daily)?.toSpliced(0, 1);

    function handleWeatherCondition(code: number) {
        const weatherCondition = processWeatherCode(code);
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.image} source={weatherCondition?.image2} />
                <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
            </View>
        );
    }

    function processTime(dateStr: string, func: string) {
        const date = new Date(dateStr);

        switch (func) {
            case 'titleDate':
                return `${date.toDateString().slice(0, 10)}`;
                break;
        }
    }

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Link asChild href="/(tabs)/hourlyweather">
                            <Pressable onTouchStart={() => handleTouchStart(item?.time)} style={styles.container}>
                                <Text style={[styles.date, styles.text]}>{processTime(item?.time, 'titleDate')}</Text>
                                <View style={styles.boxContainer}>
                                    <Text style={[styles.text, styles.temp]}>
                                        {'Max: '}
                                        {item!.temperature_2m_max}
                                        {'°C'}
                                    </Text>
                                    <Text style={[styles.text, styles.temp]}>
                                        {'Min: '}
                                        {item!.temperature_2m_min}
                                        {'°C'}
                                    </Text>
                                    {handleWeatherCondition(item.weather_code)}
                                </View>
                            </Pressable>
                        </Link>
                    );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        );
    }
};

export default DailyCards;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    text: {
        color: Colors.lightMode.light,
        fontFamily: 'fontPort',
    },

    date: {
        fontSize: 20,
    },

    boxContainer: {
        minWidth: 200,
        padding: 15,
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: Colors.lightMode.richblack,
    },

    image: {
        width: 120,
        height: 120,
    },

    temp: {
        fontSize: 18,
    },

    weatherDescription: {
        fontSize: 22,
    },
});
