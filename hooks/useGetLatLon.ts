import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

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

export let initialState: GeoData[] = [
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

export const useGetLanLon = (place: string) => {
    const [data, setData] = useState<GeoData[]>(initialState);

    useEffect(() => {
        axios
            .get(`http://geocoding-api.open-meteo.com/v1/search?name=${place}&count=5&language=en&format=json`)
            .then((res) => {
                if (!res.data.results) setData(initialState);
                setData(res.data.results);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, [place]);

    return data;
};
