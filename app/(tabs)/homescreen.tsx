import { StyleSheet, Pressable, View, ScrollView, RefreshControl } from 'react-native';
import React, { useState, useReducer } from 'react';

import { Colors } from '@/constants/Colors';
import MainCard from '@/components/mainCard';
import Search from '@/components/search';
import { Feather } from '@expo/vector-icons';
import DailyCards from '@/components/dailyCards';

const HomeScreen = () => {
    const [searchIconDisplay, setSearchIconDisplay] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            forceUpdate();
            setRefreshing(false);
        }, 2000);
    }, []);

    function handleIconDisplay() {
        setSearchIconDisplay(true);
    }

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={styles.container}>
            <Pressable style={styles.searchIconContainer} onPress={() => setSearchIconDisplay(false)}>
                <Feather name="search" style={[!searchIconDisplay && { display: 'none' }, styles.searchIcon]} />
            </Pressable>
            <View style={styles.searchInputContainer}>{searchIconDisplay ? null : <Search iconDisplay={() => handleIconDisplay()} />}</View>
            <View style={styles.mainCardContainer}>
                <MainCard />
            </View>
            <View style={styles.dailyCardsContainer}>
                <DailyCards />
            </View>
        </ScrollView>
    );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.darkMode.bgGradientDark,
        padding: 10,
    },

    searchIcon: {
        fontSize: 25,
        color: Colors.darkMode.light,
        textAlign: 'right',
    },

    searchIconContainer: {
        position: 'absolute',
        right: 10,
        top: 15,
    },

    searchInputContainer: {
        zIndex: 10,
    },

    mainCardContainer: {
        marginTop: 35,
    },

    dailyCardsContainer: {
        marginVertical: 35,
    },
});
