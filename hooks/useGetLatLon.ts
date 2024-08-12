import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export interface GeoData {
    admin1: string;
    admin2?: string;
    admin3?: string;
    country: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    timezone?: string;
}

let initialState = [
    {
        admin1: '',
        admin2: '',
        admin3: '',
        country: '',
        id: 0,
        latitude: 0,
        longitude: 0,
        name: '',
        timezone: '',
    },
];

export const useGetLanLon = (place: string): [GeoData[], string] => {
    const [data, setData] = useState<GeoData[]>(initialState);
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
