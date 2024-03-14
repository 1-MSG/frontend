import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export const {
    handlers: { GET, POST },
    auth,
    } = NextAuth({
    pages: {
      //앞으로 더 추가
      signIn: '/join',
    },
    providers: [
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      }),
    ],
    callbacks: {
      async session({ session, token }) {
        return { ...session, ...token };
      },
    },
    secret: process.env.AUTH_SECRET,
    trustHost: true,
});