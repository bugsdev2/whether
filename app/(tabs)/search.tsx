import { SafeAreaView, Text, View, TextInput, Pressable, GestureResponderEvent } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { useGetLanLon } from '@/hooks/useGetLatLon';
import axios, { AxiosResponse } from 'axios';

import { DataContext } from './app';

import { getData, setData } from '@/helpers/storage';

export const Search = (props: { display: string }) => {
    const [searchValue, setSearchValue] = useState('');

    const [location, setLocation] = useState<any>();

    getData('weatherData')
        .then((res) => {
            console.log(location);
            setLocation(res);
        })
        .catch((err) => {
            console.log(err.message);
        });

    const geoData = useGetLanLon(location);
    const [coordinates, setCoordinates] = useState<{ lat: number; lon: number }>({ lat: 0, lon: 0 });
    const [searchSuggestions, setSearchSuggestions] = useState<any>();

    const [weatherData, setWeatherData] = useContext(DataContext);
    const [error, setError] = useState('');

    function handleSelection(lat: number, lon: number) {
        const url = `http://api.open-meteo.com/v1/forecast?latitude=${lat.toString()}&longitude=${lon.toString()}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,showers,snowfall,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&timezone=auto`;
        axios
            .get(url)
            .then((res) => {
                setWeatherData(res.data);
                console.log(weatherData);
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
            })
            .finally(() => {
                setListDisplay('hidden');
                setSearchValue('');
            });
    }

    useEffect(() => {
        if (searchValue) {
            setLocation(searchValue);
        }
    }, [searchValue]);

    useEffect(() => {
        if (!geoData) {
            setListDisplay('block');
        }
        const output = geoData?.map((item) => {
            return (
                <View key={item.id}>
                    <Pressable className="text-ldark py-2 border-b-2 border-gray-300" onPress={() => handleSelection(item.latitude, item.longitude)}>
                        <Text>
                            {item.name} {item.admin1} {item.admin2} {item.country}
                        </Text>
                    </Pressable>
                </View>
            );
        });

        setSearchSuggestions(output);
    }, [geoData]);

    const [listDisplay, setListDisplay] = useState('hidden');

    return (
        <SafeAreaView id="search" className={`${props.display} z-10 absolute mx-2 top-4 left-1 right-1`}>
            <View className="z-50">
                <TextInput onChangeText={setSearchValue} value={searchValue} className="px-4 py-1 bg-light text-ldark rounded-3xl z-50" placeholder="Search here"></TextInput>
            </View>
            <View className={`${listDisplay} mx-2 px-2 bg-gray-200 `}>{searchSuggestions}</View>
        </SafeAreaView>
    );
};

export default Search;
