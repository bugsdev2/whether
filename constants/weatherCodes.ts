const weatherCodes = {
    '0': {
        day: {
            description: 'Sunny',
            image: './assets/images/weather-icons/sunny.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/sunny.png',
        },
        night: {
            description: 'Clear',
            image: './assets/images/weather-icons/moony.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/moony.png',
        },
    },
    '1': {
        day: {
            description: 'Mainly Sunny',
            image: './assets/images/weather-icons/sunny.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/sunny.png',
        },
        night: {
            description: 'Mainly Clear',
            image: '@/assets/images/weather-icons/moony.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/moony.png',
        },
    },
    '2': {
        day: {
            description: 'Partly Cloudy',
            image: '@/assets/images/weather-icons/partly-cloudy.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/partly-cloudy.png',
        },
        night: {
            description: 'Partly Cloudy',
            image: '@/assets/images/weather-icons/partly-cloudy2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/partly-cloudy2.png',
        },
    },
    '3': {
        day: {
            description: 'Cloudy',
            image: '@/assets/images/weather-icons/cloudy2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/cloudy2.png',
        },
        night: {
            description: 'Cloudy',
            image: '@/assets/images/weather-icons/cloudy2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/cloudy2.png',
        },
    },
    '45': {
        day: {
            description: 'Foggy',
            image: '@/assets/images/weather-icons/foggy.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/foggy.png',
        },
        night: {
            description: 'Foggy',
            image: '@/assets/images/weather-icons/foggy.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/foggy.png',
        },
    },
    '48': {
        day: {
            description: 'Rime Fog',
            image: '@/assets/images/weather-icons/foggy.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/foggy.png',
        },
        night: {
            description: 'Rime Fog',
            image: '@/assets/images/weather-icons/foggy.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/foggy.png',
        },
    },
    '51': {
        day: {
            description: 'Light Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
        night: {
            description: 'Light Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
    },
    '53': {
        day: {
            description: 'Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
        night: {
            description: 'Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
    },
    '55': {
        day: {
            description: 'Heavy Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
        night: {
            description: 'Heavy Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
    },
    '56': {
        day: {
            description: 'Light Freezing Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
        night: {
            description: 'Light Freezing Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
    },
    '57': {
        day: {
            description: 'Freezing Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
        night: {
            description: 'Freezing Drizzle',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
    },
    '61': {
        day: {
            description: 'Light Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
        night: {
            description: 'Light Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
    },
    '63': {
        day: {
            description: 'Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
        night: {
            description: 'Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
    },
    '65': {
        day: {
            description: 'Heavy Rain',
            image: '@/assets/images/weather-icons/heavy-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/heavy-rain.png',
        },
        night: {
            description: 'Heavy Rain',
            image: '@/assets/images/weather-icons/heavy-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/heavy-rain.png',
        },
    },
    '66': {
        day: {
            description: 'Light Freezing Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
        night: {
            description: 'Light Freezing Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
    },
    '67': {
        day: {
            description: 'Freezing Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
        night: {
            description: 'Freezing Rain',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
    },
    '71': {
        day: {
            description: 'Light Snow',
            image: '@/assets/images/weather-icons/snow1.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow1.png',
        },
        night: {
            description: 'Light Snow',
            image: '@/assets/images/weather-icons/snow1.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow1.png',
        },
    },
    '73': {
        day: {
            description: 'Snow',
            image: '@/assets/images/weather-icons/snow1.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow1.png',
        },
        night: {
            description: 'Snow',
            image: '@/assets/images/weather-icons/snow1.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow1.png',
        },
    },
    '75': {
        day: {
            description: 'Heavy Snow',
            image: '@/assets/images/weather-icons/snow2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow2.png',
        },
        night: {
            description: 'Heavy Snow',
            image: '@/assets/images/weather-icons/snow2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow2.png',
        },
    },
    '77': {
        day: {
            description: 'Snow Grains',
            image: '@/assets/images/weather-icons/cloud-snow.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/cloud-snow.png',
        },
        night: {
            description: 'Snow Grains',
            image: '@/assets/images/weather-icons/cloud-snow.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/cloud-snow.png',
        },
    },
    '80': {
        day: {
            description: 'Light Showers',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
        night: {
            description: 'Light Showers',
            image: '@/assets/images/weather-icons/drizzle.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/drizzle.png',
        },
    },
    '81': {
        day: {
            description: 'Showers',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
        night: {
            description: 'Showers',
            image: '@/assets/images/weather-icons/rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/rain.png',
        },
    },
    '82': {
        day: {
            description: 'Heavy Showers',
            image: '@/assets/images/weather-icons/heavy-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/heavy-rain.png',
        },
        night: {
            description: 'Heavy Showers',
            image: '@/assets/images/weather-icons/heavy-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/heavy-rain.png',
        },
    },
    '85': {
        day: {
            description: 'Light Snow Showers',
            image: '@/assets/images/weather-icons/snow.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow.png',
        },
        night: {
            description: 'Light Snow Showers',
            image: '@/assets/images/weather-icons/snow.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow.png',
        },
    },
    '86': {
        day: {
            description: 'Snow Showers',
            image: '@/assets/images/weather-icons/snow2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow2.png',
        },
        night: {
            description: 'Snow Showers',
            image: '@/assets/images/weather-icons/snow2.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/snow2.png',
        },
    },
    '95': {
        day: {
            description: 'Thunderstorm',
            image: '@/assets/images/weather-icons/lightning-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/lightning-rain.png',
        },
        night: {
            description: 'Thunderstorm',
            image: '@/assets/images/weather-icons/lightning-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/lightning-rain.png',
        },
    },
    '96': {
        day: {
            description: 'Light Thunderstorms With Hail',
            image: '@/assets/images/weather-icons/lightning-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/lightning-rain.png',
        },
        night: {
            description: 'Light Thunderstorms With Hail',
            image: '@/assets/images/weather-icons/lightning-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/lightning-rain.png',
        },
    },
    '99': {
        day: {
            description: 'Thunderstorm With Hail',
            image: '@/assets/images/weather-icons/lightning-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/lightning-rain.png',
        },
        night: {
            description: 'Thunderstorm With Hail',
            image: '@/assets/images/weather-icons/lightning-rain.png',
            imageOnline: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/imageOnlines/weather-icons/lightning-rain.png',
        },
    },
};

export default weatherCodes;
