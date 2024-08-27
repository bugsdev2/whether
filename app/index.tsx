import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState, createContext } from 'react';
import Search from '@/components/search';
import { Colors } from '@/constants/Colors';
import MainCard from './(tabs)/mainCard';
import { Feather } from '@expo/vector-icons';
import { getData } from '@/helpers/storage';

export const LocationContext = createContext<{ searchQuery: string; setSearchQuery: React.Dispatch<React.SetStateAction<string>> }>({ searchQuery: '', setSearchQuery: () => {} });
export const LatLonProvider = createContext<{ latLonData: {}; setLatLonData: React.Dispatch<React.SetStateAction<{}>> }>({ latLonData: {}, setLatLonData: () => {} });

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [latLonData, setLatLonData] = useState({});
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }

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
