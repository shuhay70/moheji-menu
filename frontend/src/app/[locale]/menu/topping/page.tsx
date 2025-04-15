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
              <p>¥330</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title2")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title3")}</p>
              <p>¥110</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title4")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title5")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title6")}</p>
              <p>¥110</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title7")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title8")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title9")}</p>
              <p>¥110</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title10")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title11")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title12")}</p>
              <p>¥110</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title13")}</p>
              <p>¥110</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title14")}</p>
              <p>¥165</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title15")}</p>
              <p>¥770</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title16")}</p>
              <p>¥220</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title17")}</p>
              <p>¥220</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title18")}</p>
              <p>¥220</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title19")}</p>
              <p>¥220</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title20")}</p>
              <p>¥385</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title21")}</p>
              <p>¥275</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title22")}</p>
              <p>¥275</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title23")}</p>
              <p>¥275</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title24")}</p>
              <p>¥440</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title25")}</p>
              <p>¥440</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title26")}</p>
              <p>¥330</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title27")}</p>
              <p>¥330</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title28")}</p>
              <p>¥550</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title29")}</p>
              <p>¥495</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title30")}</p>
              <p>¥495</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title31")}</p>
              <p>¥495</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title32")}</p>
              <p>¥550</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title33")}</p>
              <p>¥550</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title34")}</p>
              <p>¥550</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title35")}</p>
              <p>¥550</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title36")}</p>
              <p>¥550</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title37")}</p>
              <p>¥550</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title38")}</p>
              <p>¥660</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">{t("title39")}</p>
              <p>¥770</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="lg:w-[200px] font-bold">{t("title40")}</p>
              <p className="lg:w-[200px] pl-[25px]">¥165</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
