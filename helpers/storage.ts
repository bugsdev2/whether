import AsyncStorage from '@react-native-async-storage/async-storage';
import { LatLonData } from '@/interfaces/latLonData';

export const setData = (key: string, value: string) => {
    try {
        AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log('Error storing data: ', err);
    }
};

export const getData = async (key: string): Promise<LatLonData | undefined> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (!value) {
            let err = 'Error: Not found';
            throw err;
        }
        if (value !== null) {
            const data = await value;
            return JSON.parse(data);
        }
    } catch (err: any) {
        console.log('Error retrieving data: ', err);
        return err;
    }
};
