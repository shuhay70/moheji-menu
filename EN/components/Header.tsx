"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const handleClickHeader = () => {
    router.push("/header");
    // alert("Menu button clicked!");
  };
  return (
    <>
      {/* bg-headercolorはtailwind.config.tsで自分で作った変数。 */}
      <header className="lg:flex lg:justify-between w-full bg-headercolor2 lg:p-2 w-[390px]">
        <div className="hidden sm:block lg:flex lg:justify-between w-full">
          <div className="lg:flex lg:items-center">
            <Image
              className="lg:pl-[20px] w-[30px] h-[30px] lg:w-[78px] lg:h-[65px]"
              // publicディレクトリの中にimageディレクトリを作り、そこに画像を保存すると、パスでたどる必要はなく『/』から始めれば良い。
              src="/image/logo4.jpg"
              width={75}
              height={75}
              // altはsrcに来るものの名前が相応しい
              alt="Logo"
            ></Image>
            <h1 className="text-white lg:text-[10px] lg:pt-[8px] lg:pl-[8px] text-[0px]">
              FROM TOKTYO TO THE WORLD
            </h1>
          </div>
          <div className="flex justify-items-center">
            <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
              {/*元々、useRouterを使っていたが<Link>の方が簡単。  */}
              <Link className="text-white" href="/">
                Home
              </Link>
            </div>
            <div className="flex border-l border-white lg:h-[35px] lg:mt-[10px]" />
            <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
              <Link className="text-white" href="/menu/monja">
                Menus
              </Link>
            </div>
            <div className="border-l  border-white lg:h-[35px] lg:mt-[10px]" />
            <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
              <Link className="text-white" href="/history">
                About Monja
              </Link>
            </div>
            <div className="border-l  border-white  lg:h-[35px] lg:mt-[10px]" />
            <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
              <Link className="text-white" href="https://kano-corp.tokyo/shop/">
                Locations
              </Link>
            </div>
            <div className="border-l  border-white  lg:h-[35px] lg:mt-[10px]" />
            <div className="lg:p-4 lg:w-[110px] flex items-center justify-center">
              <Link
                className="text-white"
                href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
              >
                Reserve
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
                  Japanese
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
              // publicディレクトリの中にimageディレクトリを作り、そこに画像を保存すると、パスでたどる必要はなく『/』から始めれば良い。
              src="/image/logo4.jpg"
              width={60}
              height={60}
              // altはsrcに来るものの名前にする
              alt="Logo"
            ></Image>
            <h1 className="text-white text-[10px] lg:pt-[8px] lg:pl-[8px] ">
              FROM TOKTYO TO THE WORLD
            </h1>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 w-[45px] text-[8px] mt-[8px]"
                >
                  Menu
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-[80px] h-[200px] p-2 shadow"
                >
                  <div className="flex ">
                    <div className="flex flex-col justify-items-center">
                      <div className="lg:p-4 lg:w-[110px] flex items-center justify-center  lg:py-[0px] py-[8px] ">
                        {/*元々、useRouterを使っていたが<Link>の方が簡単。  */}
                        <Link className="text-black" href="/">
                          Home
                        </Link>
                      </div>
                      <div className="flex border-l border-black lg:h-[35px] lg:mt-[10px]" />
                      <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] ">
                        <Link className="text-black" href="menu/monja">
                          Menus
                        </Link>
                      </div>
                      <div className="border-l  border-black lg:h-[35px] lg:mt-[10px]" />
                      <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] ">
                        <Link className="text-black" href="/history">
                          About Monja
                        </Link>
                      </div>
                      <div className="border-l  border-black lg:h-[35px] lg:mt-[10px]" />
                      <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] ">
                        <Link
                          className="text-black"
                          href="https://kano-corp.tokyo/shop/"
                        >
                          Locations
                        </Link>
                      </div>
                      <div className="border-l  border-black  lg:h-[35px] lg:mt-[10px]" />
                      <div className="lg:p-4 lg:w-[110px] flex items-center justify-center lg:py-[0px] py-[8px] ">
                        <Link
                          className="text-black"
                          href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
                        >
                          Reserve
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
                  className="btn m-1 w-[45px] text-[8px] mt-[8px]"
                >
                  Language
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-[80px] h-[55px] p-2 shadow"
                >
                  <div className="lg:pt-[7px]">
                    <Link
                      className="text-black lg:text-[13px] lg:p-4 flex items-center justify-center"
                      href="https://www.eurostar.com/search/be-en?adult=1&origin=8814001&destination=8400058&outbound=2025-02-04"
                    >
                      Japanese
                    </Link>

                    <Link
                      className="text-black text-[13px] lg:p-4 flex items-center justify-center"
                      href="https://www.instagram.com/p/Cz5dYfZSALQ/?img_index=1"
                    >
                      English
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
