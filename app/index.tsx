import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState, createContext } from 'react';
import Search from '@/components/search';
import { Colors } from '@/constants/Colors';
import MainCard from './(tabs)/mainCard';
import { Feather } from '@expo/vector-icons';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';

export const LocationContext = createContext<{ searchQuery: string; setSearchQuery: React.Dispatch<React.SetStateAction<string>> }>({ searchQuery: '', setSearchQuery: () => {} });
export const LatLonProvider = createContext<{ latLonData: {}; setLatLonData: React.Dispatch<React.SetStateAction<LatLonData>> }>({ latLonData: {}, setLatLonData: () => {} });

export interface LatLonData {
    name: string;
    lat: number;
    lon: number;
}

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [latLonData, setLatLonData] = useState<LatLonData>({ name: '', lat: 0, lon: 0 });
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);
    const [weatherData, setWeatherData] = useState();

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }

    const data = useGetWeatherData(latLonData.name, latLonData.lat, latLonData.lon);

    return (
        <LatLonProvider.Provider value={{ latLonData, setLatLonData }}>
            <LocationContext.Provider value={{ searchQuery, setSearchQuery }}>
                <View style={styles.container}>
                    <Pressable onPress={() => setSearchIconDisplay(false)}>
                        <Feather name="search" style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]} />
                    </Pressable>
                    {searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}
                    <MainCard />
                </View>
            </LocationContext.Provider>
        </LatLonProvider.Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkMode.bgGradientDark,
        padding: 10,
    },

    searchIcon: {
        fontSize: 25,
        color: Colors.darkMode.light,
        textAlign: 'right',
    },
});
