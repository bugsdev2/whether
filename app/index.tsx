import { ImageBackground, Dimensions, StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import HomeScreen from '@/app/(tabs)/homescreen';
import { Colors } from '@/constants/Colors';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreen />;
        </SafeAreaView>
    );
};

export default React.memo(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkMode.dark,
    },
});
