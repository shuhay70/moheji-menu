import Menubar from "../../components/Menubar";
import { useTranslations } from "next-intl";

import type { Metadata } from "next";

// generateMetadata関数を追加
// generateMetadata関数の中でクライアントサイド専用のフック（Hook）であるuseTranslationsを呼び出すことはできない。
export async function generateMetadata({}): Promise<Metadata> {
  return {
    title: "鉄板", // 例として「明太子もちもんじゃ」
    description: `鉄板のおすすめの紹介ページです。`,
  };
}

export default function HomePage() {
  const t = useTranslations("Teppan");

  return (
    <main>
      <div
        className="pt-[65px] scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll bg-white"
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
            <div className="lg:w-[320px] w-full lg:px-[6px]">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px] justify-between w-full">
                <p className="font-bold w-[67%]"> {t("title1")}</p>
                <p className="w-[28%]">¥638</p>
              </div>
              <div className="flex">
                <p>{t("ingredients1")}</p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold  w-[67%]"> {t("title2")}</p>
                <p className="w-[28%]">¥638</p>
              </div>
              <div className="flex">
                <p>{t("ingredients2")} </p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]">{t("title3")}</p>
                <p className="lg:w-auto w-[28%]">¥638</p>
              </div>
              <div className="flex">
                <p>{t("ingredients3")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title4")}</p>
                <p className="w-[28%]">¥638</p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title5")}</p>
                <p className="w-[28%]">¥748</p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title6")}</p>
                <p className="w-[28%]">¥748</p>
              </div>
              <div className="flex">
                <p>{t("ingredients6")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title7")}</p>
                <p className="w-[28%]">¥858</p>
              </div>
              <div className="flex">
                <p>{t("ingredients7")}</p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title8")}</p>
                <p className="w-[28%]">¥748</p>
              </div>
              <div className="flex">
                <p>{t("ingredients8")}</p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between pb-[10px] lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title9")}</p>
                <p className="w-[28%]">¥968</p>
              </div>
              <div className="flex">
                <p>{t("ingredients9")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between pb-[10px]lg:pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%] lg:w-auto w-[170px]">
                  {t("title10")}
                </p>
                <p className="w-[28%]">¥858</p>
              </div>
              <div className="flex">
                <p>{t("ingredients10")} </p>
              </div>
            </div>
          </div>
          <div className="font-bold flex justify-center  lg:pt-[0px} pt-[70px] text-[20px]">
            {t("title222")}{" "}
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex  lg:justify-between">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between  lg:w-[300px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold w-[67%]"> {t("title11")}</p>
                <p className="w-[28%]">¥638</p>
              </div>
              <div className="flex">
                <p>{t("ingredients11")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[0px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title12")}</p>
                <p className="w-[28%]">¥748</p>
              </div>
              <div className="flex">
                <p>{t("ingredients12")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[0px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold w-[67%]"> {t("title13")}</p>
                <p className="w-[28%]">¥748</p>
              </div>
              <div className="flex">
                <p>{t("ingredients13")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px] lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title14")}</p>
                <p className="w-[28%]">¥968</p>
              </div>
              <div className="flex">
                <p>{t("ingredients14")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title15")}</p>
                <p className="w-[28%]">¥968</p>
              </div>
              <div className="flex">
                <p>{t("ingredients15")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold w-[67%]"> {t("title16")}</p>
                <p className="w-[28%]">¥968</p>
              </div>
              <div className="flex">
                <p>{t("ingredients16")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title17")}</p>
                <p className="w-[28%]">¥1078</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients17")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title18")}</p>
                <p className="w-[28%]">¥1738</p>
              </div>
              <div className="flex">
                <p>{t("ingredients18")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold w-[67%] lg:w-auto w-[200px]">
                  {t("title19")}
                </p>
                <p className="w-[28%]">¥1628</p>
              </div>
              <div className="flex">
                <p>{t("ingredients19")}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title20")}</p>
                <p className="w-[28%]">¥1518</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients20")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title21")}</p>
                <p className="w-[28%]">¥275</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold w-[67%] lg:w-auto w-[200px]">
                  {t("title333")}
                </p>
                <p className="w-[28%]">¥1188</p>
              </div>
              <div className="flex">
                <p>{t("ingredients333")}</p>
              </div>
            </div>
          </div>

          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold w-[67%]"> {t("title22")}</p>
                <p className="w-[28%]">¥528</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients22")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
