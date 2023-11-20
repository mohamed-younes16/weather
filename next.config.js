/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["openweathermap.org","www.weatherbit.io"]
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
