import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useGetLanLon = (place: string) => {
    const [data, setData] = useState<AxiosResponse[] | string>('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get(`https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=10&language=en&format=json`)
            .then((res) => {
                setData(res.data.results);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [place]);

    return [data, error];
};
