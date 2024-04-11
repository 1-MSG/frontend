/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.ssgcdn.com',
          },
          {
            protocol: 'http',
            hostname: 'k.kakaocdn.net',
          }
        ]
      },
    env: {
      KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
      KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
      API_BASE_URL: process.env.API_BASE_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }
};

export default nextConfig;
