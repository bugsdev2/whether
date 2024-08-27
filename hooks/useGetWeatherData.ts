import axios from 'axios';
import { useEffect, useState } from 'react';
import { WeatherData } from '@/interfaces/weatherData';

export const useGetWeatherData = (name: string, lat: number, lon: number) => {
    if (name == '') return;
    const [data, setData] = useState<WeatherData>({});

    const url = `http://api.open-meteo.com/v1/forecast?latitude=${lat.toString()}&longitude=${lon.toString()}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,showers,snowfall,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&timezone=auto`;

    useEffect(() => {
        axios.get(url).then((res: { data: WeatherData }) => {
            setData(res.data);
        });
    }, [name]);

    return data;
};
