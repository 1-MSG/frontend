import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthSession from "./provider/AuthProvider";
import Providers from "./provider/provider";

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
    title: '믿고 사는 즐거움 SSG.COM',
    description:
        '신세계 그룹의 온라인 쇼핑 플랫폼, SSG.COM. 신세계몰, 신세계백화점, 이마트몰, 트레이더스, 신세계라이브쇼핑, S.I. Village가 SSG.COM 이라는 이름으로 하나가 되었어요.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthSession>
          <Providers>
            {children}
          </Providers>
        </AuthSession>
      </body>
    </html>
  );
}
