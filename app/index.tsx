import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import HomeScreen from '@/app/(tabs)/homescreen';
import { Colors } from '@/constants/Colors';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreen />
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkMode.dark,
    },
});
