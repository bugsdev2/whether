import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

import { useEffect, useState, createContext } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { useGetLanLon, GeoData } from '@/hooks/useGetLatLon';

import Feather from '@expo/vector-icons/Feather';

import Search from './search';

export const DataContext = createContext<any>(null);
import { WeatherData } from '../interface/weatherData';

import { getData } from '@/helpers/storage';

import wCodes from '@/constants/weatherCodes';

import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';
import { useFonts } from 'expo-font';

interface WeatherCondition {
    day: {
        description: string;
        image: string;
    };
    night: {
        description: string;
        image: string;
    };
}

export default function App() {
    const [fontsLoaded] = useFonts({
        PortLligatSlab_400Regular,
    });

    const [display, setDisplay] = useState('hidden');

    const [weatherData, setWeatherData] = useState<WeatherData>();

    const [location, setLocation] = useState();

    const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>();
    let time: 'day' | 'night';

    let weatherCodes: { [index: string]: any } = wCodes;

    let weatherCode = weatherData?.current?.weather_code;
    time = weatherData?.current?.is_day ? 'day' : 'night';

    useEffect(() => {
        const key = Object.keys(weatherCodes).find((item) => item === weatherCode?.toString());
        if (key) {
            setWeatherCondition(weatherCodes[key]);
        }

        getData('data').then((res) => {
            if (res) {
                const { place, lat, lon } = JSON.parse(res);
                setLocation(place);
            }
        });
    }, [weatherData]);

    function handleSearch() {
        setDisplay('block');
    }

    function handleCloseSearch() {
        setDisplay('hidden');
    }

    if (!fontsLoaded) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <DataContext.Provider value={[weatherData, setWeatherData]}>
                <View className="flex-1">
                    <Search display={display} closeDisplay={() => handleCloseSearch()} />
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
                                <Text style={styles.textFont} className="text-light text-3xl mb-2">
                                    {location}
                                </Text>
                                <View className="bg-ldark w-80 h-80 rounded-3xl justify-evenly items-center p-8">
                                    <View className="items-center">
                                        <Text style={styles.textFont} className="text-light text-5xl">
                                            {weatherData?.current?.temperature_2m}
                                            {weatherData?.current_units?.temperature_2m}
                                        </Text>
                                        <Text style={styles.textFont} className="text-light text-2xl">
                                            Feels like {weatherData?.current?.apparent_temperature}
                                            {weatherData?.current_units?.apparent_temperature}
                                        </Text>
                                    </View>
                                    <Image className="h-28 w-28 my-1" source={{ uri: time === 'day' ? weatherCondition?.day?.image : weatherCondition?.night?.image }} />
                                    <Text style={styles.textFont} className="text-light text-3xl text-center">
                                        {time === 'day' ? weatherCondition?.day?.description : weatherCondition?.night?.description}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </DataContext.Provider>
        );
    }
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'PortLligatSlab_400Regular',
    },
});
