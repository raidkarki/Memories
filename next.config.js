/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
            pathname: '/emoji/**',
          },
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
            pathname: '/material-outlined/**',
          },
        ],
      },
}

module.exports = nextConfig
