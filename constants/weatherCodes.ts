const weatherCodes = {
    '0': {
        day: {
            description: 'Sunny',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/sunny.png',
        },
        night: {
            description: 'Clear',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/moony.png',
        },
    },
    '1': {
        day: {
            description: 'Mainly Sunny',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/sunny.png',
        },
        night: {
            description: 'Mainly Clear',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/moony.png',
        },
    },
    '2': {
        day: {
            description: 'Partly Cloudy',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/partly-cloudy.png',
        },
        night: {
            description: 'Partly Cloudy',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/partly-cloudy2.png',
        },
    },
    '3': {
        day: {
            description: 'Cloudy',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/cloudy2.png',
        },
        night: {
            description: 'Cloudy',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/cloudy2.png',
        },
    },
    '45': {
        day: {
            description: 'Foggy',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/foggy.png',
        },
        night: {
            description: 'Foggy',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/foggy.png',
        },
    },
    '48': {
        day: {
            description: 'Rime Fog',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/foggy.png',
        },
        night: {
            description: 'Rime Fog',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/foggy.png',
        },
    },
    '51': {
        day: {
            description: 'Light Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
        night: {
            description: 'Light Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
    },
    '53': {
        day: {
            description: 'Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
        night: {
            description: 'Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
    },
    '55': {
        day: {
            description: 'Heavy Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
        night: {
            description: 'Heavy Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
    },
    '56': {
        day: {
            description: 'Light Freezing Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
        night: {
            description: 'Light Freezing Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
    },
    '57': {
        day: {
            description: 'Freezing Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
        night: {
            description: 'Freezing Drizzle',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
    },
    '61': {
        day: {
            description: 'Light Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
        night: {
            description: 'Light Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
    },
    '63': {
        day: {
            description: 'Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
        night: {
            description: 'Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
    },
    '65': {
        day: {
            description: 'Heavy Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/heavy-rain.png',
        },
        night: {
            description: 'Heavy Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/heavy-rain.png',
        },
    },
    '66': {
        day: {
            description: 'Light Freezing Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
        night: {
            description: 'Light Freezing Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
    },
    '67': {
        day: {
            description: 'Freezing Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
        night: {
            description: 'Freezing Rain',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
    },
    '71': {
        day: {
            description: 'Light Snow',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow1.png',
        },
        night: {
            description: 'Light Snow',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow1.png',
        },
    },
    '73': {
        day: {
            description: 'Snow',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow1.png',
        },
        night: {
            description: 'Snow',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow1.png',
        },
    },
    '75': {
        day: {
            description: 'Heavy Snow',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow2.png',
        },
        night: {
            description: 'Heavy Snow',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow2.png',
        },
    },
    '77': {
        day: {
            description: 'Snow Grains',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/cloud-snow.png',
        },
        night: {
            description: 'Snow Grains',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/cloud-snow.png',
        },
    },
    '80': {
        day: {
            description: 'Light Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
        night: {
            description: 'Light Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/drizzle.png',
        },
    },
    '81': {
        day: {
            description: 'Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
        night: {
            description: 'Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/rain.png',
        },
    },
    '82': {
        day: {
            description: 'Heavy Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/hravy-rain.png',
        },
        night: {
            description: 'Heavy Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/heavy-rain.png',
        },
    },
    '85': {
        day: {
            description: 'Light Snow Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow.png',
        },
        night: {
            description: 'Light Snow Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow.png',
        },
    },
    '86': {
        day: {
            description: 'Snow Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow2.png',
        },
        night: {
            description: 'Snow Showers',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/snow2.png',
        },
    },
    '95': {
        day: {
            description: 'Thunderstorm',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/lightning-rain.png',
        },
        night: {
            description: 'Thunderstorm',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/lightning-rain.png',
        },
    },
    '96': {
        day: {
            description: 'Light Thunderstorms With Hail',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/lightning-rain.png',
        },
        night: {
            description: 'Light Thunderstorms With Hail',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/lightning-rain.png',
        },
    },
    '99': {
        day: {
            description: 'Thunderstorm With Hail',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/lightning-rain.png',
        },
        night: {
            description: 'Thunderstorm With Hail',
            image: 'https://raw.githubusercontent.com/bugsdev2/whether/main/assets/images/weather-icons/lightning-rain.png',
        },
    },
};

export default weatherCodes;
