import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
export default function layout() {
    return (
        <>
            <StatusBar hidden />
            <Slot initialRouteName="index.tsx" />
        </>
    );
}
