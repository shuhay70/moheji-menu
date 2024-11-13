//! Client Componentにする。
"use client";

//! 通常のHTMLの <head> タグに相当。　Next.jsのHeadコンポーネントは各ページごとに個別のメタデータやタイトルを設定できる柔軟な方法に。
//! <title>,<meta>,<link>,<script>などが利用可能に。
import Head from "next/head";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
import Menubar from "../../components/Menubar";

const MenuPage = () => {
  return (
    <main
      className="lg:py-[100px] py-[30px]" // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Menubar />
      <SimpleBar
        className="lg:ml-[150px] ml-[38px] w-[80vw] max-h-[80vh] p-[20px] lg:pr-[15px] bg-white  overflow-y-auto"
        style={
          {
            // maxHeight: "80vh",
            // width: "80vw",
            // overflowY: "auto",
            // paddingRight: "15px",
            // backgroundColor: "white",
            // padding: "20px",
          }
        }
      >
        <div className="lg:flex">
          <div className="lg:flex ">
            <img
              src="/image/IMG_3171.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                Grilled Whole Squid with Liver and Butter
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                We grill fresh surumesquid, directly sourced from Toyosu Market,
                with the liver intact, then finish it by coating it in butter.
                The rich umami of the liver pairs perfectly with beer, making it
                an irresistible match. Enjoy the squid's firm texture and the
                flavor of slightly charred butter from the hot plate!
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <img
              src="/image/IMG_3172.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] "
              alt="mennmochi"
            />
            <div>
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pt-[30px] py-[15px]">
                Grilled Oysters with Butter
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                Every winter, we have customers who come specifically for this
                dish featuring oysters and shirako (fish roe), making it a
                popular choice! The carefully selected oysters, sourced daily
                from the market, are plump and full of rich umami. Experience
                the unique winter flavors that can only be enjoyed at
                Moheji—don't miss out!
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
                Grilled Whole Squid with Liver and Butter
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                We grill fresh surumesquid, directly sourced from Toyosu Market,
                with the liver intact, then finish it by coating it in butter.
                The rich umami of the liver pairs perfectly with beer, making it
                an irresistible match. Enjoy the squid's firm texture and the
                flavor of slightly charred butter from the hot plate!
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
                Grilled Oysters with Butter
              </p>
              <p className="lg:px-[25px] lg:h-[240px] lg:w-[280px] lg:pb-[0px] pb-[15px]">
                Every winter, we have customers who come specifically for this
                dish featuring oysters and shirako (fish roe), making it a
                popular choice! The carefully selected oysters, sourced daily
                from the market, are plump and full of rich umami. Experience
                the unique winter flavors that can only be enjoyed at
                Moheji—don't miss out!
              </p>
            </div>
          </div>
        </div>
      </SimpleBar>
      <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] ml-[38px] mr-[40px] p-[30px]"></p>
    </main>
  );
};

//? ⬇️の MenuPageはどこと繋がっている？
export default MenuPage;
