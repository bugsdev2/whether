import AsyncStorage from '@react-native-async-storage/async-storage';
import { LatLonData } from '@/interfaces/latLonData';

export const setData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log('Error storing data: ', err);
    }
};

export const getData = async (key: string): Promise<LatLonData | undefined> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            const data = await value;
            return JSON.parse(data);
        }
    } catch (err) {
        console.log('Error retrieving data: ', err);
    }
};
