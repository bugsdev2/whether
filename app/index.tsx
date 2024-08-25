import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from './(tabs)/homescreen';
import Search from '@/components/search';

const App = () => {
    return (
        <View style={styles.container}>
            <Search />
            <HomeScreen />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
