import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useGetWeather = (latitide: Number, longitude: Number) => {
    const [data, setData] = useState<AxiosResponse | string>('');
    const [error, setError] = useState('');

    useEffect(() => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitide.toString()}&longitude=${longitude.toString()}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,showers,snowfall,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&timezone=auto`;
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            });
    }, [latitide, longitude]);

    return [data, error];
};
