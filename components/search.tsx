import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

const Search = (props: { iconDisplay: () => void }) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="enter the location here" placeholderTextColor={Colors.darkMode.light} onChangeText={props.iconDisplay} />
            </View>
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
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
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
});
