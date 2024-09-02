import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';

export default function layout() {
    return (
        <View style={styles.container}>
            <ImageBackground style={[styles.imageBg]} resizeMode="cover" source={require('@/assets/images/bluesky.png')}>
                <StatusBar hidden />
                <Slot initialRouteName="index.tsx" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: -50,
    },

    imageBg: {
        zIndex: -40,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
});
