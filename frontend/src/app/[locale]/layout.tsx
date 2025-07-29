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

  // hreflang設定を追加
  alternates: {
    canonical: "https://moheji-liard.vercel.app/ja", // 日本語ページを基準とする
    languages: {
      "ja-JP": "https://moheji-liard.vercel.app/ja",
      "en-US": "https://moheji-liard.vercel.app/en",
      "zh-CN": "https://moheji-liard.vercel.app/zh",
      "ko-KR": "https://moheji-liard.vercel.app/ko",
      "x-default": "https://moheji-liard.vercel.app/ja", // 言語が特定できない場合のデフォルト
    },
  },

  verification: {
    google: "iRcsDZ-VW-C9YwnpoTypRvdbSTGriJUWfmB_BbsV0M8",
  },

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
  // OGP設定 (SNSでシェアされた際に表示される情報.)
  openGraph: {
    title: "もへじ はなれ",
    description:
      "明治四年創業 豊洲市場仲卸直営。新鮮な海鮮を使ったもんじゃ焼きが自慢です。",
    // VercelにデプロイしたサイトのトップページのURLをここに入れる
    url: "https://moheji-liard.vercel.app",
    siteName: "もへじ はなれ",
    // トップページで使われている画像のURLを入れる
    images: [
      {
        url: "https://moheji-liard.vercel.app/image/logo4.jpg",
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

  //構造化データ」を追加してGoogleに店舗情報を伝える⬇️
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "もへじ はなれ",
    image: "https://moheji-liard.vercel.app/image/logo4.jpg",
    url: "https://moheji-liard.vercel.app",
    telephone: "03-6312-8983",
    priceRange: "¥¥¥",
    servesCuisine: "もんじゃ焼き、お好み焼き、焼きそば",
    address: {
      "@type": "PostalAddress",
      streetAddress: "３丁目６番地４号",
      addressLocality: "中央区",
      addressRegion: "東京都",
      postalCode: "104-0052",
      addressCountry: "JP",
    },
    geo: {
      //緯度と経度を指定
      "@type": "GeoCoordinates",
      latitude: 35.663572677120925,
      longitude: 139.78044518863985,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
  };
  // scriptタグをbodyの直下に追加
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100%]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
