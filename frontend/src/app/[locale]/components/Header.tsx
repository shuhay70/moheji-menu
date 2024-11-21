import React from "react";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Header");

  return (
    <header className="lg:flex lg:justify-between w-full bg-headercolor2 lg:p-2 w-[390px]">
      <div className="hidden sm:block lg:flex lg:justify-between w-full">
        <div className="lg:flex lg:items-center">
          <Image
            className="lg:pl-[20px] w-[30px] h-[30px] lg:w-[78px] lg:h-[65px]"
            src="/image/logo4.jpg"
            width={75}
            height={75}
            alt="Logo"
          ></Image>
          <h1 className="text-white lg:text-[10px] lg:pt-[8px] lg:pl-[8px] text-[0px]">
            {t("title")}
          </h1>
        </div>
        <div className="flex justify-items-center">
          <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
            <Link className="text-white" href="/">
              トップ
            </Link>
          </div>
          <div className="flex border-l border-white lg:h-[35px] lg:mt-[10px]" />
          <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
            <Link className="text-white" href="/menu/monja">
              お品書き
            </Link>
          </div>
          <div className="border-l  border-white lg:h-[35px] lg:mt-[10px]" />
          <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
            <Link className="text-white" href="/history">
              歴史
            </Link>
          </div>
          <div className="border-l  border-white  lg:h-[35px] lg:mt-[10px]" />
          <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
            <Link className="text-white" href="https://kano-corp.tokyo/shop/">
              アクセス
            </Link>
          </div>
          <div className="border-l  border-white  lg:h-[35px] lg:mt-[10px]" />
          <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
            <Link
              className="text-white"
              href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
            >
              ご予約
            </Link>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 mt-[8px]">
            Language
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <div className="lg:pt-[7px]">
              <Link
                className="text-black lg:text-[13px] lg:p-4 flex items-center justify-center"
                href=""
              >
                日本語
              </Link>

              <Link
                className="text-black text-[13px] lg:p-4 flex items-center justify-center"
                href="https://tsukishima-monja-koboreya.com/"
              >
                English
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* 以下モバイル */}
      <div className="lg:hidden flex justify-between">
        <div className="flex items-center">
          <Image
            className="py-[4px] pl-[4px] pr-[1px]"
            src="/image/logo4.jpg"
            width={60}
            height={60}
            alt="Logo"
          ></Image>
        </div>
        <div className="flex">
          <div className="flex">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-[75px] text-[8px] mt-[8px]"
              >
                {t("button1")}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-[100%] h-[220px] p-2 shadow"
              >
                <div className="flex ">
                  <div className="flex flex-col justify-items-center">
                    <div className="lg:p-4 lg:w-[110px] flex items-center justify-center  lg:py-[0px] py-[8px] ">
                      <Link className="text-black" href="/">
                        {t("button10")}
                      </Link>
                    </div>
                    <div className="flex border-l border-black lg:h-[35px] lg:mt-[10px]" />
                    <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] ">
                      <Link className="text-black" href="/menu/monja">
                        {t("button11")}
                      </Link>
                    </div>
                    <div className="border-l  border-black lg:h-[35px] lg:mt-[10px]" />
                    <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] lg:pl-[0px] pl-[10px] ">
                      <Link className="text-black" href="/history">
                        {t("button12")}
                      </Link>
                    </div>
                    <div className="border-l  border-black lg:h-[35px] lg:mt-[10px]" />
                    <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] ">
                      <Link
                        className="text-black"
                        href="https://kano-corp.tokyo/shop/"
                      >
                        {t("button13")}
                      </Link>
                    </div>
                    <div className="border-l  border-black  lg:h-[35px] lg:mt-[10px]" />
                    <div className="lg:p-4 lg:w-[110px] flex items-center justify-center pt-[8px]">
                      <Link
                        className="text-black"
                        href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
                      >
                        {t("button14")}
                      </Link>
                    </div>
                  </div>
                </div>
              </ul>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-[75px] text-[8px] mt-[8px]"
              >
                {t("button2")}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-[100%] h-[155px] p-2 shadow"
              >
                <div className="lg:pt-[7px]">
                  <Link
                    className="text-black lg:text-[13px] lg:p-4 flex items-center justify-center"
                    href="/"
                    locale="ja"
                  >
                    {t("button22")}
                  </Link>

                  <Link
                    className="text-black text-[13px] lg:p-4 flex items-center justify-center"
                    href="/"
                    locale="en"
                  >
                    {t("button21")}
                  </Link>
                  <Link
                    className="text-black text-[13px] lg:p-4 flex items-center justify-center"
                    href="/"
                    locale="zh-CN"
                  >
                    {t("button23")}
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
