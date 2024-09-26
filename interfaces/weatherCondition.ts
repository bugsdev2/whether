import { ImageSourcePropType } from 'react-native';

export interface WeatherCondition {
    description: string;
    image: ImageSourcePropType | undefined;
}
