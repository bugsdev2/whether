import axios from 'axios';
import { useState, useEffect } from 'react';

export const getHourlyWeatherData = (name: string, lat: number = 0, lon: number = 0) => {
    const [data, setData] = useState();
    const [err, setErr] = useState('');

    var latitude = lat.toString();
    var longitude = lon.toString();
    var url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,weather_code,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,uv_index,uv_index_clear_sky,is_day,sunshine_duration&timezone=auto&forecast_days=8`;
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
