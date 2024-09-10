import { FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import { PortLligatSlab_400Regular } from '@expo-google-fonts/port-lligat-slab';

import { Colors } from '@/constants/Colors';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { LatLonData } from '@/interfaces/latLonData';
import { getProcessedDailyData } from '@/helpers/processDailyWeatherData';
import { processWeatherCode } from '@/helpers/weatherCodeProcessor';
import { setData } from '@/helpers/storage';

const DailyCards = (props: { latLonData: LatLonData }) => {
    const [fontsLoaded] = useFonts({
        fontPort: PortLligatSlab_400Regular,
    });

    function handleTouchStart(time: string) {
        setData('time', time);
    }

    const [weatherData] = useGetWeatherData(props.latLonData.name, props.latLonData?.lat!, props.latLonData?.lon!);

    const data = getProcessedDailyData(weatherData.daily)?.toSpliced(0, 1);

    function handleWeatherCondition(code: number) {
        const weatherCondition = processWeatherCode(code);
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.image} source={weatherCondition?.image2} />
                <Text style={[styles.text, styles.weatherDescription]}>{weatherCondition?.description}</Text>
            </View>
        );
    }

    function processTime(dateStr: string, func: string) {
        const date = new Date(dateStr);

        switch (func) {
            case 'titleDate':
                return `${date.toDateString().slice(0, 10)}`;
                break;
        }
    }

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <FlatList
                contentContainerStyle={styles.flatlistContainer}
                key={'_'}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Link asChild href="/(tabs)/hourlyweather">
                            <Pressable onTouchStart={() => handleTouchStart(item?.time)} style={styles.container}>
                                <Text style={[styles.date, styles.text]}>{processTime(item?.time, 'titleDate')}</Text>
                                <View style={styles.boxContainer}>
                                    <Text style={[styles.text, styles.temp]}>
                                        {'Max: '}
                                        {item!.temperature_2m_max}
                                        {'°C'}
                                    </Text>
                                    <Text style={[styles.text, styles.temp]}>
                                        {'Min: '}
                                        {item!.temperature_2m_min}
                                        {'°C'}
                                    </Text>
                                    {handleWeatherCondition(item.weather_code)}
                                </View>
                            </Pressable>
                        </Link>
                    );
                }}
                horizontal={Dimensions.get('screen').width < 768 ? true : false}
                showsHorizontalScrollIndicator={false}
                numColumns={Dimensions.get('screen').width < 768 ? 1 : 3}

                // ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
            />
        );
    }
};

export default DailyCards;

const styles = StyleSheet.create({
    flatlistContainer: {
        alignItems: 'center',
    },

    container: {
        alignItems: 'center',
    },

    text: {
        color: Colors.lightMode.light,
        fontFamily: 'fontPort',
    },

    date: {
        fontSize: Dimensions.get('screen').width < 768 ? 20 : 24,
    },

    boxContainer: {
        minWidth: 200,
        padding: 15,
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 5,
        marginBottom: 15,
        borderRadius: 20,
        backgroundColor: Colors.lightMode.richblack,
    },

    image: {
        width: 120,
        height: 120,
    },

    temp: {
        fontSize: Dimensions.get('screen').width < 768 ? 18 : 22,
    },

    weatherDescription: {
        fontSize: Dimensions.get('screen').width < 768 ? 22 : 26,
    },

    // seperator: {
    //     borderWidth: 1,
    //     borderColor: 'rgba(255,255,255,0.5)',
    // },
});
