import { LatLonData } from '@/interfaces/latLonData';
import { WeatherData } from '@/interfaces/weatherData';
import { WeatherCondition } from '@/interfaces/weatherCondition';

export interface MainCardData {
    latLonData: LatLonData;
    weatherData: WeatherData;
    weatherCondition: WeatherCondition;
}
