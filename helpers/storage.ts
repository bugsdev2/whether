import AsyncStorage from '@react-native-async-storage/async-storage';
import { LatLonData } from '@/interfaces/latLonData';

export const setData = async (key: string, value: {}) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log('Error storing data: ', err);
    }
};

export const getData = async (key: string): Promise<any> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (err: any) {
        console.log('Error retrieving data: ', err);
        return err;
    }
};
