import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { ImageBackground, StyleSheet, View } from 'react-native';
export default function layout() {
    return (
        <View style={styles.container}>
            <ImageBackground style={[styles.container, styles.imageBg]} resizeMode="stretch" source={require('@/assets/images/weatherbg1.jpg')}>
                <StatusBar hidden />
                <Slot initialRouteName="index.tsx" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: -50,
    },

    imageBg: {
        zIndex: -40,
    },
});
