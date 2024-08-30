export interface DailyWeatherData {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: number[];
}

export interface DailyWeatherDataArrOfObj {
    apparent_temperature_max: number;
    apparent_temperature_min: number;
    rain_sum: number;
    showers_sum: number;
    snowfall_sum: number;
    sunrise: string;
    sunset: string;
    temperature_2m_max: number;
    temperature_2m_min: number;
    time: string;
    weather_code: number;
}
