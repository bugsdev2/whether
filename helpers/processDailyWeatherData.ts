import { DailyWeatherDataArrOfObj } from '@/interfaces/dailyWeatherData';

export function getProcessedDailyData(obj: any, numOfDays: number = 7): DailyWeatherDataArrOfObj[] | undefined {
    if (obj) {
        const processedArr: DailyWeatherDataArrOfObj[] = [];
        for (let i = 0; i < numOfDays; i++) {
            let tempObj = {
                apparent_temperature_max: obj['apparent_temperature_max'][i],
                apparent_temperature_min: obj['apparent_temperature_min'][i],
                rain_sum: obj['rain_sum'][i],
                showers_sum: obj['showers_sum'][i],
                snowfall_sum: obj['snowfall_sum'][i],
                sunrise: obj['sunrise'][i],
                sunset: obj['sunset'][i],
                temperature_2m_max: obj['temperature_2m_max'][i],
                temperature_2m_min: obj['temperature_2m_min'][i],
                time: obj['time'][i],
                weather_code: obj['weather_code'][i],
            };
            processedArr.push(tempObj);
        }

        return processedArr;
    }
}
