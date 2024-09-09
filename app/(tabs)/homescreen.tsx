import { StyleSheet, Pressable, View, ScrollView, RefreshControl } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';

import { Colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { getData, setData } from '@/helpers/storage';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';
import { getHourlyWeatherData } from '@/helpers/getHourlyWeatherData';

import Search from '@/components/search';
import MainCard from '@/components/mainCard';
import DailyCards from '@/components/dailyCards';

import { LatLonProvider } from '@/app/index';

const HomeScreen = () => {
    //////////////////// search icon display ////////////////////
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }
    ////////////////////////////////////////////////////////////

    const { latLonData, setLatLonData } = useContext(LatLonProvider);

    let [weatherData, error] = useGetWeatherData(latLonData?.name, latLonData?.lat!, latLonData?.lon!);

    let timeOfDay: 'day' | 'night' = weatherData!.current?.is_day ? 'day' : 'night';
    const weatherCondition = processWeatherCode(weatherData?.current?.weather_code!, timeOfDay);

    useEffect(() => {
        setData('weather', { weather: weatherCondition?.description });
    }, [weatherCondition?.description]);

    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        getData('latLonData').then((data) => {
            if (data) {
                setLatLonData(data);
            }
        });
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            getData('latLonData').then((data) => {
                if (data) {
                    setLatLonData(data);
                }
            });
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={styles.container}>
            <Pressable style={styles.searchIconContainer} onPress={() => setSearchIconDisplay(false)}>
                <Feather name="search" style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]} />
            </Pressable>
            <View style={styles.searchInputContainer}>{searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}</View>
            <View style={styles.mainCardContainer}>
                <MainCard latLonData={latLonData} weatherData={weatherData} weatherCondition={weatherCondition} />
            </View>
            <View style={styles.dailyCardsContainer}>
                <DailyCards />
            </View>
        </ScrollView>
    );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.darkMode.bgGradientDark,
        padding: 10,
    },

    searchIcon: {
        fontSize: 25,
        color: Colors.lightMode.light,
        textAlign: 'right',
    },

    searchIconContainer: {
        position: 'absolute',
        right: 10,
        top: 15,
    },

    searchInputContainer: {
        zIndex: 10,
        position: 'absolute',
        width: '100%',
    },

    mainCardContainer: {
        marginTop: 35,
    },

    dailyCardsContainer: {
        marginVertical: 35,
    },
});
