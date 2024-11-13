// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useTranslation } from "react-i18next";

// const LanguageSwitcher = () => {
//   const { t, i18n } = useTranslation();
//   const router = useRouter(); // フックはトップレベルで呼び出す
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // クライアントサイドでのみレンダリングを行う
//   }, []);

//   const changeLanguage = () => {
//     const newLocale = i18n.language === "ja" ? "en" : "ja";
//     i18n.changeLanguage(newLocale);
//     router.push(router.pathname, router.asPath, { locale: newLocale });
//   };

//   if (!isClient) {
//     return null; // サーバーサイドでは何も表示しない
//   }

//   return <button onClick={changeLanguage}>{t("language_button")}</button>;
// };

// export default LanguageSwitcher;
