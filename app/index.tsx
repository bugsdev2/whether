import React, { useState, createContext } from 'react';
import HomeScreen from '@/app/(tabs)/homescreen';
import { LatLonData } from '@/interfaces/latLonData';

export const LocationContext = createContext<{ searchQuery: string; setSearchQuery: React.Dispatch<React.SetStateAction<string>> }>({ searchQuery: '', setSearchQuery: () => {} });
export const LatLonProvider = createContext<{ latLonData: LatLonData; setLatLonData: React.Dispatch<React.SetStateAction<LatLonData>> }>({ latLonData: { name: '', lat: 0, lon: 0, admin1: '', country: '' }, setLatLonData: () => {} });

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [latLonData, setLatLonData] = useState<LatLonData>({ name: '', lat: 0, lon: 0, admin1: '', country: '' });

    return (
        <LatLonProvider.Provider value={{ latLonData, setLatLonData }}>
            <LocationContext.Provider value={{ searchQuery, setSearchQuery }}>
                <HomeScreen />
            </LocationContext.Provider>
        </LatLonProvider.Provider>
    );
};

export default React.memo(App);
