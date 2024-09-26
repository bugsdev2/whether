import axios from 'axios';
import { useEffect, useState } from 'react';
import { WeatherData } from '@/interfaces/weatherData';

export const useGetWeatherData = (name: string, lat: number, lon: number): [WeatherData, string] => {
    const [data, setData] = useState<WeatherData>({});
    const [error, setError] = useState('');

    let latitude: string, longitude: string;
    if (lat && lon) {
        latitude = lat.toString();
        longitude = lon.toString();
        var url = `http://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&timezone=auto&forecast_days=8`;
    }

    useEffect(() => {
        axios
            .get(url)
            .then((res: { data: WeatherData }) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [name]);

    return [data, error];
};
