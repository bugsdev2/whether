import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { LatLonProvider } from '@/app/index';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';
// import { setData, getData } from '@/helpers/storage';

const MainCard = () => {
    const { latLonData, setLatLonData } = useContext(LatLonProvider);

    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    // useEffect(() => {
    //     getData('latLonData').then((data) => {
    //         if (data?.name !== '') {
    //             setLatLonData(data!);
    //         }
    //     });
    //     setData('latLonData', JSON.stringify(latLonData));
    // }, [latLonData]);

    let [weatherData, error] = useGetWeatherData(latLonData?.name, latLonData?.lat!, latLonData?.lon!);

    let timeOfDay: 'day' | 'night' = weatherData!.current?.is_day ? 'day' : 'night';
    const weatherCondition = processWeatherCode(weatherData!.current?.weather_code!, timeOfDay);

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
                {/* <View style={styles.hr}></View> */}
                <View style={styles.card}>
                    <Text style={[styles.text, styles.temperature]}>
                        {weatherData.current?.temperature_2m}
                        {weatherData.current_units?.temperature_2m}
                    </Text>
                    <Text style={[styles.text, styles.appTemperature]}>
                        {weatherData.current?.apparent_temperature ? 'Feels Like' : null} {weatherData.current?.apparent_temperature}
                        {weatherData.current_units?.temperature_2m}
                    </Text>

                    <Image style={styles.image} source={weatherCondition?.image} />
                    <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
                </View>
                {/* <View style={styles.hr}></View> */}
            </View>
        );
    }
};

export default React.memo(MainCard);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        zIndex: -10,
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
        marginVertical: 15,
        width: 150,
        height: 150,
    },

    weatherDescription: {
        fontSize: 25,
    },
});
