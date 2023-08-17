/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'opengraph.githubassets.com',
            port: '',
            pathname: '/**',
            },
        ]
    },
}

module.exports = nextConfig
