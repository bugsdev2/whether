import { SafeAreaView, Text, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useGetLanLon } from '@/hooks/useGetLatLon';
import { useGetWeather } from '@/hooks/useGetWeather';

export const Search = (props: { display: string }) => {
    // const [geoData, error] = useGetLanLon('Kochi');

    // let lat = geoData[0].latitude;
    // let lon = geoData[0].longitude;

    // console.log(lat, lon, error);

    // const [weatherData, error] = useGetWeather(lat, lon);

    // console.log(weatherData);

    const [searchValue, setSearchValue] = useState('');
    const geoData = useGetLanLon(searchValue);

    // useEffect(() => {
    console.log(searchValue, geoData);
    // }, [searchValue]);

    return (
        <SafeAreaView className={`${props.display} z-20 absolute top-1 left-1 right-1`}>
            <View className="flex">
                <TextInput onChangeText={setSearchValue} value={searchValue} className="px-5 py-1 bg-ldark text-light placeholder:text-light rounded-3xl" placeholder="Search here"></TextInput>
            </View>
        </SafeAreaView>
    );
};

export default Search;
