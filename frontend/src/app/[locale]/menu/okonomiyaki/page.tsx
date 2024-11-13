"use client";

import Menubar from "../../components/Menubar";
import Head from "next/head";
import Link from "next/link";

const page = () => {
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
          <div className="font-bold lg:flex lg:justify-center  text-[20px]">
            ＜お好み焼き＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[320px]  lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">豚玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>具材：キャベツ、天かす、桜えび、卵、天生地、豚</p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">海鮮玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  具材：キャベツ、天かす、桜えび、卵、天生地、えび、タコ、ホタテ、いか、げそ
                </p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">牛すじ玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  具材：
                  キャベツ、天かす、桜えび、卵、天生地、牛すじ、ごぼう、こんにゃく、
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">ミックス玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
                </p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">モダン焼き</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">天玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
              </div>
            </div>
          </div>
          <div className="font-bold lg:flex lg:justify-center lg:pt-[90px]  lg:text-[20px] pt-[50px]">
            ＜麺・ご飯＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex  lg:justify-between">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between  lg:w-[300px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">もへじ焼きそば</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  具材： 大磯麺、もやし、青梗菜、鷹の爪、キャベツ、にんにく、豚
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">五目ソース焼きそば</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  具材： 大磯麺、もやし、キャベツ、紅しょうが、天かす、豚、いか
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:py-[0px] pb-[8px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold">オムそば</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>具材： 大磯麺、卵、生クリーム、もやし、キャベツ、豚</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">海鮮ガーリックライス</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>具材： ご飯、もやし、九条ネギ、イカ、エビ、タコ、ホタテ</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">鉄板オムライス</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  具材： ご飯、卵、生クリーム、玉ねぎ、鶏肉、自家製ケチャップ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px]  p-[20px]  w-[80%]"></p> */}
    </main>
  );
};

export default page;
