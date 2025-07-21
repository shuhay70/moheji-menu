// frontend/src/app/sitemap.ts

import { MetadataRoute } from "next";

const baseUrl = "https://moheji-liard.vercel.app";

// サイトの言語を直接定義 (importを不要にするため)
const locales = ["ja", "en", "zh", "ko"];

// サイト内に存在するページのパスを列挙
const routes = [
  "/",
  "/history",
  "/menu/monja",
  "/menu/okonomiyaki",
  "/menu/teppan",
  "/menu/topping",
  "/menu/season",
  "/menu/drink",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 各ページと言語の組み合わせでURLを生成
  routes.forEach((route) => {
    // localeの型を明示的に指定します
    locales.forEach((locale: string) => {
      // トップページ（'/'）の場合は、パスを空に
      const path = route === "/" ? "" : route;
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
      });
    });
  });

  return sitemapEntries;
}
