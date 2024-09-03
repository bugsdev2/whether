import { Slot, Stack } from 'expo-router';

export default function layout() {
    return (
        <Stack>
            <Stack.Screen
                name="hourlyweather"
                options={{
                    headerShown: false,
                }}
            />
            <Slot />
        </Stack>
    );
}
