import { FlatList, StyleSheet, TextInput, View, Text, Pressable, SafeAreaView, Keyboard } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '@/constants/Colors';
import { LocationContext } from '@/app/index';
import { LatLonProvider } from '@/app/index';
import { useGetLanLon } from '@/hooks/useGetLatLon';
import { setData } from '@/helpers/storage';

const Search = (props: { iconDisplay: () => void }) => {
    const { latLonData, setLatLonData } = useContext(LatLonProvider);
    const { searchQuery, setSearchQuery } = useContext(LocationContext);

    function handleLocationSelection(name: string, lat: number, lon: number, admin1: string, country: string) {
        setLatLonData({ name, lat, lon, admin1, country });
        setData('latLonData', { name, lat, lon, admin1, country });
        Keyboard.dismiss();
        props.iconDisplay();
    }

    const data = useGetLanLon(searchQuery);

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} autoFocus value={searchQuery} placeholder="enter the location here" placeholderTextColor={Colors.darkMode.light} onChangeText={(query) => setSearchQuery(query)} />
            </View>
            <FlatList
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
            />
        </View>
    );
};

export default React.memo(Search);

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },

    text: {
        color: 'black',
    },

    input: {
        borderWidth: 1,
        backgroundColor: Colors.darkMode.richblack,
        flex: 1,
        borderColor: Colors.darkMode.light,
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
        backgroundColor: Colors.darkMode.light,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});
