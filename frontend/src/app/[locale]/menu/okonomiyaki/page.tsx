import Menubar from "../../components/Menubar";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

// generateMetadata関数を追加
// generateMetadata関数の中でクライアントサイド専用のフック（Hook）であるuseTranslationsを呼び出すことはできない。
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "お好み焼き", // 例として「明太子もちもんじゃ」
    description: `お好み焼きの紹介ページです。`,
  };
}

export default function HomePage() {
  const t = useTranslations("Okonomiyaki");

  return (
    <main>
      <div
        className="pt-[65px] scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white "
        style={{
          backgroundImage: "url('/image/backimg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menubar />
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
          <div className="font-bold flex justify-center  text-[20px]">
            {t("title111")}
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[320px]  lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title1")}</p>
                <p>¥1078</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients1")}</p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title2")}</p>
                <p>¥1958</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients2")} </p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title3")}</p>
                <p>¥1848</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients3")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title4")}</p>
                <p>¥2178</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients4")} </p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title5")}</p>
                <p>¥1298</p>
              </div>
              <div className="lg:flex">{t("ingredients5")} </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title6")}</p>
                <p>¥858</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients6")}</p>
              </div>
            </div>
          </div>
          <div className="font-bold flex justify-center pt-[70px] text-[20px]">
            {t("title222")}
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex  lg:justify-between">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between  lg:w-[300px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title7")}</p>
                <p>¥1408</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients7")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title8")}</p>
                <p>¥1628</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients8")} </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:py-[0px] pb-[8px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold">{t("title9")}</p>
                <p>¥1408</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients9")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title10")}</p>
                <p>¥1848</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients10")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title11")}</p>
                <p>¥1408</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients11")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
