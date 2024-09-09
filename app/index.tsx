import { ImageBackground, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '@/app/(tabs)/homescreen';

const App = () => {
    return (
        <ImageBackground style={[styles.imageBg]} resizeMode="cover" source={require('@/assets/images/bluesky.png')}>
            <HomeScreen />
        </ImageBackground>
    );
};

export default React.memo(App);

const styles = StyleSheet.create({
    imageBg: {
        zIndex: -40,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
});
