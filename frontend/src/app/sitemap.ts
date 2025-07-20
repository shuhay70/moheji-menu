// /frontend/src/app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moheji-liard.vercel.app"; // 自分のサイトのURL

  // 固定ページ
  const staticRoutes = [
    "",
    "/history",
    "/menu/monja",
    "/menu/season",
    "/menu/okonomiyaki",
    "/menu/topping",
    "/menu/teppan",
    "/menu/drink",
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));

  // ここで動的なページ（例：各もんじゃメニューの詳細ページなど）の
  // URLリストを生成することも可能。
  // 今の構成では各メニューは1ページにまとまっているから、上記のみで大丈夫。

  return staticRoutes;
}
