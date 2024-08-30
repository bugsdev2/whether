import weatherCodes from '@/constants/weatherCodes';

export function processWeatherCode(code: number, timeOfDay: string = 'day') {
    for (let key in weatherCodes) {
        if (code == undefined) return;

        if (code.toString() === key) {
            if (timeOfDay == 'day') {
                return weatherCodes[key].day;
            } else {
                return weatherCodes[key].night;
            }
        }
    }
}
