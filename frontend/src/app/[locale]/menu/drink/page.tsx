import Menubar from "../../components/Menubar";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Drinks");

  return (
    <main>
      <div
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white "
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
                  <p>{t("price1")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold w-[70%]">{t("title2")}</p>
                  <p>{t("price2")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title3")}</p>
                  <p>{t("price3")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title4")}</p>
                  <p>{t("price4")}</p>
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
                    <p>{t("price5")}</p>
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
                  <p>{t("price6")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title7")}</p>
                  <p>{t("price7")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title8")}</p>
                  <p>{t("price8")}</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title9")}</p>
                    <p>{t("price9")}</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">*{t("ex9")}</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title10")}</p>
                    <p>{t("price10")}</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">*{t("ex10")}</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title11")}</p>
                    <p>{t("price11")}</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">*{t("ex11")}</p>
                </div>
                <div className="flex flex-col lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold  w-[70%]">{t("title12")}</p>
                    <p>{t("price12")}</p>
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
                  <p>{t("price13")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title14")}</p>
                  <p>{t("price14")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title15")}</p>
                  <p>{t("price15")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title16")}</p>
                  <p>{t("price16")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title17")}</p>
                  <p>{t("price17")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title18")}</p>
                  <p>{t("price18")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title19")}</p>
                  <p>{t("price19")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title20")}</p>
                  <p>{t("price20")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title21")}</p>
                  <p>{t("price21")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title22")}</p>
                  <p>{t("price22")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title23")}</p>
                  <p>{t("price23")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title24")}</p>
                  <p>{t("price24")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title25")}</p>
                  <p>{t("price25")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title26")}</p>
                  <p>{t("price26")}</p>
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
                  <p>{t("price27")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold w-[70%]">{t("title28")}</p>
                  <p>{t("price28")}</p>
                </div>

                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title30")}</p>
                  <p>{t("price29")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title31")}</p>
                  <p>{t("price31")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title32")}</p>
                  <p>{t("price32")}</p>
                </div>
              </div>
              <div className="lg:w-[300px] ">
                <p className="pt-[60px] font-bold flex justify-center">
                  {t("title444")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%] ">{t("title33")} </p>
                  <p>{t("price33")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title34")}</p>
                  <p>{t("price34")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title35")}</p>
                  <p>{t("price35")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title36")}</p>
                  <p>{t("price36")}</p>
                </div>
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold flex justify-center">
                  {t("title555")}
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%] ">{t("title37")}</p>
                  <p>{t("price37")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title38")}</p>
                  <p>{t("price38")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title39")}</p>
                  <p>{t("price39")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title40")}</p>
                  <p>{t("price40")}</p>
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
                  <p>{t("price43")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title44")}</p>
                  <p>{t("price44")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title45")}</p>
                  <p>{t("price45")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title46")}</p>
                  <p>{t("price46")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title47")}</p>
                  <p>{t("price47")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold  w-[70%]">{t("title48")}</p>
                  <p>{t("price48")}</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold  w-[70%] ">{t("title49")}</p>
                  <p>{t("price49")}</p>
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
                  <p>{t("price50")}</p>
                </div>
              </div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title51")}</p>
                  <p>{t("price51")}</p>
                </div>
                <p className="text-[12px] pt-[5px]">{t("ex51")}</p>
                <p className="text-[12px]">{t("ingredients51")}</p>
              </div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title52")}</p>
                  <p>{t("price52")}</p>
                </div>
                <p className="text-[12px] pt-[5px]">{t("ex52")}</p>
                <p className="text-[12px]">{t("ingredients52")}</p>
              </div>
            </div>

            <div className="lg:mx-[30px]">
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p className="font-bold  w-[70%]">{t("title53")}</p>
                  <p>{t("price53")}</p>
                </div>
                <p className="text-[12px] pt-[5px]">{t("ingredients53")}</p>
              </div>
              <div className="flex justify-between lg:w-[470px]  lg:my-2 my-[15px]">
                <p className="font-bold w-[70%]">{t("title54")}</p>

                <p>{t("price54")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
