import weatherCodes from '@/constants/weatherCodes';
import { WeatherCondition } from '@/interfaces/weatherCondition';

export function processWeatherCode(code: number, timeOfDay: string = 'day'): WeatherCondition {
    for (let key in weatherCodes) {
        if (code?.toString() === key) {
            if (timeOfDay == 'day') {
                return weatherCodes[key].day;
            } else {
                return weatherCodes[key].night;
            }
        }
    }
    return {
        description: '',
        image: undefined,
    };
}
