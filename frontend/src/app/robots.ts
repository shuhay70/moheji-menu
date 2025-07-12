// robots.txtファイルは、検索エンジンのクローラー（情報を収集するプログラム）に対して、サイト内のどのページをクロールして良いか、
//またはしないでほしいかを指示するファイル。

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://github.com/shuhay70/moheji-menu.git"; // 自分のサイトのURL

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: '/private/', // もしクロールしてほしくないページがあれば指定
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
