import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Pressable, Keyboard, Dimensions } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useGetLanLon } from '@/hooks/useGetLatLon';
import { setData } from '@/helpers/storage';

const Search = (props: { iconDisplay: () => void }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    function handleLocationSelection(name: string, lat: number, lon: number, admin1: string, country: string) {
        setData('latLonData', { name, lat, lon, admin1, country });
        Keyboard.dismiss();
        props.iconDisplay();
    }

    const data = useGetLanLon(searchQuery ? searchQuery : '');

    const searchSuggestions = data?.map((item) => {
        return (
            <View
                key={item.id}
                style={styles.searchSuggestions}
            >
                <Pressable
                    onPress={() => handleLocationSelection(item?.name, item?.latitude, item?.longitude, item?.admin1, item?.country)}
                    onTouchStart={() => handleLocationSelection(item?.name, item?.latitude, item?.longitude, item?.admin1, item?.country)}
                >
                    <Text style={styles.text}>
                        {item?.name}
                        {item?.admin1 && ', ' + item?.admin1 + ','} {item?.country}
                    </Text>
                </Pressable>
            </View>
        );
    });

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoFocus
                    value={searchQuery}
                    placeholder="enter the location here"
                    placeholderTextColor={Colors.lightMode.light}
                    onChangeText={(query) => setSearchQuery(query)}
                />
            </View>
            <View style={{ alignItems: 'center' }}>{searchSuggestions}</View>
            {/* <FlatList
                keyboardShouldPersistTaps="handled"
                style={styles.flatListView}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.searchSuggestions}>
                            <Pressable onPress={() => handleLocationSelection(item.name, item.latitude, item.longitude, item.admin1, item.country)}>
                                <Text style={styles.text}>
                                    {item.name}
                                    {item.admin1 && ', ' + item.admin1 + ','} {item.country}
                                </Text>
                            </Pressable>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<View style={{ display: 'none' }}></View>}
            /> */}
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

    text: {
        color: 'black',
        fontSize: Dimensions.get('screen').width < 768 ? 16 : 18,
    },

    input: {
        borderWidth: 1,
        backgroundColor: Colors.lightMode.richblack,
        flex: 1,
        borderColor: Colors.lightMode.light,
        borderRadius: 30,
        paddingHorizontal: Dimensions.get('screen').width < 768 ? 15 : 25,
        paddingVertical: Dimensions.get('screen').width < 768 ? 2 : 8,
        fontSize: Dimensions.get('screen').width < 768 ? 16 : 18,
        color: Colors.lightMode.light,
    },

    btn: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    btnTxt: {
        color: Colors.lightMode.light,
    },

    listContainer: {
        backgroundColor: Colors.lightMode.light,
    },

    flatListView: {
        position: 'absolute',
        zIndex: 50,
        top: 30,
        right: 15,
        left: 15,
    },

    searchSuggestions: {
        backgroundColor: Colors.lightMode.light,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '92%',
    },
});
