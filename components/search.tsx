import { FlatList, StyleSheet, TextInput, View, Text, Pressable } from 'react-native';
import React, { useState, useContext, useLayoutEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { LocationContext } from '@/app/index';
import { LatLonProvider } from '@/app/index';
import { useGetLanLon } from '@/hooks/useGetLatLon';

const Search = (props: { iconDisplay: () => void }) => {
    const { latLonData, setLatLonData } = useContext(LatLonProvider);
    const { searchQuery, setSearchQuery } = useContext(LocationContext);

    function handleSearchQuery(query: string) {
        setSearchQuery(query);
    }

    function handleLocationSelection(name: string, lat: number, lon: number) {
        setLatLonData({ name, lat, lon });
        props.iconDisplay();
    }

    const data = useGetLanLon(searchQuery);

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={searchQuery} placeholder="enter the location here" placeholderTextColor={Colors.darkMode.light} onChangeText={handleSearchQuery} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.searchSuggestions}>
                            <Pressable onPress={() => handleLocationSelection(item.name, item.latitude, item.longitude)}>
                                <Text>
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
    },

    input: {
        borderWidth: 1,
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

    searchSuggestions: {
        backgroundColor: Colors.darkMode.light,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});
