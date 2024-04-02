import { NextAuthOptions } from "next-auth";
import NextAuth, { Session } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "loginId", type: "text", placeholder: "SSG" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('credentials',credentials)
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
        console.log('ssg profile',profile, user)
        const res = await fetch(`http://10.10.10.139:8080/api/v1/oauth/signup/easy`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email : "beat1103@gmail.com",
            oauth_id : user.id,
            oauth_name : "kakao",
          })
        
        })
        console.log(res)
        if (res.ok) {
          const getData = await res.json()
          console.log('ssg user',getData, profile.name)
          return { ...user, name: profile.name, email: getData.email, id: getData.id, oauth_id: getData.oauth_id, oauth_name: getData.oauth_name, role: getData.role }
        } 
        return 'easy-signup'
        
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
  secret: process.env.AUTH_SECRET,
}

export default NextAuth(options)