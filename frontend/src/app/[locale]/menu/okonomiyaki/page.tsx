import Menubar from "../../components/Menubar";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Okonomiyaki");

  return (
    <main>
      <div
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white "
        style={{
          backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
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
                <p>{t("price1")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients1")}</p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title2")}</p>
                <p>{t("price2")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients2")} </p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title3")}</p>
                <p>{t("price3")}</p>
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
                <p>{t("price4")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients4")} </p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title5")}</p>
                <p>{t("price5")}</p>
              </div>
              <div className="lg:flex">{t("ingredients5")} </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title6")}</p>
                <p>{t("price6")}</p>
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
                <p>{t("price7")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients7")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title8")}</p>
                <p>{t("price8")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients8")} </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:py-[0px] pb-[8px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold">{t("title9")}</p>
                <p>{t("price9")}</p>
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
                <p>{t("price10")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients10")}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">{t("title11")}</p>
                <p>{t("price11")}</p>
              </div>
              <div className="lg:flex">
                <p>{t("ingredients11")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px]  p-[20px]  w-[80%]"></p> */}
    </main>
  );
}

// export default page;
