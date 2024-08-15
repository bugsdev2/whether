import { View, Text, Button, Pressable, Alert, Modal } from 'react-native';

import { useEffect, useState, useContext, createContext } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { useGetLanLon, GeoData } from '@/hooks/useGetLatLon';

import Feather from '@expo/vector-icons/Feather';

import Search from './search';

export const DataContext = createContext<any>(null);
import { WeatherData } from '../interface/weatherData';

export default function App() {
    const [display, setDisplay] = useState('hidden');

    const [weatherData, setWeatherData] = useState<WeatherData>();

    useEffect(() => {
        console.log(weatherData?.current);
    }, [weatherData]);

    function handleSearch() {
        setDisplay('block');
    }

    return (
        <DataContext.Provider value={[weatherData, setWeatherData]}>
            <View className="flex-1">
                <Search display={display} />
                <StatusBar hidden />
                <LinearGradient
                    className="flex-1"
                    colors={['#151515', '#242424']}
                    start={{
                        x: 0,
                        y: 0,
                    }}
                    end={{
                        x: 0,
                        y: 1,
                    }}
                >
                    <View id="search">
                        <Pressable className="absolute top-4 right-4 cursor-pointer" onPress={handleSearch}>
                            <Feather name="search" color="#fbfbfb" size={24} />
                        </Pressable>
                    </View>
                    <View id="content" className="items-center mt-16">
                        <View className="items-center">
                            <Text className="text-light text-2xl mb-2">Today</Text>
                            <View className="bg-ldark w-64 h-64 rounded-3xl  justify-evenly items-center p-3">
                                <View className="items-center">
                                    <Text className="text-light text-5xl">
                                        {weatherData?.current?.temperature_2m}
                                        {weatherData?.current_units?.temperature_2m}
                                    </Text>
                                    <Text className="text-light text-xl">
                                        Feels like {weatherData?.current?.apparent_temperature}
                                        {weatherData?.current_units?.apparent_temperature}
                                    </Text>
                                </View>

                                <Text className="text-light text-2xl">Partly Cloudy</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </DataContext.Provider>
    );
}
