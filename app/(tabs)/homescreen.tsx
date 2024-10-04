import { StyleSheet, Pressable, View, ScrollView, RefreshControl, Dimensions, Alert } from 'react-native';
import { addEventListener } from '@react-native-community/netinfo';
import React, { useState, useEffect } from 'react';

import { Colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { getData } from '@/helpers/storage';
import { getDailyWeatherData } from '@/helpers/getDailyWeatherData';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';

import Search from '@/components/search';
import MainCard from '@/components/mainCard';
import DailyCards from '@/components/dailyCards';

import { LatLonData } from '@/interfaces/latLonData';
import { WeatherCondition } from '@/interfaces/weatherCondition';
import { WeatherData } from '@/interfaces/weatherData';

const HomeScreen = () => {
    //////////////////// search icon display ////////////////////
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }
    ////////////////////////////////////////////////////////////

    const [latLonData, setLatLonData] = useState<LatLonData>({ name: '', lat: 0, lon: 0, admin1: '', country: '' });

    let weatherData = getDailyWeatherData(latLonData?.name, latLonData?.lat, latLonData?.lon);

    addEventListener((state) => {
        if (!state.isConnected) {
            console.log(state.isConnected);
            Alert.alert('Connection Error', 'Cloud Compass needs to have an active internet connection to work. \nPlease connect to the internet and restart the app.');
        }
    });

    // useEffect(() => {
    //     getData('weatherData').then((data) => {
    //         if (!data || Object.keys(data).length === 0) {
    //             setData('weatherData', weatherData).then((_) => {
    //                 console.log('Weather Data saved to device');
    //             });
    //         }
    //     });
    // }, [weatherData]);

    useEffect(() => {
        getData('latLonData').then((data) => {
            if (!data) {
                Alert.alert('Welcome to Cloud Compass', 'Please use the search icon on the top right corner of the screen to select your location.');
            }
        });
    }, []);

    useEffect(() => {
        getData('latLonData').then((data) => {
            if (data) {
                setLatLonData(data);
            }
        });
    }, [searchIconDisplay]); // using searchIconDisplay so that the function runs when it changes

    let timeOfDay: 'day' | 'night' = weatherData?.current?.is_day ? 'day' : 'night';

    const weatherCondition: WeatherCondition = processWeatherCode(weatherData?.current?.weather_code!, timeOfDay);

    // // Currently commenting out refresh code as it doesn't work
    // const [refreshing, setRefreshing] = React.useState(false);
    // const onRefresh = () => {
    //     setRefreshing(true);
    //     getData('latLonData').then((data: LatLonData) => {
    //         if (data) {
    //             setLatLonData(data);
    //         }
    //     });
    //     getData('weatherData').then((data: WeatherData) => {
    //         if (data) {
    //             setDailyWeatherData(data);
    //         }
    //     });
    //     setTimeout(() => {
    //         setRefreshing(false);
    //     }, 2000);
    // };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={refreshing}
            //         onRefresh={onRefresh}
            //     />
            // }
        >
            <Pressable
                style={styles.searchIconContainer}
                onPress={() => setSearchIconDisplay(false)}
            >
                <Feather
                    name="search"
                    style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]}
                />
            </Pressable>
            <View style={styles.searchInputContainer}>{searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}</View>
            <View style={styles.mainCardContainer}>
                <MainCard
                    latLonData={latLonData}
                    weatherData={weatherData}
                    weatherCondition={weatherCondition}
                />
            </View>
            <View style={styles.dailyCardsContainer}>
                <DailyCards latLonData={latLonData} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'space-evenly',
    },

    searchIcon: {
        fontSize: Dimensions.get('screen').width < 768 ? 25 : 30,
        color: Colors.lightMode.light,
        textAlign: 'right',
    },

    searchIconContainer: {
        position: 'absolute',
        right: 10,
        top: 15,
        zIndex: 50,
    },

    searchInputContainer: {
        zIndex: 10,
        position: 'absolute',
        top: 15,
        left: 15,
        right: 15,
    },

    mainCardContainer: {
        marginTop: Dimensions.get('screen').width < 768 ? 35 : 50,
    },

    dailyCardsContainer: {
        marginVertical: 35,
    },
});
