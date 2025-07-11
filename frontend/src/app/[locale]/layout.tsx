import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl"; // 追記

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | もへじ はなれ",
    default: "もへじ はなれ - 豊洲市場仲卸直営のもんじゃ焼き",
  },
  description:
    "明治四年創業、豊洲水産仲卸直営のもんじゃ焼き店「もへじ はなれ」。豊洲直送の新鮮な海鮮を使ったもんじゃ焼き、お好み焼き、鉄板焼きをお楽しみください。",
  keywords: [
    "もんじゃ焼き",
    "もんじゃ",
    "Monja",
    "海鮮もんじゃ",
    "月島もんじゃ",
    "お好み焼き",
    "Okonomiyaki",
    "鉄板焼き",
    "焼きそば",
    "Yakisoba",
    "もへじ",
    "はなれ",
    "豊洲",
    "月島",
    "Tsukishima",
    "海鮮",
  ],
  // OGP設定 (SNSでシェアされた際に表示される情報)
  openGraph: {
    title: "もへじ はなれ",
    description:
      "明治四年創業 豊洲市場仲卸直営。新鮮な海鮮を使ったもんじゃ焼きが自慢です。",
    // VercelにデプロイしたサイトのトップページのURLをここに入れる
    url: "https://moheji-liard.vercel.app/ja",
    siteName: "もへじ はなれ",
    // トップページで使われている画像のURLを入れる
    images: [
      {
        url: "https://your-deployed-site-url.vercel.app/image/logo4.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

// propsに `params: { locale }` を追加
function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages(); // messagesを取得

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100%]`}
      >
        {/* NextIntlClientProviderでラップする */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
