import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t } = useTranslation("common"); // 'common'は使用するnamespace
  const router = useRouter();

  const changeLanguage = () => {
    const newLocale = router.locale === "ja" ? "en" : "ja";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return <button onClick={changeLanguage}>{t("language_button")}</button>;
};

export default LanguageSwitcher;
