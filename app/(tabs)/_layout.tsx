import { Stack } from 'expo-router';

export default function TabsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="hourlyweather"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="homescreen"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
