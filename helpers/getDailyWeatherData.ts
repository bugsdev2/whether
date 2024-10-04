import axios from 'axios';
import { useState, useEffect } from 'react';
import { WeatherData } from '@/interfaces/weatherData';

export const getDailyWeatherData = (name: string, lat: number = 0, lon: number = 0): WeatherData => {
    const [data, setData] = useState<WeatherData>({});
    const [err, setErr] = useState('');

    let latitude, longitude;
    if (lat !== 0 && lon !== 0) {
        latitude = lat.toString();
        longitude = lon.toString();
    }

    var url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&timezone=auto&forecast_days=8`;
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setErr(err);
            });
    }, [name]);

    return data;
};
