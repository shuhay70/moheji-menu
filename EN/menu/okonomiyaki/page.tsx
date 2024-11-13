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
            ＜Okonomiyaki＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[320px]  lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Butatama</p>
                <p className="font-bold">豚玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Cabbage, tempura crumbs, sakura shrimp, eggs,
                  dough, pork
                </p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Kaisendama</p>
                <p className="font-bold">海鮮玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Cabbage, tempura crumbs, sakura shrimp, eggs,
                  dough, shrimp, octopus, scallops, squid, squid tentacles
                </p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Gyusuzidama</p>
                <p className="font-bold">牛すじ玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Cabbage, tempura crumbs, sakura shrimp, eggs,
                  dough, beef tendon, burdock, konnyaku
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Mixdama</p>
                <p className="font-bold">ミックス玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Cabbage, tempura crumbs, sakura shrimp, eggs,
                  dough, pork, beef tendon, squid
                </p>
              </div>
            </div>
            <div className="lg:w-[350px] lg:px-[6px]">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Modernyaki</p>
                <p className="font-bold">モダン焼き</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Cabbage, tempura crumbs, sakura shrimp, eggs,
                  dough, noodles, pork
                </p>
              </div>
            </div>
            <div className="lg:w-[350px]  lg:px-[6px] ">
              <div className="flex justify-between lg:pb-[10px] lg:pr-[10px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Tentama</p>
                <p className="font-bold">天玉</p>
                <p>1500円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Cabbage, tempura crumbs, sakura shrimp, eggs,
                  dough
                </p>
              </div>
            </div>
          </div>
          <div className="font-bold lg:flex lg:justify-center lg:pt-[90px]  lg:text-[20px] pt-[50px]">
            ＜Noogle,Rice＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex  lg:justify-between">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between  lg:w-[300px] lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Moheji Yakisoba</p>
                <p className="font-bold">もへじ焼きそば</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Oiso noodles, bean sprouts, bok choy, chili
                  peppers, cabbage, garlic, pork
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Gomoku Yakisoba</p>
                <p className="font-bold">五目ソース焼きそば</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Oiso noodles, bean sprouts, cabbage, pickled
                  ginger, tempura crumbs, pork, squid
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:py-[0px] pb-[8px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold">オムそば</p>
                <p>Omeletto ith Yakisoba</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Oiso noodles, eggs, fresh cream, bean sprouts,
                  cabbage, pork
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p>Garlic Rice With Seafoods </p>
                <p className="font-bold">海鮮ガーリックライス</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Rice, bean sprouts, Kujo green onions, squid,
                  shrimp, octopus, scallops
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px]">
              <div className="flex justify-between lg:py-[0px] pb-[8px] pt-[20px]">
                <p className="font-bold">Teppan Omurice</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>
                  Ingredients: Rice, eggs, fresh cream, onions, chicken,
                  homemade ketchup{" "}
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
