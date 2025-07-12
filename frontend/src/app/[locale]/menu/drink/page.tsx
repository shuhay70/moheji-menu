import Menubar from "../../components/Menubar";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

// generateMetadata関数を追加
// generateMetadata関数の中でクライアントサイド専用のフック（Hook）であるuseTranslationsを呼び出すことはできない。
export async function generateMetadata({}): Promise<Metadata> {
  return {
    title: "ドリンク", // 例として「明太子もちもんじゃ」
    description: `ドリンクの紹介ページです。`,
  };
}

export default function HomePage() {
  const t = useTranslations("Drinks");

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
          <div className="font-bold flex justify-center font-bold text-[20px]">
            {t("title888")}{" "}
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between lg:mx-[30px]">
            <div>
              <div className="lg:w-[500px] ">
                <p className="lg:pt-[30px] font-bold pt-[40px] flex justify-center">
                  {t("title000")}{" "}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 lg:my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold  w-[70%]">{t("title1")}</p>
                  <p>¥660</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold w-[70%]">{t("title2")}</p>
                  <p>¥715</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title3")}</p>
                  <p>¥715</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title4")}</p>
                  <p>¥495</p>
                </div>
              </div>
              <div className="lg:w-[500px] ">
                <p className="lg:pt-[60px] font-bold pt-[50px] flex justify-center">
                  {t("title111")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title5")}</p>
                    <p>¥550</p>
                  </div>
                  <Link
                    className="text-red-400 text-[12px] pt-[5px]"
                    href="https://tanoshiiosake.jp/10404"
                  >
                    {t("ex5")}
                  </Link>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title6")}</p>
                  <p>¥275</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title7")}</p>
                  <p>¥275</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title8")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title9")}</p>
                    <p>¥605</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">*{t("ex9")}</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title10")}</p>
                    <p>¥550</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">*{t("ex10")}</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title11")}</p>
                    <p>¥605</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">*{t("ex11")}</p>
                </div>
                <div className="flex flex-col lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title12")}</p>
                    <p>¥605</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">* {t("ex12")}</p>
                </div>
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold flex justify-center">
                  {t("title222")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%]">{t("title13")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%]">{t("title99")}</p>
                  <p>¥550</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title14")}</p>
                  <p>¥1430</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title15")}</p>
                  <p>¥1430</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title16")}</p>
                  <p>¥990</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title17")}</p>
                  <p>¥550</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title18")}</p>
                  <p>¥550</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title19")}</p>
                  <p>¥660</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title20")}</p>
                  <p>¥660</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title21")}</p>
                  <p>¥660</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title22")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title23")}</p>
                  <p>¥550</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title24")}</p>
                  <p>¥550</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title25")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title26")}</p>
                  <p>¥605</p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:w-[490px] ">
                <p className="lg:pt-[30px] font-bold pt-[50px] flex justify-center">
                  {t("title333")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%]">{t("title27")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold w-[70%]">{t("title28")}</p>
                  <p>¥660</p>
                </div>

                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title30")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title31")}</p>
                  <p>¥660</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title32")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title33")}</p>
                  <p>¥660</p>
                </div>
              </div>
              <div className="lg:w-[300px] ">
                <p className="pt-[60px] font-bold flex justify-center">
                  {t("title444")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>

                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title34")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title35")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title36")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title37")}</p>
                  <p>¥605</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title88")}</p>
                  <p>¥605</p>
                </div>
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold flex justify-center">
                  {t("title555")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>

                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title38")}</p>
                  <p>¥825</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title39")}</p>
                  <p>¥825</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title40")}</p>
                  <p>¥825</p>
                </div>
                {/* <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title41")}</p>
                  <p>{t("price41")}</p>
                </div> */}
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold flex justify-center">
                  {t("title666")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title43")}</p>
                  <p>￥385</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title44")}</p>
                  <p>￥385</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title45")}</p>
                  <p>￥385</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title46")}</p>
                  <p>￥385</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title55")}</p>
                  <p>￥385</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title47")}</p>
                  <p>¥418</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title48")}</p>
                  <p>¥418</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%] ">{t("title49")}</p>
                  <p>¥418</p>
                </div>
                <p className="lg:w-[235px]  text-[12px] bg-red-300 rounded p-1 flex justify-center mt-[15px]">
                  {t("ex49")}
                </p>
              </div>
            </div>
          </div>
          <div className="font-bold flex justify-center font-bold text-[20px] lg:pt-[0px] pt-[70px]">
            {t("title777")}
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="my-[10px] lg:mx-[30px] lg:flex lg:justify-between ">
            <div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title50")}</p>
                  <p>¥638</p>
                </div>
              </div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title51")}</p>
                  <p>¥748</p>
                </div>
                <p className="text-[12px] pt-[5px]">{t("ex51")}</p>
                <p className="text-[12px]">{t("ingredients51")}</p>
              </div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title52")}</p>
                  <p>¥858</p>
                </div>
                <p className="text-[12px] pt-[5px]">{t("ex52")}</p>
                <p className="text-[12px]">{t("ingredients52")}</p>
              </div>
            </div>

            <div className="lg:mx-[30px]">
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title53")}</p>
                  <p>¥858</p>
                </div>
                <p className="text-[12px] pt-[5px]">{t("ingredients53")}</p>
              </div>
              <div className="flex justify-between lg:w-[470px]  lg:my-2 my-[15px]">
                <p className="font-bold w-[70%]">{t("title54")}</p>

                <p>¥275</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
