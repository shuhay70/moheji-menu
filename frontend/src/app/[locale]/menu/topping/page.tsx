import Menubar from "../../components/Menubar";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Topping");

  return (
    <main>
      <div
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll bg-white"
        style={{
          backgroundImage: "url('/image/backimg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menubar />
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
          <div className="font-bold flex justify-center  text-[20px]">
            ＜トッピング＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title1")}</p>
              <p>{t("price1")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title2")}</p>
              <p>{t("price2")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title3")}</p>
              <p>{t("price3")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title4")}</p>
              <p>{t("price4")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title1")}</p>
              <p>{t("price5")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title5")}</p>
              <p>{t("price6")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title6")}</p>
              <p>{t("price7")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title7")}</p>
              <p>{t("price8")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title8")}</p>
              <p>{t("price9")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title9")}</p>
              <p>{t("price10")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title10")}</p>
              <p>{t("price11")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title11")}</p>
              <p>{t("price12")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title12")}</p>
              <p>{t("price13")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title13")}</p>
              <p>{t("price14")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title14")}</p>
              <p>{t("price15")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title15")}</p>
              <p>{t("price16")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title16")}</p>
              <p>{t("price17")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title17")}</p>
              <p>{t("price18")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title18")}</p>
              <p>{t("price19")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title19")}</p>
              <p>{t("price20")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title21")}</p>
              <p>{t("price21")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title22")}</p>
              <p>{t("price22")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title23")}</p>
              <p>{t("price23")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title24")}</p>
              <p>{t("price24")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title25")}</p>
              <p>{t("price25")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title26")}</p>
              <p>{t("price26")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title27")}</p>
              <p>{t("price27")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title28")}</p>
              <p>{t("price28")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title29")}</p>
              <p>{t("price29")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title30")}</p>
              <p>{t("price30")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title31")}</p>
              <p>{t("price31")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title32")}</p>
              <p>{t("price32")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title33")}</p>
              <p>{t("price33")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title34")}</p>
              <p>{t("price34")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title35")}</p>
              <p>{t("price35")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title36")}</p>
              <p>{t("price36")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title37")}</p>
              <p>{t("price37")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title38")}</p>
              <p>{t("price38")}</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title39")}</p>
              <p>{t("price39")}</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="lg:w-[200px] font-bold">{t("title40")}</p>
              <p className="lg:w-[200px] pl-[25px]">{t("price40")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
