import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Header");

  return (
    <header className="lg:flex lg:justify-between w-full bg-headercolor2 lg:p-2">
      {/* PC版表示 */}
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
            {t("button2")}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href="/" locale="ja">
                {t("button22")}
              </Link>
            </li>
            <li>
              <Link href="/" locale="en">
                {t("button21")}
              </Link>
            </li>
            <li>
              <Link href="/" locale="zh">
                {t("button23")}
              </Link>
            </li>
            <li>
              <Link href="/" locale="ko">
                {t("button24")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* モバイル版表示 */}
      <div className="lg:hidden flex justify-between w-full">
        <div className="flex items-center">
          <Image
            className="py-[4px] pl-[4px] pr-[1px]"
            src="/image/logo4.jpg"
            width={80}
            height={80}
            alt="Logo"
          ></Image>
        </div>
        <div className="flex">
          <div className="flex h-[100px]">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-[75px] h-[75px] text-[8px] mt-[12px]"
              >
                {t("button1")}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-auto p-2 shadow"
              >
                <li>
                  <Link className="text-black" href="/">
                    {t("button10")}
                  </Link>
                </li>
                <li>
                  <Link className="text-black" href="/menu/monja">
                    {t("button11")}
                  </Link>
                </li>
                <li>
                  <Link className="text-black" href="/history">
                    {t("button12")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black"
                    href="https://kano-corp.tokyo/shop/"
                  >
                    {t("button13")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black"
                    href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
                  >
                    {t("button14")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-[85px] h-[75px] text-[8px] mt-[12px]"
              >
                {t("button2")}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-auto p-2 shadow"
              >
                <li>
                  <Link href="/" locale="ja">
                    {t("button22")}
                  </Link>
                </li>
                <li>
                  <Link href="/" locale="en">
                    {t("button21")}
                  </Link>
                </li>
                <li>
                  <Link href="/" locale="zh">
                    {t("button23")}
                  </Link>
                </li>
                <li>
                  <Link href="/" locale="ko">
                    {t("button24")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
