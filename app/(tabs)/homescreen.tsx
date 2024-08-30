import { StyleSheet, Pressable, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import MainCard from '@/components/mainCard';
import Search from '@/components/search';
import { Feather } from '@expo/vector-icons';
import DailyCards from '@/components/dailyCards';

const HomeScreen = () => {
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.searchIconContainer} onPress={() => setSearchIconDisplay(false)}>
                <Feather name="search" style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]} />
            </Pressable>
            {searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}
            <View style={styles.mainCardContainer}>
                <MainCard />
            </View>
            <View style={styles.dailyCardsContainer}>
                <DailyCards />
            </View>
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

    searchIconContainer: {
        position: 'absolute',
        zIndex: 50,
        right: 10,
        top: 15,
    },

    mainCardContainer: {
        marginTop: 35,
        zIndex: -10,
    },

    dailyCardsContainer: {
        marginTop: 35,
    },

    searchIcon: {
        fontSize: 25,
        color: Colors.darkMode.light,
        textAlign: 'right',
    },
});
