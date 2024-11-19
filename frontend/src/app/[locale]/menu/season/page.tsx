// "use client";

import Menubar from "../../components/Menubar";
import { useTranslations } from "next-intl";

// import Head from "next/head";
// import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("Season");

  return (
    <main

    // style={{
    //   backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      <div
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll ] bg-white"
        style={{
          backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menubar />
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
          <div className="lg:flex ">
            <img
              src="/image/IMG_3171.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                {t("title1")}
              </p>
              <p className="pb-[15px]"> {t("price1")}</p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                {t("title2")}
              </p>
            </div>
            <div className="lg:flex">
              <img
                src="/image/IMG_3172.jpg"
                className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
                alt="mennmochi"
              />
              <div>
                <div className="flex justify-between"></div>
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title3")}
                </p>
                <p className="pb-[15px]"> {t("price2")}</p>

                <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                  {t("title4")}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[1100px] border-t border-gray-300 w-[0px]"></div>
          <div className="lg:flex">
            <div className="lg:flex ">
              <img
                src="/image/IMG_3171.jpg"
                className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
                alt="mennmochi"
              />
              <div>
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title1")}
                </p>
                <p className="pb-[15px]"> {t("price3")}</p>
                <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                  {t("title2")}
                </p>
              </div>
            </div>
            <div className="lg:flex ">
              <img
                src="/image/IMG_3172.jpg"
                className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
                alt="mennmochi"
              />
              <div>
                <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                  {t("title3")}
                </p>
                <p className="pb-[15px]"> {t("price4")}</p>
                <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                  {t("title4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] mr-[40px] p-[20px]  w-[80%]"></p> */}
    </main>
  );
}

// export default page;
