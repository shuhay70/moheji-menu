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
    title: "季節のおすすめ", // 例として「明太子もちもんじゃ」
    description: `季節のおすすめの紹介ページです。`,
  };
}

export default function HomePage() {
  const t = useTranslations("Season");

  return (
    <main>
      <div
        className="pt-[65px] scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll ] bg-white"
        style={{
          backgroundImage: "url('/image/backimg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menubar />
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
          <div className="lg:flex lg:flex-col lg:items-center">
            <div className="lg:flex">
              <div className="lg:flex-col lg:flex">
                <img
                  src="/image/IMG_3171.jpg"
                  className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
                  alt="mennmochi"
                />

                <div className="flex justify-between lg:justify-start">
                  <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                    {t("title1")}
                  </p>
                  <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[20px]">
                    ¥1518
                  </p>
                </div>
                <p className="lg:px-[25px]  lg:w-[280px] lg:pb-[0px] pb-[15px]">
                  {t("title2")}
                </p>
              </div>

              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title8")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥1980
                </p>
              </div>
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title14")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥968
                </p>
              </div>
            </div>
            <div className="lg:flex">
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title11")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥1848
                </p>
              </div>

              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title15")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥1408
                </p>
              </div>
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title16")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥858
                </p>
              </div>
            </div>
            <div className="lg:flex">
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title17")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥858
                </p>
              </div>
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title18")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥1958
                </p>
              </div>
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title19")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥1848
                </p>
              </div>
            </div>
            <div className="lg:flex">
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title21")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥715
                </p>
              </div>
              <div className="flex  justify-between lg:justify-start">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title22")}
                </p>
                <p className="py-[15px] pl-[15px] lg:pt-[30px] lg:pl-[55px]">
                  ¥990
                </p>
              </div>
            </div>

            <div className="lg:w-[1100px] border-t border-gray-300 w-[0px]"></div>
            <div className="lg:flex ">
              {/* <img
              src="/image/shirako.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <div className="flex justify-between">
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title5")}
                </p>
                <p className="py-[15px] lg:pt-[30px] lg:pl-[55px]">
                  {" "}
                  {t("price3")}
                </p>
              </div>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                {t("title6")}
              </p>
            </div> */}
              {/* <div className="lg:flex">
              <img
                src="/image/IMG_3172.jpg"
                className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
                alt="mennmochi"
              />
              <div>
                <div className="flex justify-between">
                  <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                    {t("title3")}
                  </p>
                  <p className="py-[15px] lg:pt-[30px] lg:pl-[35px]">
                    {" "}
                    {t("price2")}
                  </p>
                </div>

                <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                  {t("title4")}
                </p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
