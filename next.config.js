/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US', 'zh-TW'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'zh-TW',
    },
};

module.exports = nextConfig;
