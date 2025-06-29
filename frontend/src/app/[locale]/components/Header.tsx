"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Header = () => {
  const t = useTranslations("Header");
  const [openMenu, setOpenMenu] = useState(false);

  // メニュー項目を翻訳キーで定義
  const menuItems = [
    { key: "button10", href: "/" }, // トップ
    { key: "button11", href: "/menu/monja" }, // お品書き
    { key: "button12", href: "/history" }, // 歴史
    { key: "button13", href: "https://kano-corp.tokyo/shop/" }, // アクセス
    {
      key: "button14",
      href: "https://tabelog.com/tokyo/A1313/A131302/13186205/",
    }, // ご予約
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-[80px] bg-headercolor2 text-white shadow-md px-4 py-2 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="h-full flex items-center">
          <img
            src="/image/logo4.jpg"
            alt="logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* PC ナビゲーション */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-4">
            {menuItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <li>
                  <Link href={item.href} className="hover:underline">
                    {t(item.key)}
                  </Link>
                </li>
                {idx < menuItems.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* PC版 言語切替 */}
        <div className="hidden md:block">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              {t("button2")}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-52 p-2 shadow"
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

        {/* モバイル版 ボタンコンテナ */}
        <div className="md:hidden flex items-center">
          {/* 言語切替 */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <img
                src="/image/tikyugi.jpeg"
                alt="f"
                className="h-[35px] w-[35px]"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-gray-100 text-black z-[1] w-[100px] p-2 shadow mt-[5px]"
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
          {/* ハンバーガーボタン */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="btn btn-ghost btn-circle"
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[50px] w-[50px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* モバイルメニュー */}
      {openMenu && (
        <div className="fixed top-[80px] left-0 w-full z-40 md:hidden bg-white text-black shadow-lg">
          <ul className="space-y-1 p-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block border-b border-gray-400 pb-2 hover:text-gray-500 p-3"
                  onClick={() => setOpenMenu(false)}
                >
                  <p className="font-semibold">{t(item.key)}</p>
                </Link>
              </li>
            ))}
            <li className="text-center pt-4">
              <button
                onClick={() => setOpenMenu(false)}
                className="text-sm text-gray-600 underline"
              >
                {t("button25")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
