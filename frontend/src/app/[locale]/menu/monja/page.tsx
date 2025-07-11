import Menubar from "../../components/Menubar";
//next-intlライブラリでは、サーバーサイドで使う関数とクライアントサイドで使う関数で、インポート元が分かれている。
//useTranslations: クライアントサイド（ブラウザ側）で使うフック。'next-intl'からインポート。
//getTranslations: サーバーサイドで使う関数。'next-intl/server' からインポートする必要があり。
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

// generateMetadata関数を追加
// generateMetadata関数の中でクライアントサイド専用のフック（Hook）であるuseTranslationsを呼び出すことはできない。
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Monja" });

  return {
    title: "もんじゃ", // 例として「明太子もちもんじゃ」
    description: `もんじゃの紹介ページです。`,
  };
}

export default function HomePage() {
  const t = useTranslations("Monja");

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
          <div className="lg:flex">
            <div className="  lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/menmochi.jpg"
                  className="lg:h-[280px] lg:w-[280px]"
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja1")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1848</p>
              </div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description1")}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients1")}{" "}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/kaisen.jpg"
                  className="lg:h-[280px] lg:w-[280px]"
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja2")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥2068</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description2")}{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients2")}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px] ">
              <div className="flex justify-center">
                <img
                  src="/image/ikasumi.jpg"
                  className="lg:h-[280px] lg:w-[280px]"
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja3")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1958</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description3")}{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients3")}{" "}
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/mensiso.jpg"
                  className="lg:h-[280px] lg:w-[280px]"
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja4")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1848</p>
              </div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description4")}{" "}
              </p>

              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients4")}{" "}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/butakimu.jpg"
                  className="lg:h-[280px] lg:w-[280px] "
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja5")}
                </p>
                <p className="pb-[15px pt-[10px]">¥1738</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description5")}{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients5")}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/umetako.jpg"
                  className="lg:h-[280px] lg:w-[280px]"
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja6")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1738</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description6")}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients6")}
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/oyako.jpg"
                  className="lg:h-[280px] lg:w-[280px]"
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja7")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1738</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description7")}{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients7")}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/gyusuzi.jpg"
                  className="lg:h-[280px] lg:w-[280px] "
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja8")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1958</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description8")}{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients8")}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/butanira.jpg"
                  className="lg:h-[280px] lg:w-[280px] "
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja9")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1738</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description9")}{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients9")}
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/gomoku.jpg"
                  className="lg:h-[280px] lg:w-[280px] "
                  alt="mennmochi"
                />
              </div>
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja10")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥1848</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description10")}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients10")}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-between">
                <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                  {t("Monja11")}
                </p>
                <p className="pb-[15px] pt-[10px]">¥858</p>
              </div>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                {t("description11")}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                {t("ingredients11")}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
