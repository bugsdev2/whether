import { HourlyWeatherDataArrOfObj } from '@/interfaces/hourlyWeatherData';

export function getProcessedHourlyData(obj: any, numOfDays: number = 7): HourlyWeatherDataArrOfObj[] | undefined {
    if (obj) {
        const processedArr: HourlyWeatherDataArrOfObj[] = [];
        for (let i = 0; i < (numOfDays + 1) * 24; i++) {
            let tempObj: HourlyWeatherDataArrOfObj = {
                time: obj['time'][i],
                temperature_2m: obj['temperature_2m'][i],
                relative_humidity_2m: obj['relative_humidity_2m'][i],
                apparent_temperature: obj['apparent_temperature'][i],
                precipitation_probability: obj['precipitation_probability'][i],
                precipitation: obj['precipitation'][i],
                rain: obj['rain'][i],
                showers: obj['showers'][i],
                weather_code: obj['weather_code'][i],
                visibility: obj['visibility'][i],
                wind_speed_10m: obj['wind_speed_10m'][i],
                wind_speed_80m: obj['wind_speed_80m'][i],
                wind_speed_120m: obj['wind_speed_120m'][i],
                wind_speed_180m: obj['wind_speed_180m'][i],
                wind_direction_10m: obj['wind_direction_10m'][i],
                wind_direction_80m: obj['wind_direction_80m'][i],
                wind_direction_120m: obj['wind_direction_120m'][i],
                wind_direction_180m: obj['wind_direction_180m'][i],
                uv_index: obj['uv_index'][i],
                uv_index_clear_sky: obj['uv_index_clear_sky'][i],
                is_day: obj['is_day'][i],
                sunshine_duration: obj['sunshine_duration'][i],
            };
            processedArr.push(tempObj);
        }

        return processedArr;
    }
}
