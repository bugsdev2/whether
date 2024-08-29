import { FlatList, StyleSheet, TextInput, View, Text, Pressable } from 'react-native';
import React, { useContext, useEffect, useMemo } from 'react';
import { Colors } from '@/constants/Colors';
import { LocationContext } from '@/app/index';
import { LatLonProvider } from '@/app/index';
import { useGetLanLon } from '@/hooks/useGetLatLon';
import { getData, setData } from '@/helpers/storage';
import { LatLonData } from '@/interfaces/latLonData';

const Search = (props: { iconDisplay: () => void }) => {
    const { latLonData, setLatLonData } = useContext(LatLonProvider);
    const { searchQuery, setSearchQuery } = useContext(LocationContext);

    function handleLocationSelection(name: string, lat: number, lon: number, admin1: string, country: string) {
        setData('latLonData', JSON.stringify({ name, lat, lon, admin1, country }));
        setLatLonData({ name, lat, lon, admin1, country });
        props.iconDisplay();
    }

    const data = useGetLanLon(searchQuery);

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={searchQuery} placeholder="enter the location here" placeholderTextColor={Colors.darkMode.light} onChangeText={(query) => setSearchQuery(query)} />
            </View>
            <FlatList
                style={styles.flatListView}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.searchSuggestions}>
                            <Pressable onPress={() => handleLocationSelection(item.name, item.latitude, item.longitude, item.admin1, item.country)}>
                                <Text style={{ color: 'white' }}>
                                    {item.name}
                                    {item.admin1 && ', ' + item.admin1 + ','} {item.country}
                                </Text>
                            </Pressable>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<View style={{ display: 'none' }}></View>}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        zIndex: 50,
    },

    input: {
        borderWidth: 1,
        backgroundColor: Colors.darkMode.bgGradientDark,
        flex: 1,
        borderColor: Colors.darkMode.gray,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 2,
        color: Colors.darkMode.light,
    },

    btn: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    btnTxt: {
        color: Colors.darkMode.light,
    },

    listContainer: {
        backgroundColor: Colors.darkMode.light,
    },

    flatListView: {
        position: 'absolute',
        zIndex: 50,
        top: 30,
        right: 15,
        left: 15,
    },

    searchSuggestions: {
        backgroundColor: Colors.darkMode.bgGradientLight,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});
