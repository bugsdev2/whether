import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';

const DailyCards = () => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                        <Text style={[styles.text]}>DailyCards</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={[styles.text]}>DailyCards</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={[styles.text]}>DailyCards</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
};

export default DailyCards;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    text: {
        color: Colors.darkMode.light,
        fontFamily: 'portFont',
    },

    boxContainer: {
        padding: 15,
        borderWidth: 1,
        alignItems: 'center',
    },
});
