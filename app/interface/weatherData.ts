export interface WeatherData {
    current: { apparent_temperature: number; interval: number; is_day: number; rain: number; relative_humidity_2m: number; showers: number; snowfall: number; temperature_2m: number; time: string; weather_code: number };
    current_units: { apparent_temperature: string; interval: string; is_day: string; rain: string; relative_humidity_2m: string; showers: string; snowfall: string; temperature_2m: string; time: string; weather_code: string };
    daily: {
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
    };
    daily_units: { apparent_temperature_max: string; apparent_temperature_min: string; rain_sum: string; showers_sum: string; snowfall_sum: string; sunrise: string; sunset: string; temperature_2m_max: string; temperature_2m_min: string; time: string; weather_code: string };
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}
