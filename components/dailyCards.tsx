import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { LatLonProvider } from '@/app/index';
import { getProcessedDailyData } from '@/helpers/processDailyWeatherData';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';

const DailyCards = () => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    const { latLonData, setLatLonData } = useContext(LatLonProvider);

    const [weatherData, error] = useGetWeatherData(latLonData?.name, latLonData?.lat!, latLonData?.lon!);

    const data = getProcessedDailyData(weatherData.daily);

    function handleWeatherCondition(code: number) {
        const weatherCondition = processWeatherCode(code);
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.image} source={weatherCondition?.image2} />
                <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
            </View>
        );
    }

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={[styles.date, styles.text]}>{item!.time.split('-').reverse().join('/')}</Text>
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
                        </View>
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
        color: Colors.darkMode.light,
        fontFamily: 'fontPort',
    },

    date: {
        fontSize: 20,
    },

    boxContainer: {
        minWidth: 200,
        padding: 15,
        // borderWidth: 1,
        borderColor: Colors.darkMode.gray,
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: Colors.darkMode.richblack,
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
