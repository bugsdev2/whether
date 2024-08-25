import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const Search = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="search here" />
            <Pressable>
                <Text>Search</Text>
            </Pressable>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        borderWidth: 1,
        flex: 1,
        borderColor: 'black',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
});
