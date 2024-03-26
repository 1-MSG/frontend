import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "SSG" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if ( !credentials?.loginId || !credentials?.password ) {
          return null;
        }
        const res = await fetch(`${process.env.API_BASE_URL}/auth/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            loginId: credentials.loginId,
            password: credentials.password
          })
        })
        if (res.ok) {
          const user = await res.json()
          console.log(user)
          return user;
        }
        return null;
      }
    }),
    KakaoProvider(
      {
        clientId: process.env.KAKAO_CLIENT_ID || "",
        clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
      },
    ),
  ],
  callbacks: {
    async signIn({ user, profile}) {
      if(profile) {
        console.log('ssg profile',profile)
        // const res = await fetch(`${process.env.API_BASE_URL}/users/2`)
        // console.log(res)
        // if (res.ok) {
        //   const getUser = await res.json()
        //   console.log('ssg user',getUser, profile.name)
        //   if(user.name === getUser.name) {
        //     return '/';
        //   } 
        //   console.log('not ssg user',user)
        //   return '/easy-signup';
        // } 

        // this.session.user = user;
        
      }
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },

    async redirect({url, baseUrl}) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    }
  },
  pages: {
    signIn: "/login",
    error: "/auth_error",
  },
}