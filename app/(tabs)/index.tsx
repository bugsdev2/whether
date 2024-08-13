import { View, Text, Button, Pressable, Alert, Modal } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import { useGetLanLon, GeoData } from '@/hooks/useGetLatLon';

import Feather from '@expo/vector-icons/Feather';

import Search from './search';

export default function HomeScreen() {
    const [display, setDisplay] = useState('hidden');

    function handleSearch() {
        setDisplay('block');
    }
    return (
        <View className="flex-1">
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
                    <Search display={display} />
                    <Pressable className="absolute top-4 right-4 cursor-pointer" onPress={handleSearch}>
                        <Feather name="search" color="#fbfbfb" size={24} />
                    </Pressable>
                </View>
                <View id="content" className="items-center mt-16">
                    <View className="items-center">
                        <Text className="text-light text-2xl mb-2">Today</Text>
                        <View className="bg-ldark w-64 h-64 rounded-3xl  justify-evenly items-center p-3">
                            <View className="items-center">
                                <Text className="text-light text-5xl">23 C</Text>
                                <Text className="text-light text-xl">Feels like 29 C</Text>
                            </View>

                            <Text className="text-light text-2xl">Partly Cloudy</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
