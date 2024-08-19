import { View } from 'react-native';
import App from './app';

import { useState, createContext } from 'react';
import { WeatherData } from '../../interfaces/weatherData';
import { Dispatch, SetStateAction } from 'react';

export const DataContext = createContext<[WeatherData, Dispatch<SetStateAction<WeatherData>> | (() => WeatherData)]>([{}, () => {}]);

export default function HomeScreen() {
    const [weatherData, setWeatherData] = useState<WeatherData>({});

    return (
        <DataContext.Provider value={[weatherData, setWeatherData]}>
            <View className="flex-1">
                <App />
            </View>
        </DataContext.Provider>
    );
}
