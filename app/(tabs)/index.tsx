import { View, Text, Button, TouchableHighlight, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    function handleClick() {
        Alert.alert('Have you eaten yet?', 'Really?');
    }

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-3xl font-bold">Hello World!</Text>
        </View>
    );
}
