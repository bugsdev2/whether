import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

export default function layout() {
    return (
        <>
            <StatusBar hidden />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </>
    );
}
