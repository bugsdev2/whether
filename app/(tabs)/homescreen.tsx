import { StyleSheet, Pressable, View } from 'react-native';
import React, { useState, useContext } from 'react';
import { Colors } from '@/constants/Colors';
import MainCard from '@/app/(tabs)/mainCard';
import Search from '@/components/search';
import { Feather } from '@expo/vector-icons';
import { LatLonProvider } from '@/app/index';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';

const HomeScreen = () => {
    const { latLonData, setLatLonData } = useContext(LatLonProvider);

    const [searchIconDisplay, setSearchIconDisplay] = useState(true);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setSearchIconDisplay(false)}>
                <Feather name="search" style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]} />
            </Pressable>
            {searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}
            <MainCard />
        </View>
    );
};

export default React.memo(HomeScreen);

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
