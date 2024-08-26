import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Search from '@/components/search';
import { Colors } from '@/constants/Colors';
import MainCard from './(tabs)/mainCard';
import { Feather } from '@expo/vector-icons';

const App = () => {
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
