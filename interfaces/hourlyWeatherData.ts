export interface HourlyWeatherData {
    hourly_units?: {
        time?: string;
        temperature_2m?: string;
        relative_humidity_2m?: string;
        apparent_temperature?: string;
        precipitation_probability?: string;
        precipitation?: string;
        rain?: string;
        showers?: string;
        weather_code?: string;
        visibility?: string;
        wind_speed_10m?: string;
        wind_speed_80m?: string;
        wind_speed_120m?: string;
        wind_speed_180m?: string;
        wind_direction_10m?: string;
        wind_direction_80m?: string;
        wind_direction_120m?: string;
        wind_direction_180m?: string;
        uv_index?: string;
        uv_index_clear_sky?: string;
        is_day?: string;
        sunshine_duration?: string;
    };
    hourly?: {
        time?: string[];
        temperature_2m?: number[];
        relative_humidity_2m?: number[];
        apparent_temperature?: number[];
        precipitation_probability?: number[];
        precipitation?: number[];
        rain?: number[];
        showers?: number[];
        weather_code?: number[];
        visibility?: number[];
        wind_speed_10m?: number[];
        wind_speed_80m?: number[];
        wind_speed_120m?: number[];
        wind_speed_180m?: number[];
        wind_direction_10m?: number[];
        wind_direction_80m?: number[];
        wind_direction_120m?: number[];
        wind_direction_180m?: number[];
        uv_index?: number[];
        uv_index_clear_sky?: number[];
        is_day?: number[];
        sunshine_duration?: number[];
    };
}

export interface HourlyWeatherDataArrOfObj {
    time?: string;
    temperature_2m?: number;
    relative_humidity_2m?: number;
    apparent_temperature?: number;
    precipitation_probability?: number[];
    precipitation?: number;
    rain?: number;
    showers?: number;
    weather_code?: number;
    visibility?: number;
    wind_speed_10m?: number;
    wind_speed_80m?: number;
    wind_speed_120m?: number;
    wind_speed_180m?: number;
    wind_direction_10m?: number;
    wind_direction_80m?: number;
    wind_direction_120m?: number;
    wind_direction_180m?: number;
    uv_index?: number;
    uv_index_clear_sky?: number;
    is_day?: number;
    sunshine_duration?: number;
}
