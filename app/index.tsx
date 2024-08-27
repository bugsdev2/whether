import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import Search from '@/components/search';
import { Colors } from '@/constants/Colors';
import MainCard from './(tabs)/mainCard';
import { Feather } from '@expo/vector-icons';
import { getData } from '@/helpers/storage';

export const LocationContext = createContext<React.Context<(string | React.Dispatch<React.SetStateAction<string>>)[]> | null>(null);

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }

    const data = getData('location');

    return (
        <LocationContext.Provider value={[searchQuery, setSearchQuery]}>
            <View style={styles.container}>
                <Pressable onPress={() => setSearchIconDisplay(false)}>
                    <Feather name="search" style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]} />
                </Pressable>
                {searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}
                <MainCard />
            </View>
        </LocationContext.Provider>
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
