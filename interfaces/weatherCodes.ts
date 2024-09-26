import { ImageSourcePropType } from 'react-native';

export interface WeatherCodes {
    [key: string]: {
        day: {
            description: string;
            image: ImageSourcePropType | undefined;
            imageOnline: string;
        };
        night: {
            description: string;
            image: ImageSourcePropType | undefined;
            imageOnline: string;
        };
    };
}
